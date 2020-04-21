import React, { useState, useEffect } from 'react'
import Gravatar from 'react-gravatar'
import { Phone, Mail, Link, FileText } from 'react-feather'
import TimeAgo from 'react-timeago'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import { sheetId } from '../constants'
import { getData } from '../getSheets'
import { fromEntries } from '../utils'
import { Loader } from '../components/Loader'
import { Seekers, Seeker } from '../models'

import '../styles/job-seeker.scss'

const colors = {
  opts: ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light'],
  pick: i => {
    return colors.opts[Math.floor(Math.random() * colors.opts.length)]
  },
}

const renderSeeker = (s: Seeker, key: number) =>
  !s.approved ? null : (
    <div className="card mb-4 job-seeker" key={key}>
      <div className="card-header">
        <div className="row">
          <div className="col-md-9">
            <h4 className="name mb-0 mt-0">
              {s.firstname} {s.lastname}
            </h4>
          </div>
          <div className="col-md-3">
            {s.typeofworkcontractorparttimefulltimegig ? (
              <div className="seeking text-right">
                <strong>
                  Type of Work:
                  <span className="job-type">{s.typeofworkcontractorparttimefulltimegig}</span>
                </strong>
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-9">
            <div className="card-text">
              <p className="card-title">Overview:</p>
              <p className="">{s.describeyourskills}</p>
              <p className="card-title">Skills</p>
              <ul className="skills">
                {s.skills.split(',').map((skill, i) => (
                  <li key={i} id={'skill-' + i} className={'skill'}>
                    {skill}
                  </li>
                ))}
              </ul>
              <p className="card-title inline">Former Job Title:</p> {s.jobtitle}
            </div>
          </div>
          <div className="col-md-3">
            <ul className="links">
              <li className="email">
                <a href={'mailto:' + s.emailaddress} className="badge badge-primary">
                  Email
                </a>
              </li>
              {s.phonenumber ? (
                <li className="phone">
                  <a href={'tel:' + s.phonenumber} className="badge badge-success">
                    Call
                  </a>
                </li>
              ) : (
                ''
              )}
              {s.linkedinorportfoliourl ? (
                <li className="portfolio">
                  <a href={s.linkedinorportfoliourl} target="_blank" className="badge badge-info">
                    LinkedIn / Portfolio
                  </a>
                </li>
              ) : (
                ''
              )}
              {s.resumelink ? (
                <li className="resume">
                  <a href={s.resumelink} target="_blank" className="badge badge-warning">
                    Resume
                  </a>
                </li>
              ) : (
                ''
              )}
            </ul>
          </div>
        </div>
      </div>
      <div className="card-footer text-muted">
        <small>
          Joined <TimeAgo date={s.timestamp} />
        </small>
      </div>
    </div>
  )

export default () => {
  const [seekers, setSeekers] = useState<Seekers>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    getData<Seekers>(sheetId, o => {
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
      <Page className="container">
        <Container className="job-seekers">
          {isLoading ? <Loader /> : seekers.map((j, i) => renderSeeker(fromEntries(j), i))}
        </Container>
      </Page>
    </IndexLayout>
  )
}
