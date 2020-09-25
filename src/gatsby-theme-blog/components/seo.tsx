import React from "react"
import Helmet, { HelmetProps } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { SeoQuery } from "../../../types/graphql-types"

interface SEO {
  title: HelmetProps["title"]
  lang?: string
  meta?: HelmetProps["meta"]
  keywords?: string[]
  description?: string
  imageSource?: string
  imageAlt?: string
}

function SEO({
  description,
  lang = "ja",
  meta = [],
  title,
  imageSource,
  imageAlt,
}: SEO) {
  const { site }: SeoQuery = useStaticQuery(
    graphql`
      query Seo {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  )

  const metaDescription = description || site?.siteMetadata?.description
  const image = imageSource
    ? `${site?.siteMetadata?.siteUrl}${imageSource}`
    : undefined
  const imageAltText = imageAlt || metaDescription

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site?.siteMetadata?.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:creator`,
          content: site?.siteMetadata?.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        ...meta,
      ].concat(
        imageSource
          ? [
              {
                name: `og:image`,
                content: image,
              },
              {
                name: `og:image:alt`,
                content: imageAltText,
              },
              {
                name: `twitter:image`,
                content: image,
              },
              {
                name: `twitter:image:alt`,
                content: imageAltText,
              },
              {
                name: `twitter:card`,
                content: `summary_large_image`,
              },
            ]
          : [
              {
                name: `twitter:card`,
                content: `summary`,
              },
            ]
      )}
    />
  )
}

export default SEO
