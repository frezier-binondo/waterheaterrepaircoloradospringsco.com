export interface LocationDetail {
  slug: string;
  name: string;
  city: string;
  county: string;
  altitude: string;
  distance: string;
  zipCodes: string[];
  metaTitle: string;
  metaDescription: string;
  heroHeading: string;
  heroSubtitle: string;
  communityContext: string;
  waterProfile: string;
  altitudeVenting: string;
  housingStock: string;
  commonProblems: { title: string; desc: string }[];
  repairProcess: string;
  costFactors: string[];
  faqs: { q: string; a: string }[];
  externalLink: {
    label: string;
    href: string;
    source: string;
    note: string;
  };
}

export const LOCATIONS_DETAILED: Record<string, LocationDetail> = {
  "fountain-co": {
    slug: "fountain-co",
    name: "Fountain, CO",
    city: "Fountain",
    county: "El Paso County",
    altitude: "5,545 ft",
    distance: "12 miles south of Colorado Springs",
    zipCodes: ["80817"],
    metaTitle: "Water Heater Repair in Fountain, CO",
    metaDescription: "Need water heater repair in Fountain, CO? Learn about common problems, repair options, service considerations and request a local estimate. Call (456) 789-0123.",
    heroHeading: "Water Heater Repair in Fountain, CO",
    heroSubtitle: "Fast diagnostic response and code-compliant water heater repair, replacement, and sediment flushing for Fountain homeowners and Fort Carson military families.",
    communityContext: "Fountain, Colorado, located approximately 12 miles south of downtown Colorado Springs along the I-25 corridor and Highway 85/87, is a thriving community known for its strong military ties to Fort Carson, expansive suburban neighborhoods like Mesa Ridge and Countryside, and historic rural properties along Fountain Creek. Homeowners in Fountain experience distinct municipal utility configurations—often served by City of Fountain Utilities for electric and water services alongside Colorado Springs Utilities or Black Hills Energy for natural gas. Maintaining reliable hot water is critical during unpredictable Front Range cold snaps.",
    waterProfile: "Water in Fountain is sourced primarily from the Fountain Creek alluvial aquifer and regional mountain water deliveries. The dissolved mineral profile features elevated levels of calcium, magnesium, and sulfate compounds. When heated in a domestic storage tank, these minerals rapidly crystallize into heavy calcium carbonate scale at the bottom of the tank. Without an annual flush, water heaters in the 80817 ZIP code frequently experience popping noises, lower heating element burnout, and premature tank corrosion within 6 to 8 years.",
    altitudeVenting: "At an elevation of 5,545 feet, Fountain sits slightly lower than central Colorado Springs, but still well above the 5,000-foot threshold where standard sea-level combustion rules fail. Atmospheric natural gas water heaters in Fountain require high-altitude burner orifice derating (typically a 4% reduction in BTU output per 1,000 feet above 2,000 feet) to ensure complete combustion without producing harmful carbon monoxide or soot.",
    housingStock: "Fountain's residential real estate ranges from 1960s-1970s ranch homes in old town Fountain with crawlspace installations to newer 2000s two-story homes in Mesa Ridge with utility closets and basement mechanical rooms. Dispatched technicians are familiar with tight access passages, manufactured home water heater safety standards (HUD-approved sealed combustion units), and basement expansion tank retrofits.",
    commonProblems: [
      { title: "Heavy Sediment Scale in Lower Tank", desc: "Fountain alluvial water accelerates mineral deposition, causing rumbling, banging sounds and overheating the lower tank floor." },
      { title: "Blown Electric Heating Elements in Mesa Ridge", desc: "In newer subdivisions where electric water heaters were installed, calcified scale traps heat, burning out upper and lower elements." },
      { title: "Pilot Light Extinguished by Southern Valley Winds", desc: "High plains wind gusts sweeping up the Fountain Creek basin create chimney downdrafts, blowing out standing pilot flames." },
      { title: "Thermal Expansion Leaks at T&P Valves", desc: "Closed municipal water systems in Fountain require thermal expansion tanks; failed bladders cause chronic safety valve dripping." }
    ],
    repairProcess: "When you call our Fountain dispatch desk, a certified technician is routed directly to your 80817 address. The service technician begins with a comprehensive diagnostic: testing dynamic gas flow or 240V circuit integrity, testing water supply pressure, inspecting the B-vent flue for draft compliance, and checking sacrificial anode rod degradation. Repairs are completed on-site with commercial-grade components.",
    costFactors: [
      "Fuel supply configuration (City of Fountain electric vs CSU/Black Hills natural gas)",
      "Severity of mineral sediment compaction requiring chemical power flushing",
      "Accessibility of the water heater (garage platform vs confined crawlspace)",
      "PPRBD permit and local inspection requirements for complete replacements"
    ],
    faqs: [
      { q: "How quickly can a technician be dispatched to Fountain, CO?", a: "Because our network technicians actively service southern El Paso County, typical response times in Fountain and the Mesa Ridge corridor average 35 to 55 minutes." },
      { q: "Are water heater permits required in Fountain?", a: "Yes. All water heater replacements in the City of Fountain and unincorporated El Paso County must be permitted and inspected by the Pikes Peak Regional Building Department (PPRBD)." },
      { q: "Can my water heater in Fountain be converted to a tankless system?", a: "Yes. Tankless installations are very popular in Fountain, especially for military families needing continuous hot water. A technician will assess gas line diameter (3/4-inch required) and exterior venting pathways." }
    ],
    externalLink: {
      label: "City of Fountain Utilities",
      href: "https://www.fountainutilities.org/",
      source: "Fountain Utilities Department",
      note: "Municipal water quality reports, local electric service guidelines, and conservation resources for Fountain residents."
    }
  },

  "security-widefield-co": {
    slug: "security-widefield-co",
    name: "Security-Widefield, CO",
    city: "Security-Widefield",
    county: "El Paso County",
    altitude: "5,840 ft",
    distance: "8 miles southeast of downtown Colorado Springs",
    zipCodes: ["80911", "80925"],
    metaTitle: "Water Heater Repair in Security-Widefield, CO",
    metaDescription: "Need water heater repair in Security-Widefield, CO? Learn about common problems, repair options, service considerations and request a local estimate. Call (456) 789-0123.",
    heroHeading: "Water Heater Repair in Security-Widefield, CO",
    heroSubtitle: "Dedicated water heater repair, replacement, and emergency service across established neighborhoods in Security-Widefield and the Powers South corridor.",
    communityContext: "Security-Widefield is a historic unincorporated community in El Paso County lying just south of the Colorado Springs Airport and east of I-25. Encompassing the 80911 and 80925 ZIP codes, it features a mix of classic 1950s post-war mid-century ranches, mature subdivisions around Widefield Community Park, and rapidly growing master-planned developments in Lorson Ranch. Many older homes in Security-Widefield still feature original galvanized water supply lines, requiring specialized dielectric isolation when installing modern water heaters to prevent rapid galvanic rust.",
    waterProfile: "Security-Widefield is served by the Widefield Water and Sanitation District and Security Water District. Over the past decade, substantial investments have been made in advanced ion-exchange and granulated activated carbon treatment facilities. The water carries moderate to high mineral hardness from groundwater wells and Fryingpan-Arkansas surface water. Unserviced water heaters in 80911 frequently suffer from mineral sediment accumulation, resulting in restricted water flow and noisy operation.",
    altitudeVenting: "At an elevation of 5,840 feet, Security-Widefield homes operate under reduced atmospheric density. Natural draft chimneys connected to gas water heaters must maintain strict upward pitch and adequate vertical clearance above the roofline. Improper venting or backdrafting allows carbon monoxide to spill into living spaces, particularly in older ranch homes with enclosed utility closets near bedrooms.",
    housingStock: "In classic Security subdivisions, water heaters are often located in utility closets, laundry alcoves, or basement mechanical rooms. In the newer Lorson Ranch area (80925), modern energy-efficient homes feature high-recovery 50-gallon power-vented or tankless water heaters. Our network technicians are experienced in retrofitting old installations to comply with modern safety standards.",
    commonProblems: [
      { title: "Galvanic Corrosion at Threaded Tank Fittings", desc: "Older homes with mismatched copper and galvanized piping suffer rapid thread failure and slow weeping leaks." },
      { title: "Defective Thermocouples on Aging Gas Tanks", desc: "Soot accumulation on older gas burners causes pilot flames to drop out, leaving homeowners with no hot water." },
      { title: "Severe Sediment Buildup in 80911 Basements", desc: "Older water heaters that have never been flushed suffer cracked glass linings and kettle-like popping sounds." },
      { title: "Missing Expansion Tanks on Closed Plumbing", desc: "Older plumbing retrofitted with modern water meters lacks expansion relief, causing burst flex lines and leaking relief valves." }
    ],
    repairProcess: "Upon receiving your call, our dispatch coordinator connects you with a local technician equipped with specialized diagnostic meters and replacement components. The technician verifies water shutoff, inspects the chimney flue and draft hood, tests gas pressure, and evaluates whether a component repair (such as replacing a thermocouple, heating element, or valve) or a complete tank replacement is warranted under PPRBD codes.",
    costFactors: [
      "Pipe material compatibility (remedying galvanic corrosion with brass dielectric unions)",
      "Need to bring older 1950s-1970s utility closets up to current PPRBD mechanical code",
      "Standard atmospheric venting vs direct-vent or power-vent upgrades",
      "Permit filing and required municipal backflow inspection"
    ],
    faqs: [
      { q: "How long does a water heater usually last in Security-Widefield?", a: "Due to local mineral hardness and thermal cycling, conventional storage tank water heaters in Security-Widefield typically last between 8 and 10 years before internal corrosion compromises the tank." },
      { q: "Why is water leaking from the top of my water heater in 80911?", a: "In older Security homes, galvanic corrosion between copper pipes and steel tank nipples is the most common cause of top-connection leaks. Installing brass dielectric unions cures this permanently." },
      { q: "Do you offer emergency weekend dispatch to Security-Widefield?", a: "Yes. Our emergency phone hotline operates 24 hours a day, 7 days a week, including weekends and holidays, across both 80911 and 80925." }
    ],
    externalLink: {
      label: "Widefield Water and Sanitation District",
      href: "https://www.wwsdonline.com/",
      source: "Widefield Water District",
      note: "Local water quality information, mineral hardness data, and district infrastructure updates."
    }
  },

  "cimarron-hills-co": {
    slug: "cimarron-hills-co",
    name: "Cimarron Hills, CO",
    city: "Cimarron Hills",
    county: "El Paso County",
    altitude: "6,417 ft",
    distance: "7 miles east of downtown Colorado Springs",
    zipCodes: ["80915", "80922"],
    metaTitle: "Water Heater Repair in Cimarron Hills, CO",
    metaDescription: "Need water heater repair in Cimarron Hills, CO? Learn about common problems, repair options, service considerations and request a local estimate. Call (456) 789-0123.",
    heroHeading: "Water Heater Repair in Cimarron Hills, CO",
    heroSubtitle: "Expert water heater diagnostics, emergency repairs, and high-altitude replacements serving east metro residents near Peterson Space Force Base.",
    communityContext: "Cimarron Hills is an active east-metro community located just north of Peterson Space Force Base and along the bustling Powers Boulevard and Constitution Avenue corridors. Encompassing the 80915 and 80922 ZIP codes, Cimarron Hills blends established late-20th-century residential developments with rapidly expanding commercial and residential sectors. Its eastern Front Range exposure subjects homes to intense mountain windstorms and rapid temperature fluctuations, demanding resilient, code-compliant water heating systems.",
    waterProfile: "Water in Cimarron Hills is primarily supplied by the Cherokee Metropolitan District, drawing water from deep Denver Basin alluvial aquifers and regional surface water projects. Cherokee District water has a distinct mineral signature with noticeable calcium hardness. This hardness accelerates lime scale crystallization on electric heating elements and gas tank floors, making preventative maintenance and sediment flushing vital for long-term appliance health.",
    altitudeVenting: "At an elevation of 6,417 feet, Cimarron Hills sits nearly 400 feet higher than downtown Colorado Springs. The thinner mountain atmosphere reduces the mass flow of combustion air into atmospheric gas water heaters. Without proper burner orifice sizing and unobstructed combustion air ducts, water heaters can experience incomplete combustion, soot accumulation, and elevated carbon monoxide generation. Technicians in Cimarron Hills verify positive flue draft on every service call.",
    housingStock: "Homes in Cimarron Hills are primarily single-family two-story homes and split-level properties built from the late 1970s through the 1990s, alongside newer construction along Marksheffel Road. Many original water heaters have reached their secondary or tertiary replacement cycle, requiring updates such as thermal expansion tanks, copper pipe re-routing, and modern gas shutoff valves.",
    commonProblems: [
      { title: "Sediment Crust Causing Loud Popping Sounds", desc: "Cherokee District mineral scale forms rock-solid layers at the bottom of tanks, causing noisy boiling bubbles." },
      { title: "Electric Lower Element Burnout in 80915", desc: "Insulating calcium deposits coat lower elements, preventing heat transfer to water and causing element rupture." },
      { title: "Pilot Light Outages from Front Range Windstorms", desc: "Eastern plains wind currents produce chimney draft pressure differentials that extinguish standing pilot flames." },
      { title: "Temperature & Pressure Valve Leaking", desc: "High static street water pressure along Powers Boulevard without an operating pressure regulator forces relief valves open." }
    ],
    repairProcess: "Calling our Cimarron Hills hotline connects you directly with a local dispatch technician. Upon arrival, the technician measures street water pressure with a test gauge, tests the electrical or gas input, checks for carbon monoxide backdrafting around the draft hood, and assesses whether a fast component repair or replacement is best for your home.",
    costFactors: [
      "Need for pressure reducing valve (PRV) or thermal expansion tank installation",
      "Gas burner assembly cleaning and high-altitude orifice adjustment",
      "Accessibility of the water heater in finished basement utility rooms",
      "PPRBD permit and safety inspection filing"
    ],
    faqs: [
      { q: "Why is my Cimarron Hills water heater making a loud popping noise?", a: "This popping sound is caused by mineral sediment from Cherokee District water. Steam bubbles become trapped beneath the hardened scale and burst violently. A professional power flush dissolves and removes this sediment." },
      { q: "What is the average response time for water heater repair in Cimarron Hills?", a: "Our dispatched technicians typically arrive at Cimarron Hills and Peterson SFB corridor homes within 40 to 60 minutes." },
      { q: "Do I need an expansion tank on my water heater in Cimarron Hills?", a: "Yes. Cherokee Metropolitan District plumbing codes and PPRBD require a pre-pressurized thermal expansion tank on all closed residential plumbing systems to absorb heated water expansion." }
    ],
    externalLink: {
      label: "Cherokee Metropolitan District",
      href: "https://cherokeemetro.org/",
      source: "Cherokee Water District",
      note: "Water quality reports, conservation rebates, and district water pressure guidelines for Cimarron Hills."
    }
  },

  "manitou-springs-co": {
    slug: "manitou-springs-co",
    name: "Manitou Springs, CO",
    city: "Manitou Springs",
    county: "El Paso County",
    altitude: "6,412 ft",
    distance: "6 miles west of Colorado Springs",
    zipCodes: ["80829"],
    metaTitle: "Water Heater Repair in Manitou Springs, CO",
    metaDescription: "Need water heater repair in Manitou Springs, CO? Learn about common problems, repair options, service considerations and request a local estimate. Call (456) 789-0123.",
    heroHeading: "Water Heater Repair in Manitou Springs, CO",
    heroSubtitle: "Specialized water heater repair, historic home retrofits, and high-efficiency tankless conversions at the base of Pikes Peak.",
    communityContext: "Nestled directly at the foot of Pikes Peak along Fountain Creek and Ruxton Canyon, Manitou Springs is renowned for its historic Victorian architecture, naturally carbonated mineral springs, and rugged mountain topography. Encompassing the 80829 ZIP code, Manitou Springs presents unique plumbing challenges: historic homes built in the late 19th and early 20th centuries often have narrow stone cellars, steep hillside stairways, low ceiling clearances, and legacy plumbing configurations.",
    waterProfile: "Manitou Springs municipal water is sourced from pristine mountain watersheds high on the slopes of Pikes Peak. While exceptionally fresh, mountain runoff contains natural minerals and silica. In addition, the historic water distribution infrastructure can experience seasonal pressure variations. Without active sacrificial anode rod protection, storage tank water heaters in Manitou Springs are susceptible to accelerated interior oxidation.",
    altitudeVenting: "At an elevation of 6,412 feet surrounded by steep canyon walls, Manitou Springs homes experience intense mountain downdrafts and cold air drainage down Ruxton Canyon. These microclimate wind effects frequently cause backdrafting in traditional atmospheric chimneys. Dispatched technicians pay exceptional attention to flue draft velocity, chimney liner integrity, and carbon monoxide safety.",
    housingStock: "Many Manitou Springs properties are historic Victorian cottages, hillside craftsman cabins, or multi-level mountain homes. Water heaters are frequently squeezed into stone-walled basements, tight crawlspaces, or utility nooks with narrow doorways. For these tight spaces, converting to a compact, wall-mounted tankless water heater is an ideal solution that frees up valuable space and eliminates heavy tank hauling up steep mountain stairs.",
    commonProblems: [
      { title: "Chimney Backdrafting from Canyon Winds", desc: "Cold air drainage down Pikes Peak canyons pushes exhaust gases back into atmospheric draft hoods, blowing out pilots." },
      { title: "Tight Basement Clearance & Tank Hauling Difficulties", desc: "Older standard 50-gallon tanks cannot fit through narrow 24-inch stone basement stairwells, requiring lowboy or tankless options." },
      { title: "Rapid Anode Rod Consumption from Mountain Minerals", desc: "Natural mineral chemistry attacks sacrificial anode rods within 3 to 4 years, leaving tank steel exposed to rust." },
      { title: "Winter Water Line Freeze Exposures", desc: "Older uninsulated crawlspaces in hillside homes freeze supply lines during sub-zero mountain nights." }
    ],
    repairProcess: "When you call our Manitou Springs dispatch desk, we assign a technician experienced in historic home retrofits. The technician navigates steep terrain with specialized moving equipment, verifies cold water and fuel shutoffs, conducts high-altitude draft tests, and checks clearance to combustible materials in historic wood-framed structures.",
    costFactors: [
      "Access difficulty in hillside properties and narrow historic basement stairs",
      "Need for lowboy (short/wide) tank models or wall-mounted tankless conversions",
      "Chimney relining or direct-vent sidewall penetrations through stone or stucco",
      "PPRBD historic district mechanical permitting compliance"
    ],
    faqs: [
      { q: "Can a new water heater fit into my historic Manitou Springs stone basement?", a: "Yes. When standard tall tanks cannot fit down narrow stairs or under low ceilings, we install 'lowboy' water heaters (shorter and wider) or convert the home to a compact wall-mounted tankless system." },
      { q: "Why does my pilot light in Manitou Springs keep blowing out in winter?", a: "Steep mountain terrain down Ruxton Canyon creates severe downward drafts in chimney flues during cold snaps. Installing a high-wind draft diverter cap or upgrading to a sealed-combustion power-vent unit resolves this issue." },
      { q: "Is tankless water heating a good choice for Manitou Springs homes?", a: "Yes. Tankless units mount directly to the wall, taking up zero floor space in tight basements, and their sealed-combustion venting eliminates mountain chimney downdraft issues entirely." }
    ],
    externalLink: {
      label: "City of Manitou Springs Public Works",
      href: "https://www.manitouspringsgov.com/",
      source: "Manitou Springs Municipal Government",
      note: "Local municipal water supply notices, infrastructure guidelines, and public works resources."
    }
  },

  "monument-co": {
    slug: "monument-co",
    name: "Monument, CO",
    city: "Monument",
    county: "El Paso County",
    altitude: "6,975 ft",
    distance: "18 miles north of Colorado Springs along I-25",
    zipCodes: ["80132"],
    metaTitle: "Water Heater Repair in Monument, CO",
    metaDescription: "Need water heater repair in Monument, CO? Learn about common problems, repair options, service considerations and request a local estimate. Call (456) 789-0123.",
    heroHeading: "Water Heater Repair in Monument, CO",
    heroSubtitle: "High-altitude water heater repair, winter freeze protection, and high-efficiency replacements across the Tri-Lakes Monument area.",
    communityContext: "Monument, Colorado, situated 18 miles north of Colorado Springs over the Palmer Divide in the Tri-Lakes region (encompassing Woodmoor, Palmer Lake, and Monument), is known for its picturesque ponderosa pine landscape and sweeping Front Range views. Encompassing the 80132 ZIP code, Monument experiences severe winter weather patterns—frequently receiving several feet more snow and experiencing temperatures 5°F to 15°F colder than downtown Colorado Springs. Water heaters in Monument operate under extreme high-altitude conditions and intense winter thermal stress.",
    waterProfile: "Water in the Tri-Lakes region comes from a combination of the Town of Monument water department, Woodmoor Water and Sanitation District, Triview Metropolitan District, and numerous private residential wells tapping deep Denver Basin aquifers (Dawson and Denver formations). Well water in Monument frequently exhibits high mineral hardness, dissolved silica, and trace iron. These minerals bake onto heating elements and tank bottoms, requiring aggressive preventative flushing and specialized scale filtration.",
    altitudeVenting: "At an elevation of nearly 7,000 feet (6,975 ft), Monument represents one of the highest residential altitudes along the Front Range. The air density is approximately 23% thinner than at sea level. Standard atmospheric water heaters suffer substantial burner derating and require specialized high-altitude burner orifices to prevent dangerous incomplete combustion, soot accumulation, and burner chamber flame rollout. Sealed-combustion condensing water heaters perform exceptionally well under these conditions.",
    housingStock: "Residential properties in Monument range from custom timber-frame homes in Woodmoor with expansive walk-out basements to contemporary master-planned subdivisions in Jackson Creek and Sanctuary Pointe. Many homes are heated by natural gas, while outlying rural parcels utilize liquid propane (LP) tanks, requiring specialized LP gas conversion kits and regulators.",
    commonProblems: [
      { title: "Extreme High-Altitude Combustion Failures", desc: "Thin mountain air at 7,000 ft causes atmospheric burners to soot up, tripping thermal safety switches." },
      { title: "Winter Freeze Out in Cold Crawlspaces & Garages", desc: "Sub-zero Arctic blasts over the Palmer Divide freeze exposed cold water supply pipes and condensate drain lines." },
      { title: "Severe Mineral Calcification from Denver Basin Aquifers", desc: "Deep aquifer well water bakes thick scale onto heating coils, causing early element blowout and loud popping sounds." },
      { title: "Propane (LP) Water Heater Regulator Issues", desc: "Outlying Monument properties using propane experience burner pressure drops during freezing winter nights." }
    ],
    repairProcess: "When you contact our Monument dispatch desk, a certified technician with a winter-ready 4WD service van is dispatched to your 80132 address. The technician verifies water pressure, tests gas pressure (both natural gas and LP), inspects the vent flue for snow blockage or wind draft issues, and provides an honest estimate for component repair or high-altitude tank replacement.",
    costFactors: [
      "High-altitude combustion calibration and specialized high-elevation burner kits",
      "Natural gas vs liquid propane (LP) valve conversion requirements",
      "Need for pipe insulation and heat trace tape in cold basement or crawlspace locations",
      "PPRBD permit and safety inspection filing for the Tri-Lakes jurisdiction"
    ],
    faqs: [
      { q: "How does Monument's 7,000-foot elevation affect water heater performance?", a: "At 7,000 feet, there is 23% less oxygen in the air. Standard gas water heaters lose roughly 20% of their heating capacity unless equipped with high-altitude burner orifices and proper draft venting. Power-vent and condensing tankless units handle this altitude most effectively." },
      { q: "Can my water heater freeze during a Palmer Divide winter blizzard?", a: "Yes. If your water heater is located in an unheated garage, cold crawlspace, or near a drafty foundation wall, sub-zero cold snaps can freeze incoming water lines or tankless condensate drains. Professional pipe insulation is strongly recommended." },
      { q: "Do you service private well water heater systems in Monument?", a: "Yes. Our technicians are experienced with well-water systems in the Tri-Lakes region, including well pressure tanks, sediment filters, and heavy mineral scale descaling." }
    ],
    externalLink: {
      label: "Woodmoor Water and Sanitation District",
      href: "https://www.woodmoorwater.com/",
      source: "Woodmoor Water District",
      note: "Tri-Lakes regional water quality reports, aquifer conservation, and hardness data for Monument homeowners."
    }
  }
};
