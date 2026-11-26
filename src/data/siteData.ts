export interface ServiceItem {
  id: string;
  name: string;
  slug: string;
  shortDesc: string;
  metaTitle: string;
  metaDescription: string;
  iconName: string;
  popular?: boolean;
}

export interface LocationItem {
  id: string;
  name: string;
  slug: string;
  shortDesc: string;
  distance: string;
  zipCodes: string[];
  county: string;
  landmarks: string[];
  altitude: string;
  metaTitle: string;
  metaDescription: string;
}

export interface BlogPostItem {
  id: string;
  title: string;
  slug: string;
  publishDate: string;
  readTime: string;
  category: string;
  snippet: string;
  metaTitle: string;
  metaDescription: string;
  imageUrl: string;
}

export const PHONE_NUMBER = "14567890123";
export const FORMATTED_PHONE = "(456) 789-0123";
export const MAP_LINK = "https://maps.app.goo.gl/tVdCkUpzTeZaG4Ne9";
export const SITE_NAME = "Water Heater Repair in Colorado Springs";
export const SITE_URL = "https://waterheaterrepaircoloradospringsco.com";

export const SERVICES: ServiceItem[] = [
  {
    id: "water-heater-repair",
    name: "Water Heater Repair",
    slug: "water-heater-repair",
    shortDesc: "Rapid diagnostic and precision repair for standard gas and electric tank water heaters facing ignition failures, sediment clogs, or faulty thermostats in Colorado Springs.",
    metaTitle: "Water Heater Repair in Colorado Springs, CO",
    metaDescription: "Need water heater repair in Colorado Springs, CO? Learn about common problems, repair options, service considerations and request a local estimate. Call (456) 789-0123.",
    iconName: "Wrench",
    popular: true,
  },
  {
    id: "emergency-water-heater-repair",
    name: "Emergency Water Heater Repair",
    slug: "emergency-water-heater-repair",
    shortDesc: "24/7 rapid dispatch for catastrophic tank ruptures, active basement flooding, severe gas line leaks, and complete winter hot water outages across El Paso County.",
    metaTitle: "Emergency Water Heater Repair in Colorado Springs, CO",
    metaDescription: "24/7 emergency water heater repair in Colorado Springs, CO. Fast dispatch for bursting tanks, sudden leaks, or gas odor. Call our immediate hotline (456) 789-0123.",
    iconName: "AlertTriangle",
    popular: true,
  },
  {
    id: "tankless-water-heater-repair",
    name: "Tankless Water Heater Repair",
    slug: "tankless-water-heater-repair",
    shortDesc: "Specialized service for on-demand units including heat exchanger descaling, flame rod calibration, intake vent clearing, and digital error code diagnostics.",
    metaTitle: "Tankless Water Heater Repair in Colorado Springs, CO",
    metaDescription: "Expert tankless water heater repair in Colorado Springs, CO. Diagnostic codes, burner cleaning, and descaling for Rinnai, Navien, Rheem. Call (456) 789-0123.",
    iconName: "Zap",
    popular: true,
  },
  {
    id: "tankless-water-heater-installation",
    name: "Tankless Water Heater Installation",
    slug: "tankless-water-heater-installation",
    shortDesc: "High-efficiency endless hot water solutions sized for high altitude Colorado Springs homes, including dedicated gas line upgrades and concentric venting.",
    metaTitle: "Tankless Water Heater Installation in Colorado Springs, CO",
    metaDescription: "Upgrade to continuous hot water with professional tankless water heater installation in Colorado Springs. Proper gas sizing and PPRBD code compliance. Call (456) 789-0123.",
    iconName: "Sparkles",
  },
  {
    id: "gas-water-heater-repair",
    name: "Gas Water Heater Repair",
    slug: "gas-water-heater-repair",
    shortDesc: "Comprehensive repair for atmospheric and power-vented natural gas units. Expert thermocouple, gas control valve, burner assembly, and high-altitude draft venting repairs.",
    metaTitle: "Gas Water Heater Repair in Colorado Springs, CO",
    metaDescription: "Need natural gas water heater repair in Colorado Springs? We resolve thermocouple faults, gas valves, pilot failures, and venting drafts. Call (456) 789-0123.",
    iconName: "Flame",
    popular: true,
  },
  {
    id: "electric-water-heater-repair",
    name: "Electric Water Heater Repair",
    slug: "electric-water-heater-repair",
    shortDesc: "Precision electrical troubleshooting for tripped high-limit switches, burnt upper or lower heating elements, faulty thermostats, and circuit breaker issues.",
    metaTitle: "Electric Water Heater Repair in Colorado Springs, CO",
    metaDescription: "Reliable electric water heater repair in Colorado Springs, CO. Upper & lower element replacements, dual thermostat calibration, and wiring safety. Call (456) 789-0123.",
    iconName: "Bolt",
  },
  {
    id: "water-heater-installation",
    name: "Water Heater Installation",
    slug: "water-heater-installation",
    shortDesc: "Turnkey installation of premium tank water heaters compliant with Colorado Springs Utilities safety standards, seismic straps, expansion tanks, and PPRBD codes.",
    metaTitle: "Water Heater Installation in Colorado Springs, CO",
    metaDescription: "Code-compliant water heater installation in Colorado Springs, CO. Thermal expansion tanks, shutoff valves, and safe venting. Call (456) 789-0123 for fast dispatch.",
    iconName: "PackagePlus",
  },
  {
    id: "water-heater-replacement",
    name: "Water Heater Replacement",
    slug: "water-heater-replacement",
    shortDesc: "Hassle-free replacement for aging (10+ year), corroded, or undersized water heaters. Safe haul-away of old equipment and turnkey installation of energy-efficient models.",
    metaTitle: "Water Heater Replacement in Colorado Springs, CO",
    metaDescription: "Tired of frequent breakdowns? Replace your aged water heater in Colorado Springs with high-efficiency Bradford White or Rheem models. Call (456) 789-0123.",
    iconName: "RefreshCw",
  },
  {
    id: "water-heater-maintenance",
    name: "Water Heater Maintenance",
    slug: "water-heater-maintenance",
    shortDesc: "Annual preventative tune-ups engineered to fight hard mineral deposits, check sacrificial anode rods, test T&P safety valves, and maximize system lifespan.",
    metaTitle: "Water Heater Maintenance in Colorado Springs, CO",
    metaDescription: "Protect your water heater against Colorado Springs mineral buildup with annual maintenance. Anode rod checks, safety tests, and efficiency tuning. Call (456) 789-0123.",
    iconName: "ShieldCheck",
  },
  {
    id: "water-heater-flush",
    name: "Water Heater Flush",
    slug: "water-heater-flush",
    shortDesc: "Thorough chemical and power flushing designed to dissolve and remove calcified calcium and magnesium sediment common in Colorado Springs municipal water.",
    metaTitle: "Water Heater Flush in Colorado Springs, CO",
    metaDescription: "Eliminate popping noises and restore heating efficiency with professional water heater sediment flushing in Colorado Springs. Call (456) 789-0123.",
    iconName: "Waves",
  },
  {
    id: "water-heater-leak-repair",
    name: "Water Heater Leak Repair",
    slug: "water-heater-leak-repair",
    shortDesc: "Targeted leak detection and repair for leaking dielectric nipples, loose flex lines, temperature & pressure relief discharge pipes, and drain valves.",
    metaTitle: "Water Heater Leak Repair in Colorado Springs, CO",
    metaDescription: "Water pooling around your water heater? Fast leak diagnosis and repair in Colorado Springs. Fix valves, fittings, and prevent home water damage. Call (456) 789-0123.",
    iconName: "Droplet",
  },
  {
    id: "water-heater-thermostat-repair",
    name: "Water Heater Thermostat Repair",
    slug: "water-heater-thermostat-repair",
    shortDesc: "Calibrate and repair temperamental water heater thermostats. Eliminate lukewarm water or scalding temperature swings safely and accurately.",
    metaTitle: "Water Heater Thermostat Repair in Colorado Springs, CO",
    metaDescription: "Solve water temperature inconsistency with professional water heater thermostat repair and replacement in Colorado Springs, CO. Call (456) 789-0123.",
    iconName: "Thermometer",
  },
  {
    id: "water-heater-heating-element-replacement",
    name: "Heating Element Replacement",
    slug: "water-heater-heating-element-replacement",
    shortDesc: "Fast swap-out of burnt-out high-watt-density heating elements with durable, corrosion-resistant low-watt-density elements tailored for local hard water.",
    metaTitle: "Water Heater Heating Element Replacement in Colorado Springs, CO",
    metaDescription: "Electric water heater only giving lukewarm water? Replace burnt heating elements in Colorado Springs quickly and affordably. Call (456) 789-0123.",
    iconName: "Layers",
  },
  {
    id: "water-heater-pilot-light-repair",
    name: "Pilot Light Repair",
    slug: "water-heater-pilot-light-repair",
    shortDesc: "Troubleshoot and fix recurring pilot outages caused by clogged pilot orifices, oxidized thermocouples, draft backdrafting, or weak gas supply.",
    metaTitle: "Water Heater Pilot Light Repair in Colorado Springs, CO",
    metaDescription: "Gas pilot light won't stay lit? Fast thermocouple testing and pilot assembly repair in Colorado Springs, CO. Call our local phone hotline (456) 789-0123.",
    iconName: "SunMedium",
  },
  {
    id: "water-heater-pressure-relief-valve-repair",
    name: "Pressure Relief Valve Repair",
    slug: "water-heater-pressure-relief-valve-repair",
    shortDesc: "Critical safety inspection and replacement of malfunctioning Temperature and Pressure (T&P) valves to prevent catastrophic tank over-pressurization.",
    metaTitle: "T&P Relief Valve Repair in Colorado Springs, CO",
    metaDescription: "Is your water heater T&P valve dripping or gushing hot water? Emergency relief valve repair and safety checks in Colorado Springs. Call (456) 789-0123.",
    iconName: "Gauge",
  },
];

