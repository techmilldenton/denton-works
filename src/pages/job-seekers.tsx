import React, { FC } from 'react'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import { useStaticQuery, graphql } from 'gatsby'

type Candidate = {
  describeyourskills: string
  emailaddress: string
  firstname: string
  id: string
  jobtitle: string
  lastname: string
  linkedinorportfoliourl: string
  phonenumber: string
  resumelink: string
  skills: string
  timestamp: string
  typeofworkcontractorparttimefulltimegig: string
}

interface CandidateQuery {
  allGoogleSheet: {
    nodes: Array<{
      candidates: Array<Candidate>
    }>
  }
}

const JobSeeker: FC<Candidate> = c => (
  <div key={c.id}>
    {c.firstname}
    <br />
    {c.id}
  </div>
)

export default () => {
  const data: CandidateQuery = useStaticQuery(graphql`
    query Candidates {
      allGoogleSheet {
        nodes {
          candidates {
            describeyourskills
            emailaddress
            firstname
            id
            jobtitle
            lastname
            linkedinorportfoliourl
            phonenumber
            resumelink
            skills
            timestamp
            typeofworkcontractorparttimefulltimegig
          }
        }
      }
    }
  `)
  const nodes = data.allGoogleSheet.nodes
  return (
    <IndexLayout>
      <Page>
        <Container>{nodes.map(n => n.candidates.map(JobSeeker))}</Container>
      </Page>
    </IndexLayout>
  )
}
