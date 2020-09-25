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
