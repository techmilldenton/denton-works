import React, { useEffect, useState } from 'react'
import TimeAgo from 'react-timeago'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import { sheetId } from '../constants'
import { getData } from '../getSheets'
import { fromEntries } from '../utils'
import { Loader } from '../components/Loader'
import '../styles/job.scss'

const renderJob = (j: Job, key: number) => (
  <div key={key} className={'job job-' + key}>
    <div className="top">
      <div className="time">
        <TimeAgo date={j.timestamp} />
      </div>
      <div className="category">{j.jobcategory}</div>
    </div>
    <div className="middle">
      <div className="col-left">
        <h4 className="title">
          {j.jobtitle}
          <span className="type">{j.typeofwork}</span>
        </h4>
        <div className="description">{j.jobdescription}</div>
      </div>
      <div className="col-right">
        <div className="contact-wrapper">
          <a href={'mailto:' + j.emailaddress + '?subject=' + j.jobtitle} className="btn">
            Contact
          </a>
        </div>
        <div className="rate-wrapper">
          <span className="rate">{j.jobrate}</span>
        </div>
        <div className="alt-icons">
          <div className="phone">
            <div>Phone: {j.phonenumber ? j.phonenumber : <>No ☎️ Provided!</>}</div>
          </div>
          {j.jobpostlink ? (
            <div className="post-link">
              <a href={j.jobpostlink}>Online Link</a>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
    <div className="bottom">
      <div className="company">
        <div className="name">
          {j.companyname}
          {j.dentonchamberofcommercemember && (
            <div className="coc">
              <img
                src="https://cdn.jsdelivr.net/gh/techmilldenton/denton-works@master/src/images/dcoc-logo.svg"
                alt="Denton Chamber of Commerce Member"
                title="Denton Chamber of Commerce Member"
              ></img>
            </div>
          )}
        </div>
        <div className="links">
          {j.websiteurl ? (
            <a target="_blank" href={j.websiteurl}>
              🔗
            </a>
          ) : (
            ''
          )}
        </div>
      </div>
      <div className="address">
        <a
          target="_blank"
          href={
            'https://www.google.com/maps/search/?api=1&query=' +
            j.companyname.replace(/\s/g, '+') +
            '+' +
            j.address.replace(/\s/g, '+')
          }
        >
          {j.address}
        </a>
      </div>
    </div>
  </div>
)

export default () => {
  const [jobs, setJobs] = useState<Jobs>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)

    getData(sheetId, o => {
      o.forEach(e => {
        if (e.title === 'jobs') {
          setJobs(e.entries)
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
            jobs.map((j, i) => renderJob(fromEntries(j as never) as Job, i))
          )}
        </Container>
      </Page>
    </IndexLayout>
  )
}

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
  jobcategory: string
  jobrate: string
  jobpostlink: string
}

type Jobs = Array<Array<[string, string]>>
