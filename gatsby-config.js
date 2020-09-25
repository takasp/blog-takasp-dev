module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
    {
      resolve: "gatsby-plugin-graphql-codegen",
      options: {
        fileName: `types/graphql-types.d.ts`,
        codegenConfig: { maybeValue: "T | undefined" },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `takasp's blog`,
    author: `takasp`,
    description: `takasp's daily blog`,
    social: [
      {
        name: `Twitter`,
        url: `https://twitter.com/takasp_2350`,
      },
      {
        name: `GitHub`,
        url: `https://github.com/takasp`,
      },
    ],
  },
}