export const LOCATIONS: LocationItem[] = [
  {
    id: "fountain-co",
    name: "Fountain, CO",
    slug: "fountain-co",
    shortDesc: "Comprehensive residential water heater diagnostics, repair, and replacements throughout Fountain, Countryside, and neighborhoods near Fort Carson.",
    distance: "12 miles south of downtown Colorado Springs",
    zipCodes: ["80817"],
    county: "El Paso County",
    landmarks: ["Fountain Creek Regional Park", "Fort Carson Gate 20", "Mesa Ridge"],
    altitude: "5,545 ft",
    metaTitle: "Water Heater Repair in Fountain, CO",
    metaDescription: "Need water heater repair in Fountain, CO? Fast local dispatch for leaking tanks, pilot outages, and element replacements. Call (456) 789-0123.",
  },
  {
    id: "security-widefield-co",
    name: "Security-Widefield, CO",
    slug: "security-widefield-co",
    shortDesc: "Dedicated water heater service for older established single-family homes and newer subdivisions across the Security-Widefield community.",
    distance: "8 miles southeast of Colorado Springs",
    zipCodes: ["80911", "80925"],
    county: "El Paso County",
    landmarks: ["Widefield Community Park", "Powers Blvd Corridor", "Security Shopping Center"],
    altitude: "5,840 ft",
    metaTitle: "Water Heater Repair in Security-Widefield, CO",
    metaDescription: "Reliable water heater repair in Security-Widefield, CO. Gas and electric tank diagnostics, sediment flushes, and emergency repairs. Call (456) 789-0123.",
  },
  {
    id: "cimarron-hills-co",
    name: "Cimarron Hills, CO",
    slug: "cimarron-hills-co",
    shortDesc: "Priority water heater maintenance, tankless troubleshooting, and emergency tank repairs serving east metro residents near Peterson Space Force Base.",
    distance: "7 miles east of central Colorado Springs",
    zipCodes: ["80915", "80922"],
    county: "El Paso County",
    landmarks: ["Peterson SFB North Gate", "Cherokee Ridge Golf Course", "Galley Road Corridor"],
    altitude: "6,417 ft",
    metaTitle: "Water Heater Repair in Cimarron Hills, CO",
    metaDescription: "Prompt water heater repair and replacement in Cimarron Hills, CO. Addressing hard water sediment and altitude venting issues. Call (456) 789-0123.",
  },
  {
    id: "manitou-springs-co",
    name: "Manitou Springs, CO",
    slug: "manitou-springs-co",
    shortDesc: "Specialized historic home water heater retrofits, tight-basement installations, and emergency repairs at the base of Pikes Peak.",
    distance: "6 miles west of Colorado Springs",
    zipCodes: ["80829"],
    county: "El Paso County",
    landmarks: ["Manitou Incline", "Historic Downtown Arcade", "Ruxton Canyon"],
    altitude: "6,412 ft",
    metaTitle: "Water Heater Repair in Manitou Springs, CO",
    metaDescription: "Expert water heater repair in Manitou Springs, CO. Historic home plumbing adaptations, tankless upgrades, and urgent repairs. Call (456) 789-0123.",
  },
  {
    id: "monument-co",
    name: "Monument, CO",
    slug: "monument-co",
    shortDesc: "High-altitude water heater solutions, winter freeze protection, and high-efficiency replacements across the Tri-Lakes Monument area.",
    distance: "18 miles north along I-25",
    zipCodes: ["80132"],
    county: "El Paso County",
    landmarks: ["Monument Rock", "Tri-Lakes Center", "Woodmoor Lake"],
    altitude: "6,975 ft",
    metaTitle: "Water Heater Repair in Monument, CO",
    metaDescription: "High-altitude water heater repair in Monument, CO. Specialized venting and freeze protection for cold Front Range winters. Call (456) 789-0123.",
  },
];

