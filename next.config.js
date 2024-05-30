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
    ];
  },
};
