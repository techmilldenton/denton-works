import React, { useState, useEffect } from 'react'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import { sheetId } from '../constants'
import { getData } from '../getSheets'
import { fromEntries } from '../utils'
import { Loader } from '../components/Loader'

const renderSeeker = (s: Seeker, key: number) => (
  <div key={key}>
    <div>describeyourskills: {s.describeyourskills}</div>
    <div>emailaddress: {s.emailaddress}</div>
    <div>firstname: {s.firstname}</div>
    <div>id: {s.id}</div>
    <div>jobtitle: {s.jobtitle}</div>
    <div>lastname: {s.lastname}</div>
    <div>linkedinorportfoliourl: {s.linkedinorportfoliourl}</div>
    <div>phonenumber: {s.phonenumber}</div>
    <div>resumelink: {s.resumelink}</div>
    <div>skills: {s.skills}</div>
    <div>timestamp: {s.timestamp}</div>
    <div>typeofworkcontractorparttimefulltimegig: {s.typeofworkcontractorparttimefulltimegig}</div>
    <br />
    <br />
  </div>
)

export default () => {
  const [seekers, setSeekers] = useState<Seekers>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    getData(sheetId, o => {
      o.forEach(e => {
        if (e.title === 'candidates') {
          setSeekers(e.entries)
        }
      })
      setIsLoading(false)
    })
  }, [])
  return (
    <IndexLayout>
      <Page>
        <Container>
          {isLoading ? (
            <Loader />
          ) : (
            seekers.map((j, i) => renderSeeker(fromEntries(j as never) as Seeker, i))
          )}
        </Container>
      </Page>
    </IndexLayout>
  )
}

type Seekers = Array<Array<[string, string]>>

type Seeker = {
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
