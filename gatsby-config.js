module.exports = {
  siteMetadata: {
    title: "My Gatsby Site",
  },
  plugins: ["gatsby-plugin-react-helmet", {
      resolve: `gatsby-plugin-percy`,
      options: {
        // example options:
        // files: [`dir/*.html`],
        // ignore: [`ignore/*.html`],
        // config: `config/.percy.yaml`,
      }
    }]
};
