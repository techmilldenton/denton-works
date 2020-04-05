import React, { useEffect, useState } from 'react'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import { sheetId } from '../constants'
import { getData } from '../getSheets'
import { fromEntries } from '../utils'

type Job = {
  id: string
  timestamp: string
  companyname: string
  address: string
  websiteurl: string
  dentonchamberofcommercemember: string
  emailaddress: string
  phonenumber: string
  jobtitle: string
  jobdescription: string
  typeofwork: string
}

type Jobs = Array<Array<[string, string]>>

const renderJob = (j: Job, key: number) => (
  <div key={key}>
    <div>Name: {j.companyname}</div>
    <div>Address: {j.address}</div>
    <div>Email: {j.emailaddress}</div>
    <div>Description: {j.jobdescription}</div>
    {j.dentonchamberofcommercemember && <div>Chamber: ✅</div>}
    <div>Job Title: {j.jobtitle}</div>
    <div>Phone: {j.phonenumber ? j.phonenumber : <>No ☎️ Provided!</>}</div>
    {/* <div>timestamp: {j.timestamp}</div> */}
    <div>Type of Work: {j.typeofwork}</div>
    {j.websiteurl && (
      <div>
        Website: <a href={j.websiteurl}>{j.websiteurl}</a>
      </div>
    )}
    <br />
    <br />
  </div>
)

export default () => {
  const [jobs, setJobs] = useState<Jobs>([])

  useEffect(() => {
    // jobs.map(j => j.map(s => s))
    getData(sheetId, o => {
      o.forEach(e => {
        if (e.title === 'jobs') {
          setJobs(e.entries)
        }
      })
    })
  }, [])

  return (
    <IndexLayout>
      <Page>
        <h1>Jobs</h1>
        {/* {JSON.stringify(jobs)} */}
        <Container>{jobs.map((j, i) => renderJob(fromEntries(j as never) as Job, i))}</Container>
      </Page>
      s
    </IndexLayout>
  )
}
