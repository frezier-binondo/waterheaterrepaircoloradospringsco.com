export interface PageImageInfo {
  src: string;
  alt: string;
  caption: string;
}

export function getServiceImages(slug: string, name: string): PageImageInfo[] {
  if (slug.includes("tankless")) {
    return [
      {
        src: "/images/img-2-tankless-repair.jpg",
        alt: `Diagnostic testing and electronic board repair on tankless water heater for ${name} in Colorado Springs`,
        caption: "Precision digital diagnostics and burner calibration on high-efficiency tankless units.",
      },
      {
        src: "/images/img-3-tankless-inspection.jpg",
        alt: `Multi-point tankless safety and combustion inspection for ${name} in Colorado Springs, CO`,
        caption: "Comprehensive intake venting and heat exchanger inspection compliant with PPRBD codes.",
      },
      {
        src: "/images/img-13-tankless-descaling-flush.jpg",
        alt: `Descaling flush pump setup to remove hard water mineral scale for ${name}`,
        caption: "Annual circulation flush removing calcified mountain mineral scale to restore thermal transfer.",
      },
    ];
  }

  if (slug.includes("electric") || slug.includes("thermostat") || slug.includes("element")) {
    return [
      {
        src: "/images/img-4-multimeter-test.jpg",
        alt: `Digital multimeter testing electrical heating element resistance and voltage for ${name}`,
        caption: "Testing upper and lower heating elements with precision digital multimeters for voltage and continuity.",
      },
      {
        src: "/images/img-9-electric-thermostat-repair.jpg",
        alt: `Screwdriver servicing dual thermostat and high-limit reset switch for ${name}`,
        caption: "Thermostat replacement and high-limit ECO cutoff switch calibration to prevent overheating.",
      },
      {
        src: "/images/img-8-kneeling-plumber.jpg",
        alt: `Licensed technician servicing lower tank drain valve and sediment for ${name}`,
        caption: "Inspecting lower tank components, electrical grounding, and sediment levels.",
      },
    ];
  }

  if (slug.includes("leak") || slug.includes("emergency") || slug.includes("valve")) {
    return [
      {
        src: "/images/img-10-water-heater-leak.jpg",
        alt: `Active water leak pooling beneath water heater tank during ${name}`,
        caption: "Pinpointing leak origins: distinguishing loose drain valves from catastrophic internal tank fractures.",
      },
      {
        src: "/images/img-1-valve-wrench.jpg",
        alt: `Heavy duty wrench tightening brass shutoff and pressure relief valves for ${name}`,
        caption: "Precision brass valve replacement and pipe alignment to halt high-pressure water loss.",
      },
      {
        src: "/images/img-7-pipe-wrench-fitting.jpg",
        alt: `Pipe wrench adjusting cold water supply union and dielectric fittings for ${name}`,
        caption: "Securing top water connections and installing dielectric unions to stop galvanic corrosion.",
      },
    ];
  }

  if (slug.includes("gas") || slug.includes("pilot") || slug.includes("burner")) {
    return [
      {
        src: "/images/img-5-top-fittings-repair.jpg",
        alt: `High altitude draft hood and gas supply line inspection for ${name}`,
        caption: "Draft hood alignment and gas supply line testing calibrated for 6,000+ ft altitude combustion.",
      },
      {
        src: "/images/img-8-kneeling-plumber.jpg",
        alt: `Technician inspecting burner chamber and thermocouple assembly for ${name}`,
        caption: "Inspecting gas burner orifices, thermocouples, and pilot assemblies for clean blue flame ignition.",
      },
      {
        src: "/images/img-11-technician-homeowner.jpg",
        alt: `Plumber discussing gas water heater safety and repair recommendations with homeowner`,
        caption: "Explaining diagnostic findings, carbon monoxide safety tests, and upfront estimate options.",
      },
    ];
  }

  // Default set for general repair, installation, replacement, flush, anode rod
  return [
    {
      src: "/images/img-6-technician-portrait.jpg",
      alt: `Vetted local plumbing specialist equipped for ${name} in Colorado Springs, CO`,
      caption: "Certified local technicians dispatched with fully stocked trucks for prompt same-day resolution.",
    },
    {
      src: "/images/img-5-top-fittings-repair.jpg",
      alt: `Water heater installation and top copper pipe connection fitting for ${name}`,
      caption: "Precision copper solder fittings and thermal expansion tank connections meeting PPRBD guidelines.",
    },
    {
      src: "/images/img-8-kneeling-plumber.jpg",
      alt: `Professional sediment flush and maintenance servicing for ${name}`,
      caption: "Annual tank maintenance and sediment removal to extend system lifespan and improve energy efficiency.",
    },
  ];
}

