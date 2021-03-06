import * as React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import 'modern-normalize'
import '../styles/normalize'

import Header from '../components/Header'
import LayoutRoot from '../components/LayoutRoot'
import LayoutMain from '../components/LayoutMain'

interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string
      description: string
      keywords: string
      image: string
      twitterUsername: string
      twitterCard: string
      siteUrl: string
    }
  }
}

const IndexLayout: React.FC = ({ children }) => (
  <StaticQuery
    query={graphql`
      query IndexLayoutQuery {
        site {
          siteMetadata {
            title
            description
            keywords
            image
            twitterUsername
            twitterCard
            siteUrl
          }
        }
      }
    `}
    render={(data: StaticQueryProps) => (
      <LayoutRoot>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: data.site.siteMetadata.description },
            { name: 'keywords', content: data.site.siteMetadata.keywords },
            {
              name: 'image',
              content: data.site.siteMetadata.siteUrl + data.site.siteMetadata.image,
            },
            { name: 'twitter:creator', content: data.site.siteMetadata.twitterUsername },
            { name: 'twitter:card', content: data.site.siteMetadata.twitterCard },
            { name: 'twitter:title', content: data.site.siteMetadata.title },
            { name: 'og:url', content: data.site.siteMetadata.siteUrl },
            { name: 'og:type', content: 'website' },
            { name: 'og:title', content: data.site.siteMetadata.title },
            { name: 'og:description', content: data.site.siteMetadata.description },
            {
              name: 'og:image',
              content: data.site.siteMetadata.siteUrl + data.site.siteMetadata.image,
            },
          ]}
        >
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
            crossorigin="anonymous"
          />
        </Helmet>
        <Header title={data.site.siteMetadata.title} />
        <LayoutMain>{children}</LayoutMain>
      </LayoutRoot>
    )}
  />
)

export default IndexLayout
