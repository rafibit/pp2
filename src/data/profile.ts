export const profile = {
  name: "Dr. Rafiq Ul Islam",
  tagline: "",
  subtitle:
    "Privacy-preserving on-device AI (TinyML/FOMO), secure IoT architectures (LoRaWAN/TTN), and edge-to-cloud analytics for smart environments & cultural heritage.",
  location: "Rende, Italy",
  email: "rafiqul.islam@dimes.unical.it",
  phone: "+39 345 874 7270",
  links: [
    { label: "GitHub", href: "https://github.com/rafibit" },
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
    {
      label: "Google Scholar",
      href: "https://scholar.google.com/citations?view_op=list_works&hl=en&user=qTUg8-oAAAAJ",
    },
  ],
   // Skills: grouped like older portal
  skills: [
    {
      group: "Programming",
      items: ["Python", "MicroPython", "C++", "OpenMV scripting", "Flux Query Language", "Embedded Linux"],
    },
    {
      group: "Platforms & Ops",
      items: [
        "Linux (Bash/Shell)",
        "Docker",
        "MQTT",
        "InfluxDB",
        "Telegraf",
        "Grafana",
        "Cloud server management",
        "The Things Network",
        "ChirpStack",
      ],
    },
    {
      group: "Embedded Vision & AI",
      items: ["TinyML", "Model quantization (int8)", "Edge Impulse", "Computer Vision (FOMO)", "Real-time inference", "On-device learning"],
    },
    {
      group: "Low-Power Systems & Sensing",
      items: ["Microcontroller programming (Arduino)", "Time-series analysis", "LoRaWAN", "Sensor fusion"],
    },
    {
      group: "Languages",
      items: ["Urdu (native)", "English (C1)"],
    },
  ],
  //  Research cards: you can edit titles, summaries, tags, links, or image paths
  research_cards: [
    {
      title: "TinyML framework for quantifying artifacts’ holding power",
      one_liner:
        "On-device FOMO on Arduino Nicla Vision to measure visitor focus time, streamed via LoRaWAN for time-series analytics.",
      image: "research/tinyml-holding-power.png",
      tags: ["TinyML", "FOMO", "Nicla Vision", "LoRaWAN", "InfluxDB"],
      links: [{ label: "Code", href: "https://github.com/rafibit/artifacts-holding-power" }],
    },
    {
      title: "Smart museum sensing & Forecasting artifact's Risk of Damage",
      one_liner:
        "A general-purpose sensing stack for smart environments with the smart museum as a practical deployment and evaluation case.",
      image: "research/general-purpose-sensing.png",
      tags: ["IoT", "Smart Museums", "Time-series", "Edge-Cloud"],
      links: [
        {
          label: "Scholar",
          href: "https://scholar.google.com/citations?view_op=list_works&hl=en&user=qTUg8-oAAAAJ",
        },
      ],
    },
    {
      title: "Improving visitor experience in smart museums",
      one_liner:
        "Integrates sensing, analytics, and UX-oriented feedback loops to improve comfort, safety, and engagement in museums.",
      image: "research/improving-visitor-experience.png",
      tags: ["UX", "Smart Museums", "Sensing", "Analytics"],
      links: [
        {
          label: "Scholar",
          href: "https://scholar.google.com/citations?view_op=list_works&hl=en&user=qTUg8-oAAAAJ",
        },
      ],
    },
    {
      title: "Healthiness & safety of smart environments (Edge Intelligence + IoT)",
      one_liner:
        "Edge-aware sensing and decision logic for safer indoor environments (e.g., controlled activation strategies).",
      image: "research/healthiness-safety.png",
      tags: ["Edge AI", "IoT", "Safety"],
      links: [
        {
          label: "Scholar",
          href: "https://scholar.google.com/citations?view_op=list_works&hl=en&user=qTUg8-oAAAAJ",
        },
      ],
    },
    {
      title: "NDN for smart environments (survey)",
      one_liner:
        "Survey of Named Data Networking opportunities for next-generation smart environments and data-centric communication.",
      image: "research/ndn-survey.png",
      tags: ["NDN", "Future Internet", "Networking"],
      links: [
        {
          label: "Scholar",
          href: "https://scholar.google.com/citations?view_op=list_works&hl=en&user=qTUg8-oAAAAJ",
        },
      ],
    },
    {
      title: "NDN-aided edge–cloud architecture for continuous smart healthcare",
      one_liner:
        "Hybrid edge–cloud architecture integrating NDN principles for continuous monitoring and scalable services.",
      image: "research/ndn-edge-cloud-smart-healthcare.png",
      tags: ["NDN", "Edge-Cloud", "Healthcare"],
      links: [
        {
          label: "Scholar",
          href: "https://scholar.google.com/citations?view_op=list_works&hl=en&user=qTUg8-oAAAAJ",
        },
      ],
    },
  ],

  // Experience: now matches the older portal style (cards + tags + optional bullets)
  experience: [
    {
      role: "Visiting Researcher",
      org: "Universitat Politècnica de València (UPV)",
      where: "Valencia, Spain",
      start: "2025-02-01",
      end: "2025-07-31",
      bullets: [
        "Built a privacy-preserving visual perception system using a FOMO model on Arduino Nicla Vision, enabling anonymous human presence and engagement tracking without transmitting raw video.",
        "Developed on-device visual perception for real-time scene understanding, achieving low-latency inference (<100 ms) under ultra-low-power constraints.",
        "Implemented int8 quantization and optimization techniques to improve performance under severe compute/power limits.",
        "Architected a closed-loop data pipeline integrating LoRaWAN with cloud analytics (InfluxDB).",
      ],
      tags: ["TinyML", "FOMO", "Nicla Vision", "LoRaWAN", "InfluxDB"],
    },
    {
      role: "Visiting Researcher",
      org: "WISH INNOVATIONS S.R.L",
      where: "Rende, Italy",
      start: "2023-08-01",
      end: "2025-01-29",
      bullets: [
        "Designed a multi-modal sensor network for environmental perception and adaptive control loops.",
        "Managed end-to-end data lifecycle from edge devices to cloud platforms (The Things Network) with reliable real-time communication.",
        "Applied privacy-preserving design principles to embedded AI pipelines.",
      ],
      tags: ["IoT", "Smart Environments", "Edge-Cloud", "TTN", "Privacy"],
    },
    {
      role: "Computer Science Teacher",
      org: "Daanish Schools, Govt. of Punjab",
      where: "Faisalabad, Pakistan",
      start: "2020-12-30",
      end: "2022-10-31",
      bullets: [],
      tags: ["Teaching"],
    },
    {
      role: "Visiting Lecturer",
      org: "University of Agriculture",
      where: "Faisalabad, Pakistan",
      start: "2019-10-01",
      end: "2020-04-30",
      bullets: [],
      tags: ["Teaching"],
    },
    // {
    //   role: "Senior Elementary School Teacher",
    //   org: "Punjab Education Department",
    //   where: "Faisalabad, Pakistan",
    //   start: "2016-07-31",
    //   end: "2017-08-31",
    //   bullets: [],
    //   tags: ["Teaching"],
    // },
  ],
  research_interests: [
  "Edge Intelligence / Edge AI",
  "Internet of Things",
  "Cyber-Physical Systems",
  "Human-centred and non-intrusive sensing",
  "Embedded and edge-based machine learning",
  "Privacy-aware perception and interaction systems",
  "Smart environments and public-space interaction",
  ],

education: [
  {
    degree: "PhD — Information and Communication Technology",
    org: "University of Calabria",
    where: "Rende, Italy",
    start: "2022-11-01",
    end: "2026-01-29",
  },
  {
    degree: "MS — Computer Science",
    org: "Beijing Institute of Technology",
    where: "Beijing, China",
    start: "2017-09-05",
    end: "2019-06-20",
  },
  {
    degree: "BS — Computer Science",
    org: "University of Engineering and Technology",
    where: "Lahore, Pakistan",
    start: "2011-12-11",
    end: "2015-08-30",
  },
],
awards: [
    {
      title: "Student Distinguished Award",
      org: "Beijing Institute of Technology",
      date: "2018-12-27",
    },
    {
      title: "Best Volunteer Award",
      org: "Beijing Institute of Technology",
      date: "2018-12-27",
    },
  ],
  professional_development: [
    {
      title: "Summer School: IoT for eco friendly Tourism",
      role: "Participant",
      start: "2025-03-26",
      end: "2025-03-28",
    },
    {
      title: "Workshop IEEE@UNICAL",
      role: "Attendee",
      start: "2024-06-27",
      end: "2024-06-27",
    },
    {
      title: "The International Conference on Embedded Wireless Systems and Networks",
      role: "Participant",
      start: "2023-09-25",
      end: "2023-09-27",
    },
  ],

} as const


