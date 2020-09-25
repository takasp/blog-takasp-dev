import React, { Fragment } from "react"
import { css, Styled } from "theme-ui"

interface SocialLink {
  name: string
  url: string
}

interface SocialLinks {
  socialLinks: SocialLink[]
}

const Footer: React.FC<SocialLinks> = ({ socialLinks }) => (
  <footer
    css={css({
      mt: 4,
      pt: 3,
    })}
  >
    Copyright © {new Date().getFullYear()} takasp, Powered by
    {` `}
    <Styled.a href="https://www.gatsbyjs.org">Gatsby</Styled.a>
    {` `}&bull;{` `}
    {socialLinks
      ? socialLinks.map((platform, i, arr) => (
          <Fragment key={platform.url}>
            <Styled.a
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {platform.name}
            </Styled.a>
            {arr.length - 1 !== i && (
              <Fragment>
                {` `}&bull;{` `}
              </Fragment>
            )}
          </Fragment>
        ))
      : null}
    <p>This site uses Google Analytics.</p>
  </footer>
)
export default Footer
