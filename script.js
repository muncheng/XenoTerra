/*
 * All site data comes from analogue_sites.geojson (same folder as index.html).
 */
const GEOJSON_PATH = "analogue_sites.geojson";

let sites = [];
let datasetMeta = {};

let map;
let markers = [];
let previousScrollY = 0;
let profileIsOpen = false;
let currentSiteId = null;


function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[character]);
}


function slugify(text) {
  return String(text)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}


function featureToSite(feature) {
  const p = feature.properties || {};
  const [lon, lat] = feature.geometry.coordinates;

  return {
    id: slugify(`${p.body}-${p.site}`),
    name: p.site,
    country: p.country,
    environment: p.body,
    rank: p.rank,
    climate: p.climate_0_10,
    terrain: p.terrain_0_10,
    suitability: p.est_suitability_0_100,
    access: p.access_note,
    documented: p.documented,
    coordinates: [lat, lon]
  };
}


async function loadSites() {
  const response = await fetch(GEOJSON_PATH);
  if (!response.ok) throw new Error(`Could not load ${GEOJSON_PATH}`);

  const geojson = await response.json();
  datasetMeta = geojson.metadata || {};

  sites = (geojson.features || [])
    .filter(f => f.geometry && f.geometry.type === "Point")
    .map(featureToSite)
    .sort((a, b) =>
      a.environment.localeCompare(b.environment) || a.rank - b.rank
    );
}


const BOTH = "Moon / Mars";


function environmentLabel(environment) {
  return environment === BOTH ? "Moon + Mars" : `${environment} analogue`;
}


function documentedText(site) {
  if (site.documented === true) return "Previously studied analogue";
  if (site.documented === false) return "No prior analogue research found";
  return "—";
}


function formatCoord(value, positive, negative) {
  return `${Math.abs(value).toFixed(2)}° ${value >= 0 ? positive : negative}`;
}


function coordText(site) {
  const [lat, lon] = site.coordinates;
  return `${formatCoord(lat, "N", "S")}, ${formatCoord(lon, "E", "W")}`;
}


function statsLineHTML(site) {
  return `
    Suitability: ${escapeHTML(site.suitability)}/100<br>
    Climate: ${escapeHTML(site.climate)}/10 · Terrain: ${escapeHTML(site.terrain)}/10<br>
    Rank: #${escapeHTML(site.rank)} (${escapeHTML(site.environment)})
  `;
}


function searchableText(site) {
  return [
    site.name,
    site.country,
    site.environment,
    site.access,
    site.suitability,
    site.rank,
    documentedText(site)
  ].join(" ").toLowerCase();
}


function matchesFilters(site, searchValue, selectedEnvironment) {
  const matchesEnvironment =
    selectedEnvironment === "All" ||
    site.environment === selectedEnvironment ||
    site.environment === BOTH;

  return matchesEnvironment && searchableText(site).includes(searchValue);
}


/* ---------- Map ---------- */

function markerPopupHTML(site) {
  return `
    <div class="site-popup">
      <span class="environment-tag">${escapeHTML(environmentLabel(site.environment))}</span>
      <h3>${escapeHTML(site.name)}</h3>
      <p class="popup-location">${escapeHTML(site.country)} · ${escapeHTML(coordText(site))}</p>
      <p class="popup-description">${statsLineHTML(site)}</p>
      <button
        class="view-site-button"
        type="button"
        data-site-id="${escapeHTML(site.id)}"
      >
        View full stats →
      </button>
    </div>
  `;
}


function createMarkerIcon() {
  return L.divIcon({
    className: "analogue-marker-icon",
    html: '<span class="marker-pulse"></span><span class="marker-dot"></span>',
    iconSize: [28, 28],
    iconAnchor: [14, 14],
    popupAnchor: [0, -12]
  });
}


function keepPopupInsideMap(popup) {
  if (!map || !popup) return;

  const mapElement = map.getContainer();
  const popupElement = popup.getElement();
  if (!mapElement || !popupElement) return;

  const mapRect = mapElement.getBoundingClientRect();
  const popupRect = popupElement.getBoundingClientRect();

  let offsetY = 0;
  if (popupRect.top < mapRect.top + 8) {
    offsetY = mapRect.top + 8 - popupRect.top;
  }

  if (offsetY !== 0) {
    popup.options.offset = L.point(0, 18 + offsetY);
    popup.update();
  }
}


