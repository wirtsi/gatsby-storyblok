module.exports = {
  siteMetadata: {
    title: "Gatsby Default Starter"
  },
  plugins: [
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: "gatsby-source-storyblok",
      options: {
        accessToken: "NoQEMh9zMri0Y1FPBTo5mQtt",
        homeSlug: "home",
        version: process.env.NODE_ENV === "production" ? "published" : "draft"
      }
    }
  ]
};