export const BLOG_POSTS: BlogPostItem[] = [
  {
    id: "why-water-heater-not-producing-hot-water",
    title: "Why Is My Water Heater Not Producing Hot Water? 6 Common Causes",
    slug: "why-water-heater-not-producing-hot-water",
    publishDate: "November 14, 2026",
    readTime: "6 min read",
    category: "Troubleshooting",
    snippet: "Turn on the shower only to get blasted by ice-cold water? Discover the most frequent culprits from blown heating elements to gas pilot failures in Colorado Springs.",
    metaTitle: "Why Is My Water Heater Not Producing Hot Water? | Troubleshooting Guide",
    metaDescription: "Understand why your water heater stopped producing hot water. Common electric and gas faults, safe checks, and when to call for repair in Colorado Springs.",
    imageUrl: "/images/img-4-multimeter-test.jpg",
  },
  {
    id: "water-heater-leaking-causes",
    title: "Water Heater Leaking: Common Causes and What to Do Immediately",
    slug: "water-heater-leaking-causes",
    publishDate: "November 10, 2026",
    readTime: "7 min read",
    category: "Emergency Guidance",
    snippet: "Found a puddle underneath your water heater? Learn how to distinguish between a loose pipe fitting, a failed T&P valve, and a fatal internal tank rupture.",
    metaTitle: "Water Heater Leaking: Common Causes & Immediate Actions | Colorado Springs",
    metaDescription: "Discover why your water heater is leaking water. Step-by-step emergency shutoff guide and repair vs replacement advice. Call (456) 789-0123.",
    imageUrl: "/images/img-10-water-heater-leak.jpg",
  },
  {
    id: "tank-vs-tankless-water-heater",
    title: "Tank vs. Tankless Water Heaters: What Colorado Springs Homeowners Must Know",
    slug: "tank-vs-tankless-water-heater",
    publishDate: "November 03, 2026",
    readTime: "8 min read",
    category: "Buying Guide",
    snippet: "Debating between a standard storage tank and a high-efficiency on-demand tankless unit? Compare upfront equipment costs, monthly gas savings, and altitude performance.",
    metaTitle: "Tank vs Tankless Water Heaters in Colorado Springs | Complete Guide",
    metaDescription: "Compare tank vs tankless water heaters for Colorado homes. Energy efficiency, winter groundwater temperatures, and installation costs compared.",
    imageUrl: "/images/img-12-tankless-basement-service.jpg",
  },
  {
    id: "how-often-flush-water-heater",
    title: "How Often Should a Water Heater Be Flushed in El Paso County?",
    slug: "how-often-flush-water-heater",
    publishDate: "October 27, 2026",
    readTime: "5 min read",
    category: "Maintenance",
    snippet: "Colorado Springs water carries heavy mineral deposits from mountain runoff. Learn the exact flushing schedule to prevent calcified tank burnout.",
    metaTitle: "How Often Should a Water Heater Be Flushed? | Local Maintenance Advice",
    metaDescription: "Learn how often to flush your water heater in Colorado Springs to prevent sediment buildup, popping noises, and premature tank corrosion.",
    imageUrl: "/images/img-13-tankless-descaling-flush.jpg",
  },
  {
    id: "water-heater-repair-vs-replacement",
    title: "Water Heater Repair or Replacement: How to Decide with the 50% Rule",
    slug: "water-heater-repair-vs-replacement",
    publishDate: "October 19, 2026",
    readTime: "6 min read",
    category: "Cost & Decision",
    snippet: "When does sinking money into an old heater become a waste? Use our age-and-cost evaluation matrix to decide between a quick fix and a new unit.",
    metaTitle: "Water Heater Repair or Replacement Decision Guide | Colorado Springs",
    metaDescription: "Should you repair or replace your water heater? Understand age limits, efficiency ratings, repair costs, and safety factors before spending money.",
    imageUrl: "/images/img-11-technician-homeowner.jpg",
  },
  {
    id: "water-heater-popping-noises",
    title: "Why Is My Water Heater Making Popping or Rumbling Noises?",
    slug: "water-heater-popping-noises",
    publishDate: "October 12, 2026",
    readTime: "5 min read",
    category: "Diagnostics",
    snippet: "Kettle-like popping, banging, and rumbling inside your tank are urgent distress signals. Understand how trapped steam pockets create these sounds and how to fix it.",
    metaTitle: "Why Water Heaters Make Popping & Rumbling Noises | Mineral Sediment Fix",
    metaDescription: "Discover what causes popping, knocking, and rumbling in water heaters. Sediment buildup explanations and safe flush solutions in Colorado Springs.",
    imageUrl: "/images/img-8-kneeling-plumber.jpg",
  },
  {
    id: "gas-water-heater-pilot-light-keeps-going-out",
    title: "Gas Water Heater Pilot Light Keeps Going Out: Possible Causes & Solutions",
    slug: "gas-water-heater-pilot-light-keeps-going-out",
    publishDate: "October 05, 2026",
    readTime: "6 min read",
    category: "Troubleshooting",
    snippet: "Tired of constantly relighting your pilot? Examine dirty thermocouples, weak gas valves, downdrafts on windy Front Range days, and cracked burner tubes.",
    metaTitle: "Gas Water Heater Pilot Light Keeps Going Out | Diagnosis & Fixes",
    metaDescription: "Why does your gas water heater pilot light blow out repeatedly? Thermocouple failure, drafts, and gas control valve troubleshooting guide.",
    imageUrl: "/images/img-5-top-fittings-repair.jpg",
  },
  {
    id: "tankless-water-heater-error-codes",
    title: "Tankless Water Heater Error Codes: First Steps for Homeowners",
    slug: "tankless-water-heater-error-codes",
    publishDate: "September 28, 2026",
    readTime: "7 min read",
    category: "Tankless Tech",
    snippet: "Decipher mysterious blinking numbers on your Navien, Rinnai, or Noritz tankless controller: ignition failures, flow sensor errors, and exhaust blockage codes.",
    metaTitle: "Tankless Water Heater Error Codes Explained | Colorado Springs Guide",
    metaDescription: "Understanding digital error codes on your tankless water heater. Common codes for Rinnai, Navien, and Noritz with safe homeowner check steps.",
    imageUrl: "/images/img-2-tankless-repair.jpg",
  },
  {
    id: "hard-water-mineral-buildup-colorado-springs",
    title: "The Impact of Colorado Springs Hard Water on Water Heater Longevity",
    slug: "hard-water-mineral-buildup-colorado-springs",
    publishDate: "September 21, 2026",
    readTime: "6 min read",
    category: "Water Quality",
    snippet: "From Pike's Peak granite runoff to limestone deposits: why Colorado Springs municipal water accelerates sacrificial anode decay and what to do about it.",
    metaTitle: "Hard Water Mineral Buildup on Water Heaters in Colorado Springs",
    metaDescription: "How Colorado Springs mineral water affects water heaters. Scale prevention, powered anode rods, and water filtration recommendations.",
    imageUrl: "/images/img-1-valve-wrench.jpg",
  },
  {
    id: "winter-freeze-prevention-colorado-water-heaters",
    title: "High-Altitude Winter Freeze Prevention for Colorado Water Heaters",
    slug: "winter-freeze-prevention-colorado-water-heaters",
    publishDate: "September 14, 2026",
    readTime: "6 min read",
    category: "Seasonal Care",
    snippet: "When sub-zero Arctic blasts sweep down the Rockies, garage and crawlspace water heaters are at extreme risk. Master freeze prevention and pipe insulation.",
    metaTitle: "Winter Freeze Prevention for Colorado Water Heaters | Frost Guidelines",
    metaDescription: "Protect your water heater and cold-supply lines from catastrophic freezing during Colorado Springs winter freezes. Practical insulation and draft-sealing tips.",
    imageUrl: "/images/img-7-pipe-wrench-fitting.jpg",
  },
];

