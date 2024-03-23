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
    ];
  },
};