function initialiseMap() {
  map = L.map("map", {
    zoomControl: true,
    worldCopyJump: true,
    minZoom: 2,
    maxZoom: 12,
    maxBounds: [[-85, -180], [85, 180]],
    maxBoundsViscosity: 0.7
  }).setView([15, 0], 2);

  const streetLayer = L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }
  );

  const satelliteLayer = L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    {
      attribution: "Tiles &copy; Esri"
    }
  );

  satelliteLayer.addTo(map);

  L.control.layers({
    "Satellite": satelliteLayer,
    "Street map": streetLayer,
  }, null, {
    position: "topright"
  }).addTo(map);

  sites.forEach(site => {
    const marker = L.marker(site.coordinates, {
      title: site.name,
      riseOnHover: true,
      icon: createMarkerIcon()
    });

    marker.siteId = site.id;

    marker.bindPopup(markerPopupHTML(site), {
      autoPan: false,
      closeButton: true,
      maxWidth: 260,
      minWidth: 220,
      keepInView: false,
      autoClose: true,
      offset: L.point(0, 18)
    });

    marker.on("popupopen", event => {
      const popup = event.popup;

      requestAnimationFrame(() => {
        keepPopupInsideMap(popup);

        const button = popup.getElement()?.querySelector(".view-site-button");
        button?.addEventListener("click", () => {
          openSiteDetail(site.id);
        }, { once: true });
      });
    });

    markers.push(marker);
    marker.addTo(map);
  });
}


/* ---------- Cards ---------- */

function renderCards(filteredSites = sites) {
  const container = document.getElementById("siteContainer");
  const resultsCount = document.getElementById("resultsCount");

  resultsCount.textContent =
    `${filteredSites.length} ${filteredSites.length === 1 ? "site" : "sites"} found`;

  if (filteredSites.length === 0) {
    container.innerHTML = `
      <p class="no-results">
        No sites match your search. Try another keyword or environment.
      </p>
    `;
    return;
  }

  container.innerHTML = filteredSites.map(site => `
    <article
      class="site-card"
      tabindex="0"
      role="button"
      aria-label="View ${escapeHTML(site.name)} stats"
      data-site-id="${escapeHTML(site.id)}"
    >
      <div class="site-card-content">
        <span class="environment-tag">${escapeHTML(environmentLabel(site.environment))}</span>
        <h3>${escapeHTML(site.name)}</h3>
        <p class="site-location">${escapeHTML(site.country)} · ${escapeHTML(coordText(site))}</p>
        <p class="site-description">${statsLineHTML(site)}</p>
        <span class="card-link">View stats →</span>
      </div>
    </article>
  `).join("");

  container.querySelectorAll(".site-card").forEach(card => {
    const open = () => openSiteDetail(card.dataset.siteId);

    card.addEventListener("click", open);
    card.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        open();
      }
    });
  });
}


function filterSites() {
  const searchValue = document
    .getElementById("searchInput")
    .value
    .trim()
    .toLowerCase();

  const selectedEnvironment = document.getElementById("environmentFilter").value;

  const filteredSites = sites.filter(site =>
    matchesFilters(site, searchValue, selectedEnvironment)
  );

  renderCards(filteredSites);

  if (map && markers.length) {
    const visibleIds = new Set(filteredSites.map(site => site.id));

    markers.forEach(marker => {
      if (visibleIds.has(marker.siteId)) {
        if (!map.hasLayer(marker)) marker.addTo(map);
      } else if (map.hasLayer(marker)) {
        marker.removeFrom(map);
      }
    });
  }
}


/* ---------- Profile (stats) ---------- */

function listHTML(items) {
  return `<ul>${items.map(item => `<li>${escapeHTML(item)}</li>`).join("")}</ul>`;
}


function profileSection(title, content, index, extraClass = "") {
  return `
    <section class="profile-section ${extraClass}" style="--section-index:${index}">
      <h3>${escapeHTML(title)}</h3>
      ${content}
    </section>
  `;
}