export const FAQS = [
  {
    q: "Why is my water heater suddenly not producing any hot water?",
    a: "If your water heater stopped delivering hot water entirely, the root cause depends on the fuel source. For gas water heaters, a extinguished pilot light, malfunctioning thermocouple, defective gas control valve, or tripped thermal cutoff switch is typically responsible. For electric water heaters, the problem usually stems from a tripped high-limit switch on the upper thermostat, a tripped 240V double-pole circuit breaker in your electrical panel, or burnt upper heating elements. In Colorado Springs, power surges from afternoon lightning storms or gas pressure fluctuations can also cause sudden cutoffs."
  },
  {
    q: "What causes a water heater to leak from the bottom?",
    a: "A puddle around the bottom of the heater can stem from several sources. Minor causes include a loose or dripping brass drain valve, condensation pooling from high humidity, or a leaking Temperature and Pressure (T&P) relief valve discharge pipe. However, if water is weeping through the lower steel jacket seams or bottom insulation, the internal glass-lined steel tank has developed stress corrosion cracks. Internal tank fractures cannot be welded or patched; the entire unit must be replaced immediately to avert basement flooding."
  },
  {
    q: "How does Colorado Springs high elevation (6,000+ ft) affect water heaters?",
    a: "Colorado Springs sits at an average altitude of 6,035 feet above sea level (rising to nearly 7,000 feet in Monument). Thinner air means less available oxygen for gas combustion. Standard atmospheric gas water heaters require high-altitude burner orifices and specialized air-intake adjustments to ensure complete combustion. Improper high-altitude setup leads to incomplete combustion, sooty burner chambers, elevated carbon monoxide production, and premature thermal switch tripping. Certified local technicians calibrate gas pressure and verify draft venting to comply with Pikes Peak Regional Building Department (PPRBD) requirements."
  },
  {
    q: "Why is my water heater making a loud popping, boiling, or knocking sound?",
    a: "Loud popping sounds—often described as popping popcorn or rumbling thunder—are caused by heavy mineral sediment accumulated at the bottom of the tank. Water trapped beneath this calcified sediment layer becomes superheated, boils into steam bubbles, and violently bursts through the sediment crust. Left unresolved, this sediment layer creates severe hot spots that overheat the bottom tank metal and melt electric heating elements. A professional chemical flush or power descaling can dissolve sediment before it destroys the tank."
  },
  {
    q: "Should I repair or replace my water heater?",
    a: "As an industry standard, follow the 50% Rule and age threshold. If your water heater is under 8 years old and the repair cost is less than 50% of the replacement price, a precision repair (such as replacing a thermocouple, heating element, or valve) is financially sensible. If the tank is 10 to 12+ years old, shows visible rust around fittings, or has a leaking internal tank, replacement is overwhelmingly safer and more economical in the long run. Modern ENERGY STAR® water heaters provide superior thermal efficiency, reducing monthly utility bills."
  },
  {
    q: "How often should a water heater be professionally flushed in Colorado Springs?",
    a: "We recommend a comprehensive water heater flush once every 12 months for standard tank systems. In areas of El Paso County with higher mineral hardness or private well supplies (common in parts of Fountain, Falcon, and Monument), flushing every 6 to 9 months may be necessary to prevent hard scale from baking onto heating elements and tank bottoms. Tankless units require annual descaling with food-grade virgin vinegar or citrus descaler to preserve heat exchanger warranty coverage."
  },
  {
    q: "What should I do immediately if I smell gas near my water heater?",
    a: "If you smell natural gas (a distinct rotten egg or sulfur odor) near your water heater: (1) Do NOT attempt to light any matches, ignite pilots, or toggle electric switches or phones inside the home. (2) Immediately evacuate all family members and pets outside into fresh air. (3) If accessible and safe to do so, turn the yellow gas shutoff valve clockwise perpendicular to the gas pipe to halt fuel flow. (4) Once safely outdoors, call Colorado Springs Utilities emergency line at (719) 448-4800 or 911, followed by our emergency dispatch line at (456) 789-0123."
  },
  {
    q: "What is a Temperature & Pressure (T&P) Relief Valve and why is it dripping?",
    a: "The T&P valve is the most critical mechanical safety mechanism on your water heater. It is engineered to automatically open and discharge hot water if the tank temperature exceeds 210°F or if internal pressure surpasses 150 PSI, preventing catastrophic tank explosions. If your T&P valve is continuously dripping, it indicates either excessive municipal water pressure entering your home, thermal expansion caused by a closed plumbing loop lacking an expansion tank, or a worn mineral-encrusted valve seat that no longer seals properly."
  },
  {
    q: "Are water heater permits required in Colorado Springs and El Paso County?",
    a: "Yes. All water heater replacements, fuel-type conversions, and major structural re-piping in Colorado Springs and unincorporated El Paso County require a mechanical or plumbing permit issued by the Pikes Peak Regional Building Department (PPRBD). Permitted installations require strict compliance with thermal expansion tank requirements, seismic bracing straps, sediment traps, proper gas vent clearances, and combustion air supply. Our dispatched network technicians ensure all replacements are fully compliant with PPRBD standards."
  },
  {
    q: "How does your phone-only water heater dispatch service work?",
    a: "We operate a 100% phone-focused referral and connection service engineered for maximum speed and simplicity. We do not use lengthy web forms or email tickets because water heater breakdowns require rapid human evaluation. When you call (456) 789-0123, you speak directly with a responsive dispatch specialist who identifies your equipment make, model, age, and failure symptoms, and connects you with a licensed, vetted local water heater specialist ready to provide transparent upfront estimates and rapid same-day or 24/7 service."
  }
];

export const COLORADO_SPRINGS_NEIGHBORHOODS = [
  "Downtown Colorado Springs (80903)",
  "Old Colorado City (80904)",
  "Broadmoor & Cheyenne Mountain (80906)",
  "Briargate & Pine Creek (80920)",
  "Powers Corridor & Stetson Hills (80922, 80923)",
  "Rockrimmon & Peregrine (80919)",
  "East Colorado Springs & Palmer Park (80909)",
  "Northgate & Flying Horse (80921)"
];
