import React, { useEffect, useState } from 'react'
import TimeAgo from 'react-timeago'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import { sheetId } from '../constants'
import { getData } from '../getSheets'
import { fromEntries } from '../utils'
import { Loader } from '../components/Loader'
import { Job } from '../models'

import '../styles/job.scss'

type Jobs = Array<Array<[keyof Job, string]>>

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
        <div className="contact-wrapper row1">
          <a href={'mailto:' + j.emailaddress + '?subject=' + j.jobtitle} className="btn">
            Contact
          </a>
        </div>
        <div className="rate-wrapper row1">
          <span className="rate">{j.jobrate}</span>
        </div>
        <div className="alt-icons row2">
          {j.phonenumber ? (
            <a className="phone btn secondary" href={'tel:' + j.phonenumber}>
              Call
            </a>
          ) : (
            ''
          )}
          {j.jobpostlink ? (
            <OutboundLink href={j.jobpostlink} target="_blank" className="post-link btn tertiary">
              Online Link
            </OutboundLink>
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
            <OutboundLink target="_blank" href={j.websiteurl}>
              🔗
            </OutboundLink>
          ) : (
            ''
          )}
        </div>
      </div>
      <div className="address">
        <OutboundLink
          target="_blank"
          href={
            'https://www.google.com/maps/search/?api=1&query=' +
            j.companyname.replace(/\s/g, '+') +
            '+' +
            j.address.replace(/\s/g, '+')
          }
        >
          {j.address}
        </OutboundLink>
      </div>
    </div>
  </div>
)

export default () => {
  const [jobs, setJobs] = useState<Jobs>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)

    getData<Jobs>(sheetId, o => {
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
          {isLoading ? <Loader /> : jobs.map((j, i) => renderJob(fromEntries(j), i))}
        </Container>
      </Page>
    </IndexLayout>
  )
}