export function getLocationImages(slug: string, name: string): PageImageInfo[] {
  switch (slug) {
    case "fountain-co":
      return [
        {
          src: "/images/img-1-valve-wrench.jpg",
          alt: `Pressure valve adjustment and water heater repair in Fountain, CO`,
          caption: "Adjusting high municipal water pressure valves and thermal expansion tanks in Fountain homes.",
        },
        {
          src: "/images/img-8-kneeling-plumber.jpg",
          alt: `Technician flushing mineral sediment from water heater in Fountain, Colorado`,
          caption: "Routine annual tank flush clearing mineral runoff to protect heating elements from burnout.",
        },
        {
          src: "/images/img-11-technician-homeowner.jpg",
          alt: `Plumbing technician consulting with homeowner in Fountain, CO`,
          caption: "Providing upfront estimates and transparent repair vs. replacement advice for Fountain residents.",
        },
      ];
    case "security-widefield-co":
      return [
        {
          src: "/images/img-5-top-fittings-repair.jpg",
          alt: `Galvanic pipe fitting replacement in Security-Widefield mid-century home`,
          caption: "Replacing corroded galvanized nipples with brass dielectric unions in Security-Widefield properties.",
        },
        {
          src: "/images/img-4-multimeter-test.jpg",
          alt: `Electrical element multimeter testing in Security-Widefield crawlspace`,
          caption: "Diagnostic voltage testing on 240V electric water heaters common in Widefield subdivisions.",
        },
        {
          src: "/images/img-6-technician-portrait.jpg",
          alt: `Certified water heater technician dispatched to Security-Widefield, CO`,
          caption: "Local technician on call for prompt water heater repairs across Security-Widefield.",
        },
      ];
    case "cimarron-hills-co":
      return [
        {
          src: "/images/img-12-tankless-basement-service.jpg",
          alt: `High-efficiency tankless water heater maintenance in Cimarron Hills, CO`,
          caption: "Servicing modern tankless water heaters in Cimarron Hills basements and utility rooms.",
        },
        {
          src: "/images/img-9-electric-thermostat-repair.jpg",
          alt: `Thermostat calibration and electrical service in Cimarron Hills, Colorado`,
          caption: "Calibrating temperature sensors and replacing faulty thermostats for steady hot water delivery.",
        },
        {
          src: "/images/img-10-water-heater-leak.jpg",
          alt: `Emergency water heater leak inspection in Cimarron Hills home`,
          caption: "Emergency leak diagnosis protecting finished Cimarron Hills basements from water damage.",
        },
      ];
    case "manitou-springs-co":
      return [
        {
          src: "/images/img-7-pipe-wrench-fitting.jpg",
          alt: `Historic home plumbing alignment and pipe wrench service in Manitou Springs, CO`,
          caption: "Navigating tight mechanical layouts in historic Manitou Springs homes and hillside cottages.",
        },
        {
          src: "/images/img-2-tankless-repair.jpg",
          alt: `Space-saving tankless water heater installation and repair in Manitou Springs`,
          caption: "Tankless systems provide endless hot water while freeing valuable square footage in Manitou homes.",
        },
        {
          src: "/images/img-8-kneeling-plumber.jpg",
          alt: `Mineral sediment flush for mountain runoff water in Manitou Springs, CO`,
          caption: "Flushing natural mountain mineral deposits before they create kettle-popping noises in the tank.",
        },
      ];
    case "monument-co":
      return [
        {
          src: "/images/img-3-tankless-inspection.jpg",
          alt: `High altitude 7,000 ft combustion intake inspection in Monument, CO`,
          caption: "High-altitude combustion testing and draft verification for 7,000-foot Monument elevations.",
        },
        {
          src: "/images/img-13-tankless-descaling-flush.jpg",
          alt: `Annual Tri-Lakes hard water descaling flush in Monument, Colorado`,
          caption: "Annual circulation flush dissolving Tri-Lakes mineral scale from high-efficiency heat exchangers.",
        },
        {
          src: "/images/img-11-technician-homeowner.jpg",
          alt: `Consulting with Monument homeowner on freeze protection and winter insulation`,
          caption: "Guidance on winter pipe insulation and freeze-protection valves for freezing Palmer Divide storms.",
        },
      ];
    default:
      return [
        {
          src: "/images/img-6-technician-portrait.jpg",
          alt: `Water heater service specialist in ${name}`,
          caption: `Prompt local dispatch throughout ${name} and surrounding El Paso County communities.`,
        },
        {
          src: "/images/img-5-top-fittings-repair.jpg",
          alt: `Professional water heater installation and pipe fitting in ${name}`,
          caption: `PPRBD code-compliant installations and pipe connections in ${name}.`,
        },
        {
          src: "/images/img-8-kneeling-plumber.jpg",
          alt: `Sediment flush and water heater maintenance in ${name}`,
          caption: `Annual maintenance and sediment clearing protecting water heaters in ${name}.`,
        },
      ];
  }
}

export function getServiceLocationImages(serviceSlug: string, locationName: string): PageImageInfo[] {
  const serviceImages = getServiceImages(serviceSlug, locationName);
  return serviceImages.map((img, idx) => ({
    ...img,
    alt: `${img.alt.replace("Colorado Springs", locationName)} in ${locationName}, CO`,
    caption: `${img.caption} Available for homeowners in ${locationName}.`,
  }));
}
