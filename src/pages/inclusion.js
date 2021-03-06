import React from 'react'
import { graphql } from 'gatsby'

import Layout from 'Components/layout'
import SEO from 'Components/seo'
import PillarTemplate from 'Components/pillars/template'
import PageTitle from 'Common/PageTitle'

export default props => (
  <Layout pageProps={props}>
    <SEO title="Inclusion" keywords={['san diego', 'tech', 'hub', 'pillar', 'inclusion']} />
    <PageTitle>
      Inclusion
    </PageTitle>
    <PillarTemplate data={props.data.inclusionJson} icon={props.data.inclusion} />
  </Layout>
)

export const query = graphql`
  query INCLUSION_QUERY {
    inclusionJson {
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
    inclusion: file(relativePath: { eq: "inclusion-page.png" }) {
      ...childSharp
    }
  }
`
