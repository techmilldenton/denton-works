import React, { useEffect, useState } from 'react'
import TimeAgo from 'react-timeago'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import Markdown from 'markdown-to-jsx'
import { MapPin, Link } from 'react-feather'

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

const renderJob = (j: Job, key: number) =>
  j.approved !== 'TRUE' ? null : (
    <div key={key} className={'card mb-4 job job-' + key}>
      {console.log(j)}
      <div className="card-header">
        <div className="row">
          <div className="col-md-4">
            <div className="time">
              Added <TimeAgo date={j.timestamp} />
            </div>
          </div>
          <div className="col-md-8">
            <div className="category text-right">{j.jobcategory}</div>
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-9">
            <h4 className="card-title">
              {j.jobtitle}
              <span className="job-type badge badge-primary ml-2">{j.typeofwork}</span>
            </h4>
            <p className="description">
              <Markdown>{j.jobdescription.replace(/(\r\n|\n|\r)/gm, '<br/>')}</Markdown>
            </p>
          </div>
          <div className="col-md-3">
            <div className="contact-wrapper">
              <a
                href={'mailto:' + j.emailaddress + '?subject=' + j.jobtitle}
                className="btn btn-block btn-success mb-1"
              >
                Contact
              </a>
              {j.phonenumber ? (
                <a className="phone btn btn-block btn-primary mb-1" href={'tel:' + j.phonenumber}>
                  Call
                </a>
              ) : (
                ''
              )}
              {j.jobpostlink ? (
                <OutboundLink
                  href={j.jobpostlink}
                  target="_blank"
                  className="post-link btn btn-block btn-warning mb-1"
                >
                  Online Link
                </OutboundLink>
              ) : (
                ''
              )}
            </div>
            <div className="rate-wrapper text-center py-2">
              <strong className="rate btn btn-block btn-default">{j.jobrate}</strong>
            </div>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <div className="row">
          <div className="company col-md-8">
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
          </div>
          <div className="links col-md-4">
            <div className="btn-group float-right" role="group" aria-label="Company Links">
              {j.websiteurl ? (
                <OutboundLink target="_blank" href={j.websiteurl} className="btn">
                  <Link /> Website
                </OutboundLink>
              ) : (
                ''
              )}

              <OutboundLink
                target="_blank"
                className="btn"
                href={
                  'https://www.google.com/maps/search/?api=1&query=' +
                  j.companyname.replace(/\s/g, '+') +
                  '+' +
                  j.address.replace(/\s/g, '+')
                }
              >
                <MapPin /> Address
              </OutboundLink>
            </div>
          </div>
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
