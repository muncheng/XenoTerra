const sites = [
  {
    id: "makgadikgadi",
    name: "Makgadikgadi Pans",
    location: "Botswana, Southern Africa",
    environment: "Mars",
    coordinates: [-20.4507, 24.8093],
    image: "images/Makgadikgadi Pans, Botswana.png",
    description:
      "Vast salt flats that were once part of an ancient lake system. Their dry, mineral-rich landscape offers clues to how water can shape planetary surfaces.",
    significance:
      "Makgadikgadi preserves evidence of a landscape transformed by the rise and disappearance of ancient lakes. Its salt deposits and sedimentary features help researchers investigate how water leaves traces behind as a climate becomes drier.",
    features: [
      "Extensive salt crusts and exposed lakebed sediments",
      "Evidence of former lakes and changing shorelines",
      "Very dry conditions with strong seasonal contrasts",
      "Flat terrain useful for testing robotic mobility and navigation"
    ],
    challenges: [
      "High temperatures and intense sunlight",
      "Dust, loose sediment and changing surface conditions",
      "Seasonal flooding can make some areas inaccessible"
    ],
    applications:
      "Useful for studying ancient water environments, interpreting mineral deposits, and testing how robotic explorers travel across broad, exposed terrain."
  },
  {
    id: "pilbara",
    name: "Pilbara",
    location: "Marble Bar, Pilbara, Western Australia",
    environment: "Mars",
    coordinates: [-21.1707, 119.7444],
    image: "images/Pilbara, WA.png",
    description:
      "An ancient geological region containing some of Earth's oldest rocks. Its preserved formations help scientists investigate how early planetary environments may have developed.",
    significance:
      "The Pilbara contains ancient rocks and geological structures that preserve evidence of early Earth. Studying them helps researchers understand how old rocks record environmental change and how to recognise potentially significant geological patterns elsewhere.",
    features: [
      "Some of Earth's oldest preserved rock formations",
      "Ancient volcanic and sedimentary rocks",
      "Layered geological structures and mineral deposits",
      "Evidence relevant to early environments and habitability"
    ],
    challenges: [
      "Extreme heat and strong sunlight",
      "Remote field locations and long travel distances",
      "Weathering can obscure or alter older rock surfaces"
    ],
    applications:
      "Supports research into ancient planetary geology, the preservation of possible biosignatures, and the methods used to select and investigate scientifically valuable rocks on Mars."
  },
  {
    id: "mcmurdo",
    name: "McMurdo Dry Valleys",
    location: "Antarctica",
    environment: "Mars",
    coordinates: [-77.5, 162.0],
    image: "images/McMurdo.png",
    description:
      "One of Antarctica's coldest and driest regions, with exposed rock, frozen lakes and very limited visible life. It provides a valuable comparison for harsh Martian conditions.",
    significance:
      "The Dry Valleys combine extreme cold, very low precipitation and limited biological activity. Researchers use the region to investigate how organisms survive environmental stress and how cold, dry landscapes change over time.",
    features: [
      "Extremely cold, arid conditions",
      "Exposed rock and sparsely distributed soil",
      "Frozen and seasonally changing lakes",
      "Microbial life in specialised protected environments"
    ],
    challenges: [
      "Dangerously cold temperatures and strong winds",
      "Limited access and demanding field logistics",
      "Sensitive ecosystems require careful protection"
    ],
    applications:
      "Helps researchers evaluate instruments, investigate the limits of life, and study how water and ice behave in cold environments comparable in selected ways to Mars."
  },
  {
    id: "lanzarote",
    name: "Lanzarote",
    location: "Las Grietas, Lanzarote, Canary Islands, Spain",
    environment: "Both",
    coordinates: [28.9729, -13.6369],
    image: "images/Lanzarote, Canary Islands.png",
    description:
      "A volcanic island shaped by lava flows, ash and a dry climate. Its exposed volcanic terrain provides a practical setting for studying planetary geology.",
    significance:
      "Lanzarote's volcanic landscapes offer relatively accessible examples of how lava flows and volcanic deposits form and weather. Researchers can examine these features in the field and test instruments in a rugged environment.",
    features: [
      "Lava fields and volcanic cones",
      "Basaltic rocks and ash deposits",
      "Arid areas with sparse vegetation",
      "Contrasting lava surfaces and weathered terrain"
    ],
    challenges: [
      "Sharp, uneven volcanic rock",
      "Strong sunlight and limited shade",
      "Differences between Earth's atmosphere and the Moon or Mars"
    ],
    applications:
      "Useful for geological field training, testing remote-sensing equipment, and practising the identification of volcanic landforms relevant to lunar and Martian exploration."
  },
  {
    id: "namib",
    name: "Namib Desert",
    location: "Sossusvlei, Namib Desert, Namibia",
    environment: "Mars",
    coordinates: [-24.7398, 15.2876],
    image: "images/Namib Desert.png",
    description:
      "An ancient desert known for towering dunes, gravel plains and very low rainfall. Its wind-shaped landscape helps scientists investigate surface processes in dry environments.",
    significance:
      "The Namib offers a range of desert landforms shaped by wind, weathering and limited moisture. Its dunes and exposed surfaces allow researchers to study how sediment moves and how landscape patterns develop in arid regions.",
    features: [
      "Large dunes and wind-shaped sand patterns",
      "Gravel plains and exposed rock",
      "Very low rainfall in many areas",
      "Strong interactions between wind and surface material"
    ],
    challenges: [
      "High daytime temperatures and intense sunlight",
      "Wind-blown sand and dust",
      "Dunes and loose ground can complicate vehicle movement"
    ],
    applications:
      "Supports studies of wind-driven sediment transport, surface imaging and robotic mobility in dry terrain. It is a useful comparison for selected Martian surface processes, though the environments are not identical."
  },
  {
    id: "pilot-valley",
    name: "Pilot Valley Playa",
    location: "Utah, USA",
    environment: "Mars",
    coordinates: [41.0, -113.9],
    image: "images/Pilot Valley Playa, Utah.png",
    description:
      "A dry lakebed with fine sediments and salt-rich surface deposits. Its flat, exposed ground makes it useful for investigating former water environments and rover movement.",
    significance:
      "A playa forms where water collects temporarily and later evaporates, leaving sediments and minerals behind. These deposits provide clues about past water activity and the environmental conditions that shaped the basin.",
    features: [
      "Flat, fine-grained lakebed sediments",
      "Evaporite minerals and salt-rich deposits",
      "Surface patterns formed during drying",
      "Open terrain suitable for vehicle and instrument trials"
    ],
    challenges: [
      "Fine dust and loose surface material",
      "Some areas may become soft or muddy after rainfall",
      "Surface conditions can change with moisture"
    ],
    applications:
      "Useful for testing rover mobility, studying sediment and mineral patterns, and practising how scientists interpret evidence of past water on Mars."
  },
  {
    id: "askja",
    name: "Askja Caldera",
    location: "Iceland",
    environment: "Both",
    coordinates: [65.033, -16.783],
    image: "images/Askja Caldera, Iceland.png",
    description:
      "A volcanic caldera surrounded by lava fields and rugged highland terrain. Its volcanic features help researchers study how planetary surfaces are built and altered.",
    significance:
      "Askja offers a striking landscape of volcanic deposits, caldera features and relatively sparse vegetation. Its geology helps researchers compare how volcanic activity creates landforms on Earth and other rocky worlds.",
    features: [
      "Large volcanic caldera and surrounding lava fields",
      "Basaltic rocks and volcanic deposits",
      "Sparse vegetation in exposed highland areas",
      "Terrain with varied slopes and surface textures"
    ],
    challenges: [
      "Cold, changeable weather",
      "Remote access and limited infrastructure",
      "Rough terrain and potentially hazardous volcanic areas"
    ],
    applications:
      "Useful for testing field instruments, studying volcanic landforms and training teams to interpret geological features relevant to lunar and Martian exploration."
  },
  {
    id: "craters-moon",
    name: "Craters of the Moon",
    location: "Idaho, USA",
    environment: "Both",
    coordinates: [43.462, -113.561],
    image: "images/Craters of the Moon, Idaho.png",
    description:
      "A volcanic landscape of dark lava flows, cinder cones and rugged rock. Its dramatic terrain offers a useful setting for practising geological exploration.",
    significance:
      "The area preserves extensive volcanic features and different types of lava terrain. These provide a natural setting for studying how lava forms surfaces and how explorers can safely investigate unfamiliar geological landscapes.",
    features: [
      "Broad basaltic lava flows",
      "Cinder cones and volcanic craters",
      "Rugged, fractured and uneven rock surfaces",
      "Distinctive contrasts in surface texture and colour"
    ],
    challenges: [
      "Sharp and uneven lava rock",
      "Limited shade and exposed walking routes",
      "Some terrain is difficult to cross safely"
    ],
    applications:
      "Supports geological mapping, route planning, equipment trials and fieldwork training for exploring rough volcanic surfaces on the Moon and Mars."
  },
  {
    id: "atacama",
    name: "Atacama Desert",
    location: "Yungay, Atacama Desert, Chile",
    environment: "Mars",
    coordinates: [-24.0846, -69.9153],
    image: "images/Atacama Desert.png",
    description:
      "One of the driest regions on Earth, with salt deposits, mineral-rich ground and very limited rainfall. It is especially valuable for investigating life in extreme dryness.",
    significance:
      "The Atacama's exceptional aridity makes it important for studying the limits of microbial survival and the preservation of organic material. Its soils and minerals can also help researchers develop methods for analysing Martian samples.",
    features: [
      "Extremely low rainfall in some areas",
      "Salt-rich soils and mineral deposits",
      "High-altitude terrain in parts of the region",
      "Very limited biological activity in the driest environments"
    ],
    challenges: [
      "Intense solar radiation and large temperature changes",
      "Very dry conditions and limited water supplies",
      "High altitude can make fieldwork physically demanding"
    ],
    applications:
      "Useful for testing life-detection instruments, investigating the survival of microorganisms in dry soils, and developing techniques for detecting and interpreting possible biosignatures on Mars."
  },
  {
    id: "stillwater",
    name: "Stillwater Igneous Complex",
    location: "Beartooth Mountains, Montana, USA",
    environment: "Moon",
    coordinates: [45.4167, -110.0],
    image: "images/Stillwater Igneous Complex, Montana.png",
    description:
      "A major layered igneous rock formation created as magma cooled and crystallised. Its mineral layers help scientists understand how rocky planetary bodies develop internally.",
    significance:
      "The Stillwater Complex exposes layered rocks formed as minerals crystallised and accumulated within a large magma system. Such formations provide evidence about the processes that differentiate the interiors of rocky worlds.",
    features: [
      "Distinctive layers of igneous rock",
      "Minerals that crystallised at different stages",
      "Exposed geological structures shaped by later processes",
      "Evidence useful for interpreting magmatic differentiation"
    ],
    challenges: [
      "Mountainous terrain and steep slopes",
      "Cold weather and changing mountain conditions",
      "Some outcrops require difficult access"
    ],
    applications:
      "Helps researchers understand igneous processes, interpret lunar rock samples and investigate how magma and mineral crystallisation contribute to the geological evolution of rocky planetary bodies."
  },
  {
    id: "pampas-la-joya",
    name: "Pampas de La Joya",
    location: "Arequipa, Southern Peru",
    environment: "Mars",
    coordinates: [-16.7426, -72.0431],
    image: "images/Pampas de La Joya, Peru.png",
    description:
      "A hyperarid coastal desert plain in southern Peru with salt-bearing soils and almost no rainfall. Its soils are often compared with those of the Atacama.",
    significance:
      "Pampas de La Joya is one of the driest places in South America. Its soils contain salts such as sulfates and nitrates and very little organic matter, which makes it useful for studying how organic material survives, or breaks down, in extremely dry ground.",
    features: [
      "Hyperarid soils with very little organic content",
      "Sulfate- and nitrate-bearing salt deposits",
      "Flat desert plains and dry drainage channels",
      "Very sparse microbial communities"
    ],
    challenges: [
      "Intense sunlight and high UV exposure",
      "Little or no local water supply",
      "Dust and fine wind-blown sediment"
    ],
    applications:
      "Useful for testing life-detection and organic-analysis methods on low-biomass soils, and for comparing salt-rich desert soils with Martian regolith."
  },
  {
    id: "dallol",
    name: "Dallol",
    location: "Danakil Depression, Afar, Ethiopia",
    environment: "Mars",
    coordinates: [14.2286, 40.2906],
    image: "images/Dallol, Ethiopia.png",
    description:
      "A hydrothermal field below sea level, with hot, highly acidic and salty pools in vivid yellow, green and orange. It is one of the most chemically extreme places on Earth.",
    significance:
      "Dallol combines heat, extreme acidity and very high salt levels in one place. Researchers use it to test where the limits of life lie, which helps define what kinds of ancient Martian hydrothermal or brine environments could, or could not, have been habitable.",
    features: [
      "Hot springs with highly acidic, salt-saturated brines",
      "Colourful salt, sulfur and iron-mineral deposits",
      "Salt terraces and chimneys formed by hydrothermal activity",
      "Location below sea level within an active rift"
    ],
    challenges: [
      "Among the hottest inhabited regions on Earth",
      "Toxic gases and corrosive, acidic water",
      "Remote location with difficult access and security considerations"
    ],
    applications:
      "Helps researchers study the limits of life, how minerals form in hydrothermal brines, and how to recognise similar mineral deposits in Martian orbital and rover data."
  },
  {
    id: "white-sands",
    name: "White Sands",
    location: "New Mexico, USA",
    environment: "Mars",
    coordinates: [32.7788, -106.3302],
    image: "images/White Sands, New Mexico.png",
    description:
      "The world's largest gypsum dune field, made of bright white sand. Gypsum dunes have also been detected on Mars, especially near its north polar region.",
    significance:
      "Gypsum is a mineral that usually forms when water evaporates. White Sands lets scientists study how gypsum dunes form, move and change, which helps them interpret similar sulfate-rich dune fields seen on Mars.",
    features: [
      "Large field of gypsum sand dunes",
      "Evaporite basin formed from an ancient lake",
      "Dunes of different shapes shaped by prevailing winds",
      "Damp, cemented interdune surfaces"
    ],
    challenges: [
      "Bright, reflective sand and strong glare",
      "High summer temperatures",
      "Access restrictions due to the nearby missile range"
    ],
    applications:
      "Supports research into sulfate dunes, wind-driven sand movement and spectral identification of gypsum, helping interpret evidence of past water on Mars."
  },
  {
    id: "uyuni",
    name: "Salar de Uyuni",
    location: "Potosí, Bolivia",
    environment: "Mars",
    coordinates: [-20.38, -66.95],
    image: "images/Salar de Uyuni, Bolivia.png",
    description:
      "The world's largest salt flat, sitting high in the Andes. Its huge, extremely flat salt crust covers brines rich in dissolved minerals.",
    significance:
      "Salar de Uyuni is the remains of ancient lakes that evaporated, leaving thick salt layers and brines behind. Its high altitude, strong UV radiation and salty environment make it a useful comparison for chloride and salt deposits found on Mars.",
    features: [
      "Extremely flat, extensive salt crust",
      "Polygonal salt patterns on the surface",
      "Mineral-rich brines beneath the crust",
      "High-altitude setting with strong UV radiation"
    ],
    challenges: [
      "High altitude and thin air",
      "Intense sunlight and glare from the salt surface",
      "Seasonal flooding can make the surface impassable"
    ],
    applications:
      "Useful for studying evaporite and chloride deposits, calibrating satellite instruments over flat bright surfaces, and investigating microbes that survive in salty, high-UV conditions."
  },
  {
    id: "wadi-rum",
    name: "Wadi Rum",
    location: "Aqaba Governorate, Jordan",
    environment: "Mars",
    coordinates: [29.6396, 35.4339],
    image: "images/Wadi Rum, Jordan.png",
    description:
      "A red sandstone and granite desert valley with towering rock formations and iron-stained sands. Its look is so Mars-like that it has been used to film Mars scenes.",
    significance:
      "Wadi Rum shows how wind, occasional water and weathering carve rock in a dry climate. Its iron-oxide-coloured sands and eroded sandstone cliffs help researchers compare landscape processes with those that shaped the Martian surface.",
    features: [
      "Red, iron-oxide-stained sand and sandstone",
      "Tall eroded sandstone and granite mountains",
      "Natural arches, canyons and wind-carved rock",
      "Broad sandy valley floors"
    ],
    challenges: [
      "High daytime temperatures and cold nights",
      "Soft sand that can trap vehicles",
      "Steep cliffs and rugged rock terrain"
    ],
    applications:
      "Useful for studying wind erosion and weathering, practising rover and crew navigation in Mars-like terrain, and public outreach about what the Martian surface looks like."
  },
  {
    id: "bardenas-reales",
    name: "Bardenas Reales",
    location: "Navarre, Spain",
    environment: "Mars",
    coordinates: [42.19, -1.5],
    image: "images/Bardenas Reales, Spain.png",
    description:
      "A semi-desert landscape of clay, gypsum and sandstone shaped into badlands, mesas and isolated rock towers by erosion.",
    significance:
      "Bardenas Reales is an example of badland terrain, where soft sedimentary layers are rapidly eroded by rain and wind. Its layered rocks and erosional landforms help researchers interpret layered sedimentary terrain and eroded mesas seen on Mars.",
    features: [
      "Badlands carved into soft clay and gypsum",
      "Flat-topped mesas and isolated rock towers",
      "Exposed horizontal sedimentary layers",
      "Dry gullies and erosion channels"
    ],
    challenges: [
      "Hot, dry summers and cold winters",
      "Fragile, easily eroded slopes",
      "Military training zone restricts access to some areas"
    ],
    applications:
      "Supports studies of erosion in layered sediments, mapping of mesas and buttes, and practice in reading sedimentary layers relevant to Martian geology."
  },
  {
    id: "makhtesh-ramon",
    name: "Makhtesh Ramon",
    location: "Negev Desert, Israel",
    environment: "Both",
    coordinates: [30.59, 34.84],
    image: "images/Makhtesh Ramon, Israel.png",
    description:
      "A large erosion crater in the Negev Desert, with colourful rock layers, volcanic features and dry terrain. It has hosted analogue Mars mission simulations.",
    significance:
      "Makhtesh Ramon is not an impact crater. It formed through erosion, exposing a wide range of rock layers and volcanic features. Its isolation and Mars-like terrain have made it a site for crewed analogue mission simulations, including the Austrian Space Forum's AMADEE-20 mission.",
    features: [
      "Large erosional crater with steep walls",
      "Multicoloured sedimentary rock layers",
      "Basaltic volcanic features and dykes",
      "Dry, rocky desert floor with sparse vegetation"
    ],
    challenges: [
      "High temperatures and strong sunlight",
      "Steep crater walls and rough terrain",
      "Protected nature reserve requires careful fieldwork"
    ],
    applications:
      "Useful for crewed mission simulations, testing habitats and spacesuit prototypes, and training teams to explore crater-like terrain on the Moon and Mars."
  },
  {
    id: "qattara",
    name: "Qattara Depression",
    location: "Western Desert, Egypt",
    environment: "Mars",
    coordinates: [30.231, 27.7657],
    image: "images/Qattara Depression, Egypt.png",
    description:
      "A vast depression lying below sea level in Egypt's Western Desert, with salt marshes, sand and wind-eroded ground.",
    significance:
      "The Qattara Depression has been shaped largely by wind erosion and the evaporation of groundwater. Its salt pans and wind-sculpted landforms help researchers study how basins form and change in very dry climates, comparable in some ways to depressions on Mars.",
    features: [
      "Large basin below sea level",
      "Salt pans and salt marshes (sabkha)",
      "Wind-eroded landforms and sand deposits",
      "Steep escarpment along the northern edge"
    ],
    challenges: [
      "Extreme heat and very dry conditions",
      "Soft salt marshes that are dangerous to cross",
      "Remote location and possible leftover wartime hazards"
    ],
    applications:
      "Supports research into wind erosion, groundwater-fed salt deposits and how large depressions form, helping interpret similar features in Martian basins."
  },
  {
    id: "black-rock",
    name: "Black Rock Desert",
    location: "Nevada, USA",
    environment: "Mars",
    coordinates: [40.7847, -119.2067],
    image: "images/Black Rock Desert, Nevada.png",
    description:
      "A huge, flat playa left behind by an ancient lake. Its hard, open surface is used for vehicle tests, rocket launches and land speed records.",
    significance:
      "The Black Rock playa is the dry bed of a former Ice Age lake. Its fine lakebed sediments and wide, flat surface make it useful for studying how lake deposits dry out and for testing vehicles and equipment over long, open distances.",
    features: [
      "Very flat, hard-packed playa surface",
      "Fine lakebed clay and silt sediments",
      "Mud cracks and evaporite crusts",
      "Surrounding mountains and old shorelines"
    ],
    challenges: [
      "Fine alkaline dust and dust storms",
      "Surface becomes muddy and impassable after rain",
      "Large daily temperature swings"
    ],
    applications:
      "Useful for rover and vehicle mobility trials, drone and rocket testing, and practising how to read dry lakebed deposits as evidence of past water on Mars."
  },
  {
    id: "turpan",
    name: "Turpan Depression",
    location: "Xinjiang, China",
    environment: "Mars",
    coordinates: [42.6575, 89.27],
    image: "images/Turpan Depression, China.png",
    description:
      "One of the lowest and hottest places in China, with very dry desert basins, salt lakes and red sandstone ridges.",
    significance:
      "The Turpan Depression is a very dry inland basin with salt deposits, dry lakebeds and wind-shaped landforms. Its hyperarid soils and salt-rich ground make it useful for studying how minerals and microbes behave in Mars-like dry conditions.",
    features: [
      "Basin floor below sea level",
      "Dried salt lake beds and evaporite deposits",
      "Red sandstone ridges such as the Flaming Mountains",
      "Hyperarid soils and wind-eroded terrain"
    ],
    challenges: [
      "Extremely high summer temperatures",
      "Very low rainfall and limited water",
      "Strong winds and blowing dust"
    ],
    applications:
      "Supports research into hyperarid soils, salt minerals and microbial survival in dry environments, and testing instruments in hot, dusty conditions."
  },
  {
    id: "taklamakan",
    name: "Taklamakan Desert",
    location: "Tarim Basin, Xinjiang, China",
    environment: "Moon",
    coordinates: [38.9, 82.5],
    image: "images/Taklamakan Desert, China.png",
    description:
      "A vast sandy desert with very fine-grained sediments. Its loose, powdery ground is a useful stand-in for testing how rover wheels behave on lunar regolith.",
    significance:
      "Much of the Taklamakan's sediment is finer than about 80 microns. Loose, fine granular material like this resembles aspects of lunar regolith, so the desert offers a natural setting for studying how rover wheels sink, slip and grip in soft ground.",
    features: [
      "Fine-grained sediments with grain sizes below roughly 80 μm",
      "Extensive loose, sandy terrain and shifting dunes",
      "Granular surfaces that behave like soft, powdery soil",
      "Large open areas suitable for long mobility trials"
    ],
    challenges: [
      "Sandstorms and wind-blown fine dust",
      "Soft ground that can trap wheels and vehicles",
      "Extreme temperature swings and remote access"
    ],
    applications:
      "A lunar regolith grain-size and rover wheel interaction analogue. Useful for testing wheel and tyre interaction with fine-grained soil, evaluating traction and resistance during movement, investigating wheel performance in loose granular material, and assessing rover mobility and stability on lunar-like surfaces."
  },
  {
    id: "cordon-caulle",
    name: "Cordón Caulle Tephra Field",
    location: "Los Ríos Region, Chile",
    environment: "Mars",
    coordinates: [-40.52, -72.15],
    image: "images/Cordon Caulle Tephra Field, Chile.png",
    description:
      "A field of volcanic ash and tephra in the southern Andes. Its fine-grained volcanic material is comparable in grain size to Martian regolith.",
    significance:
      "The tephra here has an average grain size of about 95 μm (± 20 μm), similar to fine Martian regolith. Because it is also volcanic in origin, like much of the Martian surface, it provides a realistic setting for testing how rovers move over fine, loose material.",
    features: [
      "Volcanic tephra and ash deposits",
      "Average grain size of approximately 95 μm ± 20 μm",
      "Loose, fine-grained volcanic surface material",
      "Sparse vegetation across exposed volcanic ground"
    ],
    challenges: [
      "Active volcanic system with potential eruption hazards",
      "Cold, wet and changeable Andean weather",
      "Remote, high terrain with limited access routes"
    ],
    applications:
      "A Martian regolith grain-size and rover mobility testing analogue. Useful for testing rover movement across fine-grained surfaces, evaluating wheel traction and soil interaction, assessing mobility in loose granular material, and testing rover mechanical systems under Martian-like terrain conditions."
  },
  {
    id: "sangaredi",
    name: "Sangaredi Mines",
    location: "Boké Region, Guinea",
    environment: "Moon",
    coordinates: [11.1, -13.8],
    image: "images/Sangaredi Mines, Guinea.png",
    description:
      "A major mining area in western Guinea with mineral-rich soils. Its chemistry offers a way to test how rover materials hold up against lunar-like soil compositions.",
    significance:
      "Soils at Sangaredi contain calcium-, aluminium-, iron- and titanium-rich materials, elements that are also important in lunar surface materials. This makes the site useful for investigating how chemically reactive or mineral-rich soils affect rover components over time.",
    features: [
      "Soils rich in calcium, aluminium, iron and titanium materials",
      "Mineralogical similarities to lunar surface materials",
      "Exposed, weathered ground in active mining areas",
      "Reddish, iron-rich soils and sediments"
    ],
    challenges: [
      "Hot, humid tropical climate with a heavy rainy season",
      "Access depends on working around active mining operations",
      "Heavy rain can make ground muddy and unstable"
    ],
    applications:
      "A lunar soil composition and rover material durability testing analogue. Useful for testing rover materials under chemical stress, evaluating the durability of components exposed to mineral-rich soil, understanding interactions between rover materials and lunar-like soils, and assessing possible material degradation before lunar missions."
  }
];