function renderProfile(site) {
  const container = document.getElementById("siteDetail");

  const sameBody = sites.filter(s => s.environment === site.environment);
  const bodyAverage = sameBody.reduce((sum, s) => sum + s.suitability, 0) / sameBody.length;
  const diff = site.suitability - bodyAverage;

  const sections = [
    profileSection(
      "Scores",
      listHTML([
        `Climate: ${site.climate} / 10`,
        `Terrain: ${site.terrain} / 10`,
        `Estimated suitability: ${site.suitability} / 100`
      ]),
      0
    ),
    profileSection(
      "Ranking",
      listHTML([
        `Rank ${site.rank} of ${sameBody.length} (${site.environment})`,
        `${site.environment} average: ${bodyAverage.toFixed(1)} / 100`,
        `Difference from average: ${diff >= 0 ? "+" : ""}${diff.toFixed(1)}`,
        `Status: ${documentedText(site)}`
      ]),
      1
    ),
    profileSection(
      "Access",
      listHTML(String(site.access || "—").split(";").map(s => s.trim()).filter(Boolean)),
      2
    ),
    profileSection(
      "Method",
      listHTML([
        datasetMeta.scoring ? `Scoring: ${datasetMeta.scoring}` : "Scoring: —",
        datasetMeta.tile_size_km ? `Tile size: ${datasetMeta.tile_size_km} × ${datasetMeta.tile_size_km} km` : "Tile size: —"
      ]),
      3
    ),
    profileSection(
      "Location data",
      `<p class="profile-coordinates">Latitude: ${site.coordinates[0]}°<br>Longitude: ${site.coordinates[1]}°</p>`,
      4,
      "coordinates-section"
    )
  ].join("");

  container.innerHTML = `
    <article class="site-profile">
      <button class="back-button" type="button" data-back>
        ← Back to database
      </button>

      <div class="profile-hero">
        <div class="profile-heading">
          <p class="eyebrow">TERRESTRIAL ANALOGUE PROFILE</p>
          <span class="environment-tag">${escapeHTML(environmentLabel(site.environment))}</span>
          <h2>${escapeHTML(site.name)}</h2>
          <p class="profile-location">${escapeHTML(site.country)} · ${escapeHTML(coordText(site))}</p>
        </div>

        ${profileSection(
          "Estimated suitability",
          `<h2>${escapeHTML(site.suitability)}<span class="profile-location"> / 100</span></h2>`,
          0
        )}
      </div>

      <div class="profile-content">
        ${sections}
      </div>

      <div class="profile-bottom">
        <button class="back-button" type="button" data-back>
          ← Back to database
        </button>
      </div>
    </article>
  `;

  container.querySelectorAll("[data-back]").forEach(button => {
    button.addEventListener("click", closeSiteDetail);
  });
}


function showProfile(site) {
  if (!profileIsOpen) {
    previousScrollY = window.scrollY;
  }

  profileIsOpen = true;
  currentSiteId = site.id;

  document.querySelector(".hero").classList.add("hidden");
  document.getElementById("mapSection").classList.add("hidden");
  document.getElementById("sitesSection").classList.add("hidden");
  document.getElementById("siteDetailSection").classList.remove("hidden");

  renderProfile(site);
}


function openSiteDetail(siteId) {
  const site = sites.find(item => item.id === siteId);
  if (!site) return;

  showProfile(site);

  const newHash = `#site/${site.id}`;
  if (window.location.hash !== newHash) {
    history.pushState({ siteId: site.id }, "", newHash);
  }

  requestAnimationFrame(() => {
    const detailSection = document.getElementById("siteDetailSection");
    const rect = detailSection.getBoundingClientRect();

    if (rect.bottom < 0 || rect.top > window.innerHeight) {
      window.scrollTo({ top: detailSection.offsetTop - 20, behavior: "auto" });
    }
  });
}


function closeSiteDetail(options = {}) {
  const { fromHistory = false } = options;
  if (!profileIsOpen) return;

  profileIsOpen = false;
  currentSiteId = null;

  document.querySelector(".hero").classList.remove("hidden");
  document.getElementById("mapSection").classList.remove("hidden");
  document.getElementById("sitesSection").classList.remove("hidden");
  document.getElementById("siteDetailSection").classList.add("hidden");

  if (!fromHistory && window.location.hash.startsWith("#site/")) {
    history.pushState({}, "", window.location.pathname + window.location.search);
  }

  requestAnimationFrame(() => {
    window.scrollTo({ top: previousScrollY, behavior: "auto" });
    map?.invalidateSize();
  });
}


function handleHashChange() {
  const hash = window.location.hash;

  if (hash.startsWith("#site/")) {
    const site = sites.find(s => s.id === hash.slice("#site/".length));
    if (site) {
      showProfile(site);
      return;
    }
  }

  if (profileIsOpen) {
    closeSiteDetail({ fromHistory: true });
  }
}


document.addEventListener("DOMContentLoaded", async () => {
  try {
    await loadSites();
  } catch (error) {
    document.getElementById("resultsCount").textContent =
      `Could not load ${GEOJSON_PATH}. Open the site through a local server (see console).`;
    console.error(error);
    return;
  }

  initialiseMap();
  renderCards();

  document.getElementById("searchInput").addEventListener("input", filterSites);
  document.getElementById("environmentFilter").addEventListener("change", filterSites);

  window.addEventListener("popstate", handleHashChange);
  window.addEventListener("hashchange", handleHashChange);

  if (window.location.hash.startsWith("#site/")) {
    handleHashChange();
  }
});