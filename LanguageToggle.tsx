export type Lang = "sv" | "en";

export const translations = {
  sv: {
    nav: {
      services: "Tjänster",
      expertise: "Kompetenser",
      about: "Om oss",
      contact: "Kontakt",
    },
    hero: {
      eyebrow: "Data Analytics & Data Science",
      titlePre: "Din partner för",
      titleEm: "datadrivna",
      titlePost: "beslut",
      subtitle:
        "Vi levererar hållbara resultat som driver konkret affärstillväxt – genom specialiserad expertis inom data, analys och maskininlärning.",
      ctaServices: "Våra tjänster",
      ctaContact: "Ta kontakt",
      stats: [
        { value: "3+", label: "Cloud-plattformar" },
        { value: "10+", label: "Teknologier" },
        { value: "Analytics", label: "ML/AI & BI" },
      ],
      scroll: "Scrolla ner",
    },
    services: {
      eyebrow: "Vad vi gör",
      heading: "Tjänster",
      items: [
        {
          title: "Dataanalys",
          tag: "Insikter & Trender",
          description:
            "Vi identifierar värdefulla mönster och trender i din data, vilket möjliggör välgrundade beslut och strategisk tillväxt.",
        },
        {
          title: "Prediktiv modellering",
          tag: "Machine Learning & AI",
          description:
            "Prognostisera framtida trender, identifiera risker och optimera möjligheter med avancerade ML-tekniker.",
        },
        {
          title: "Datavisualisering",
          tag: "Business Intelligence",
          description:
            "Komplexa datamängder förvandlas till övertygande dashboards och rapporter som gör det enkelt att kommunicera insikter.",
        },
        {
          title: "Ledarskap",
          tag: "Strategi & Affärsutveckling",
          description:
            "Vi stöttar organisationer med erfaret ledarskap och strategisk företagsledning – från operativa beslut till långsiktig tillväxt.",
        },
      ],
    },
    expertise: {
      eyebrow: "Teknisk kompetens",
      heading: "Expertisområden",
      categories: [
        {
          title: "Cloud-plattformar",
          items: ["Google Cloud Platform", "Microsoft Azure", "Microsoft Fabric", "Databricks"],
        },
        {
          title: "Visualisering",
          items: ["Looker Studio", "Power BI", "Tableau"],
        },
        {
          title: "Databasspråk",
          items: ["SQL", "T-SQL", "BigQuery", "Spark"],
        },
        {
          title: "Analytics & Programmering",
          items: ["Python", "R", "Matlab", "DAX", "Scala", "Java"],
        },
        {
          title: "A/B-testning",
          items: ["Google Analytics", "Optimizely"],
        },
      ],
    },
    about: {
      eyebrow: "Teamet",
      heading: "Konsulter",
      role: "Data Analytics Manager & Subject Matter Expert",
      p1: "Milad bidrar med ett öppet sinne och ett ödmjukt förhållningssätt där verksamheten alltid sätts i centrum. Han tror på människor och finner stor personlig tillfredsställelse i att coacha och se dem växa.",
      p2: "Hans mångsidiga yrkeserfarenhet ger en bred förståelse tvärs industrier och roller. Med bakgrund som Head of Data Analytics & AI, Lead Data Scientist och Senior Analyst inom medtech, e-handel, finans och supply chain bär han på djup kunskap.",
      tags: ["Analytics Leadership", "E-handel", "Finans", "Medtech", "Supply Chain"],
      cv: "Ladda ner CV",
    },
    contact: {
      eyebrow: "Kom igång",
      heading: "Kontakta oss",
      intro:
        "Vi ser fram emot att höra från dig. Hör av dig för att diskutera hur vi kan hjälpa er organisation.",
      labels: {
        mobil: "Mobil",
        epost: "E-post",
        adress: "Adress",
        linkedin: "LinkedIn",
      },
    },
    footer: {
      rights: "Alla rättigheter förbehållna.",
    },
  },

  en: {
    nav: {
      services: "Services",
      expertise: "Expertise",
      about: "About",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Data Analytics & Data Science",
      titlePre: "Your partner for",
      titleEm: "data-driven",
      titlePost: "decisions",
      subtitle:
        "We deliver lasting results that drive real business growth – through specialised expertise in data, analytics and machine learning.",
      ctaServices: "Our services",
      ctaContact: "Get in touch",
      stats: [
        { value: "3+", label: "Cloud platforms" },
        { value: "10+", label: "Technologies" },
        { value: "Analytics", label: "ML/AI & BI" },
      ],
      scroll: "Scroll down",
    },
    services: {
      eyebrow: "What we do",
      heading: "Services",
      items: [
        {
          title: "Data Analysis",
          tag: "Insights & Trends",
          description:
            "We identify valuable patterns and trends in your data, enabling well-founded decisions and strategic growth.",
        },
        {
          title: "Predictive Modelling",
          tag: "Machine Learning & AI",
          description:
            "Forecast future trends, identify risks and optimise opportunities with advanced ML techniques.",
        },
        {
          title: "Data Visualisation",
          tag: "Business Intelligence",
          description:
            "Complex datasets are turned into compelling dashboards and reports that make insights easy to communicate.",
        },
        {
          title: "Leadership",
          tag: "Strategy & Business Development",
          description:
            "We support organisations with experienced leadership and strategic management – from operational decisions to long-term growth.",
        },
      ],
    },
    expertise: {
      eyebrow: "Technical expertise",
      heading: "Areas of Expertise",
      categories: [
        {
          title: "Cloud Platforms",
          items: ["Google Cloud Platform", "Microsoft Azure", "Microsoft Fabric", "Databricks"],
        },
        {
          title: "Visualisation",
          items: ["Looker Studio", "Power BI", "Tableau"],
        },
        {
          title: "Database Languages",
          items: ["SQL", "T-SQL", "BigQuery", "Spark"],
        },
        {
          title: "Analytics & Programming",
          items: ["Python", "R", "Matlab", "DAX", "Scala", "Java"],
        },
        {
          title: "A/B Testing",
          items: ["Google Analytics", "Optimizely"],
        },
      ],
    },
    about: {
      eyebrow: "The Team",
      heading: "Consultants",
      role: "Data Analytics Manager & Subject Matter Expert",
      p1: "Milad brings an open mind and a humble approach, always putting the business at the centre. He believes in people and finds great personal fulfilment in coaching them and watching them grow.",
      p2: "His varied professional experience gives him a broad understanding across industries and roles. With a background as Head of Data Analytics & AI, Lead Data Scientist and Senior Analyst within medtech, e-commerce, finance and supply chain, he brings deep knowledge.",
      tags: ["Analytics Leadership", "E-commerce", "Finance", "Medtech", "Supply Chain"],
      cv: "Download CV",
    },
    contact: {
      eyebrow: "Get started",
      heading: "Contact Us",
      intro:
        "We look forward to hearing from you. Get in touch to discuss how we can help your organisation.",
      labels: {
        mobil: "Mobile",
        epost: "Email",
        adress: "Address",
        linkedin: "LinkedIn",
      },
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
};