let map;
let markers = [];
let previousScrollY = 0;
let profileIsOpen = false;
let currentSiteId = null;
let lastProfileHash = "";


const markerLayer = () => L.featureGroup(markers);


function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[character]);
}


function environmentLabel(environment) {
  return environment === "Both"
    ? "Moon + Mars"
    : `${environment} analogue`;
}


function imageHTML(site, extraClass = "") {
  const name = escapeHTML(site.name);
  const imagePath = escapeHTML(site.image);


  return `
    <div class="site-image-wrapper ${extraClass}">
      <img
        class="site-image"
        src="${imagePath}"
        alt="${name}"
        loading="lazy"
      >
      <div class="preview-fallback">
        <span>${name}</span>
        <small>environment analogue</small>
      </div>
    </div>
  `;
}


function setupImageFallbacks(container = document) {
  container.querySelectorAll(".site-image-wrapper img").forEach(img => {
    const wrapper = img.closest(".site-image-wrapper");


    const showFallback = () => {
      wrapper?.classList.add("image-failed");
      img.style.display = "none";
    };


    img.addEventListener("error", showFallback, { once: true });


    if (img.complete && img.naturalWidth === 0) {
      showFallback();
    }
  });
}


function markerPopupHTML(site) {
  return `
    <div class="site-popup">
      ${imageHTML(site, "popup-image")}
      <span class="environment-tag">${escapeHTML(environmentLabel(site.environment))}</span>
      <h3>${escapeHTML(site.name)}</h3>
      <p class="popup-location">${escapeHTML(site.location)}</p>
      <p class="popup-description">${escapeHTML(site.description)}</p>
      <button
        class="view-site-button"
        type="button"
        data-site-id="${escapeHTML(site.id)}"
      >
        View full profile →
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
        setupImageFallbacks(popup.getElement());


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
      aria-label="View ${escapeHTML(site.name)} profile"
      data-site-id="${escapeHTML(site.id)}"
    >
      ${imageHTML(site)}
      <div class="site-card-content">
        <span class="environment-tag">${escapeHTML(environmentLabel(site.environment))}</span>
        <h3>${escapeHTML(site.name)}</h3>
        <p class="site-location">${escapeHTML(site.location)}</p>
        <p class="site-description">${escapeHTML(site.description)}</p>
        <span class="card-link">Explore site →</span>
      </div>
    </article>
  `).join("");


  setupImageFallbacks(container);


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


  const filteredSites = sites.filter(site => {
    const matchesEnvironment =
      selectedEnvironment === "All" ||
      site.environment === selectedEnvironment ||
      site.environment === "Both";


    const searchableText = [
      site.name,
      site.location,
      site.environment,
      site.description,
      site.significance,
      ...site.features,
      ...site.challenges,
      site.applications
    ].join(" ").toLowerCase();


    return matchesEnvironment && searchableText.includes(searchValue);
  });


  renderCards(filteredSites);


  if (map && markers.length) {
    markers.forEach(marker => {
      const site = sites.find(item =>
        item.coordinates[0] === marker.getLatLng().lat &&
        item.coordinates[1] === marker.getLatLng().lng
      );


      const visible =
        site &&
        (
          selectedEnvironment === "All" ||
          site.environment === selectedEnvironment ||
          site.environment === "Both"
        ) &&
        [
          site.name,
          site.location,
          site.environment,
          site.description,
          site.significance,
          ...site.features,
          ...site.challenges,
          site.applications
        ].join(" ").toLowerCase().includes(searchValue);


      if (visible) {
        if (!map.hasLayer(marker)) marker.addTo(map);
      } else {
        if (map.hasLayer(marker)) marker.removeFrom(map);
      }
    });
  }
}


