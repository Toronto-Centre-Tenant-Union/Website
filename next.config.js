module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.imgur.com",
        port: "",
        pathname: "/*",
      },
    ],
  },

  async redirects() {
    return [
      {
        source: "/45_balliol_survey",
        destination: "https://forms.gle/pA7FkswzGZaNZyzCA",
        permanent: false,
        basePath: false,
      },
      {
        source: "/signup",
        destination: "https://forms.gle/8c6AXfLTANdFWU1c7",
        permanent: false,
        basePath: false,
      },
      {
        source: "/45_balliol_rent_increases",
        destination: "https://forms.gle/woMcddXv27CKFRU57",
        permanent: false,
        basePath: false,
      },
      {
        source: "/137_isabella_survey",
        destination: "https://forms.gle/FV3TPXUyZuB1TvSw8",
        permanent: false,
        basePath: false,
      },
      {
        source: "/225_davisville_survey",
        destination: "https://forms.gle/LApEFx7s6iQ67iJ46",
        permanent: false,
        basePath: false,
      },
      {
        source: "/40_alexander_survey",
        destination: "https://forms.gle/ZdTQNSfbMVMUvxKD8",
        permanent: false,
        basePath: false,
      },
      {
        source: "/50_alexander_survey",
        destination: "https://forms.gle/HGwTWKXrcqL3Z3PP6",
        permanent: false,
        basePath: false,
      },
      {
        source: "/55_maitland_survey",
        destination: "https://forms.gle/tk4MFrcFbi2DYoD2A",
        permanent: false,
        basePath: false,
      },
      {
        source: "/77_davisville_survey",
        destination: "https://forms.gle/X7ZETNPDch7NMgre7",
        permanent: false,
        basePath: false,
      },
      {
        source: "/222_esplanade_survey",
        destination: "https://forms.gle/h6fko2A7zkgmXap7A",
        permanent: false,
        basePath: false,
      },
      {
        source: "/158_front_survey",
        destination: "https://forms.gle/Fg9UYCyRnFPgBZaw8",
        permanent: false,
        basePath: false,
      },
      {
        source: "/time_space_survey",
        destination: "https://forms.gle/6ZmyhmsaenmscwHy7",
        permanent: false,
        basePath: false,
      },
      {
        source: "/crescent_town_survey",
        destination: "https://forms.gle/eCgAReBaat2B6Ytt5",
        permanent: false,
        basePath: false,
      },
      {
        source: "/99_howard_survey",
        destination: "https://forms.gle/89LRokJPGnQHCuog8",
        permanent: false,
        basePath: false,
      },
      {
        source: "/135_rose_survey",
        destination: "https://forms.gle/AekVgEoaX1Y5hWGr8",
        permanent: false,
        basePath: false,
      },
      {
        source: "/565_sherbourne_survey",
        destination: "https://forms.gle/9iFLLraGvAZSaKj28",
        permanent: false,
        basePath: false,
      },
      {
        source: "/670_parliament_survey",
        destination: "https://forms.gle/4tcathTTXDFEqLkE8",
        permanent: false,
        basePath: false,
      },
      {
        source: "/sherbourne_tenant_survey",
        destination: "https://forms.gle/yfzaxzWBFfAyzkcM9",
        permanent: false,
        basePath: false,
      },
      {
        source: "/7_crescent_pl_survey",
        destination: "https://forms.gle/4HJdm9mevX2sm6mPA",
        permanent: false,
        basePath: false,
      },
      {
        source: "/9_crescent_pl_survey",
        destination: "https://forms.gle/SGqAveagkpcEaEks9",
        permanent: false,
        basePath: false,
      },
      {
        source: "/11_crescent_pl_survey",
        destination: "https://forms.gle/UVUWwXzgDvrUgaUU8",
        permanent: false,
        basePath: false,
      },
      {
        source: "/570_bay_survey",
        destination: "https://forms.gle/fBqGyMaZmUSUVyDq6",
        permanent: false,
        basePath: false,
      },
      {
        source: "/55_gerrard_survey",
        destination: "https://forms.gle/SBsmgurAAN9CHjiV7",
        permanent: false,
        basePath: false,
      },
    ];
  },
};
