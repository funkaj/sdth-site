import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import PillarTemplate from '../components/pillars/template'

export default props => (
  <Layout pageProps={props}>
    <SEO title="Community" keywords={['san diego', 'tech', 'hub', 'community']} />
    <PillarTemplate 
      data={props.data.communityJson}
      icon={props.data.community}
    />
  </Layout>
)

export const query = graphql`
  query COMMUNITY_QUERY {
    communityJson {
      pageTitle
      purpose
      goals
      challenge
      leads {
        name
        email
        bio
        photo
      }
    }
    community: file(relativePath: { eq: "community-page.png" }) {
      ...childSharp
    }
  }
`