function listHTML(items) {
  return `<ul>${items.map(item => `<li>${escapeHTML(item)}</li>`).join("")}</ul>`;
}


function profileSection(title, content, index) {
  return `
    <section class="profile-section" style="--section-index:${index}">
      <h3>${escapeHTML(title)}</h3>
      ${content}
    </section>
  `;
}


function renderProfile(site) {
  const container = document.getElementById("siteDetail");


  const sections = [
    profileSection(
      "Why this site matters",
      `<p>${escapeHTML(site.significance)}</p>`,
      0
    ),
    profileSection(
      "Geological features",
      listHTML(site.features),
      1
    ),
    profileSection(
      "Fieldwork challenges",
      listHTML(site.challenges),
      2
    ),
    profileSection(
      "Relevance to planetary missions",
      `<p>${escapeHTML(site.applications)}</p>`,
      3
    ),
    profileSection(
      "Location data",
      `<p class="profile-coordinates">Latitude: ${site.coordinates[0]}°<br>Longitude: ${site.coordinates[1]}°</p>`,
      4
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
          <p class="profile-location">${escapeHTML(site.location)}</p>
          <p class="profile-description">${escapeHTML(site.description)}</p>
        </div>


        ${imageHTML(site, "profile-image")}
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


  setupImageFallbacks(container);


  container.querySelectorAll("[data-back]").forEach(button => {
    button.addEventListener("click", closeSiteDetail);
  });
}


function openSiteDetail(siteId) {
  const site = sites.find(item => item.id === siteId);
  if (!site) return;


  if (!profileIsOpen) {
    previousScrollY = window.scrollY;
  }


  profileIsOpen = true;
  currentSiteId = site.id;


  document.querySelector(".hero").classList.add("hidden");
  document.getElementById("mapSection").classList.add("hidden");
  document.getElementById("sitesSection").classList.add("hidden");


  const detailSection = document.getElementById("siteDetailSection");
  detailSection.classList.remove("hidden");


  renderProfile(site);


  const newHash = `#site/${site.id}`;


  if (window.location.hash !== newHash) {
    lastProfileHash = newHash;
    history.pushState({ siteId: site.id }, "", newHash);
  }


  /*
   * Keep the profile opening calm. Only move to the profile if the
   * current scroll position is outside it; don't animate the page.
   */
  requestAnimationFrame(() => {
    const rect = detailSection.getBoundingClientRect();


    if (rect.bottom < 0 || rect.top > window.innerHeight) {
      window.scrollTo({
        top: detailSection.offsetTop - 20,
        behavior: "auto"
      });
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


  /*
   * Restore the exact previous scroll position without smooth scrolling.
   */
  requestAnimationFrame(() => {
    window.scrollTo({
      top: previousScrollY,
      behavior: "auto"
    });
  });
}


function handleHashChange() {
  const hash = window.location.hash;


  if (hash.startsWith("#site/")) {
    const siteId = hash.slice("#site/".length);


    if (sites.some(site => site.id === siteId)) {
      if (!profileIsOpen) {
        previousScrollY = window.scrollY;
      }


      profileIsOpen = true;
      currentSiteId = siteId;


      document.querySelector(".hero").classList.add("hidden");
      document.getElementById("mapSection").classList.add("hidden");
      document.getElementById("sitesSection").classList.add("hidden");
      document.getElementById("siteDetailSection").classList.remove("hidden");


      renderProfile(sites.find(site => site.id === siteId));
      return;
    }
  }


  if (profileIsOpen) {
    closeSiteDetail({ fromHistory: true });
  }
}


document.addEventListener("DOMContentLoaded", () => {
  initialiseMap();
  renderCards();


  document.getElementById("searchInput").addEventListener("input", filterSites);
  document.getElementById("environmentFilter").addEventListener("change", filterSites);


  window.addEventListener("hashchange", handleHashChange);


  /*
   * Support browser Back/Forward while keeping profile navigation usable.
   */
  window.addEventListener("popstate", () => {
    handleHashChange();
  });


  if (window.location.hash.startsWith("#site/")) {
    handleHashChange();
  }
});