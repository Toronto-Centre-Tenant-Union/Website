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
        source: "/water_survey",
        destination: "https://forms.gle/EeMcHRrA5Mh8Z3L56",
        permanent: false,
        basePath: false,
      },
      {
        source: "/water_meeting",
        destination: "https://forms.gle/SPXewmdCq4YyKXKo7",
        permanent: false,
        basePath: false,
      },
      {
        source: "/demos_survey",
        destination: "https://forms.gle/jjyq4sCM5THg59AZA",
        permanent: false,
        basePath: false,
      },
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
    ];
  },
};
