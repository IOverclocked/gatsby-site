import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import { Layout } from 'components/layout'

export default function Home() {
  const data = useStaticQuery(graphql`
    query SiteInfo {
      site {
        siteMetadata {
          copyright
          description
          title
        }
      }
    }
  `)

  const { title, description } = data.site.siteMetadata

  return (
    <Layout>
      <div>{title}</div>
      <div>{description}</div>
      <img src="/obito.jpg" alt="obito" />
    </Layout>
  )
}
