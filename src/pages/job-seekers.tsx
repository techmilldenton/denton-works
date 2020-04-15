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

import '../styles/simple-grid.scss'
import '../styles/job-seeker.scss'

const renderSeeker = (s: Seeker, key: number) =>
  !s.approved ? null : (
    <div className={'col-4 job-seeker job-seeker-' + key} key={key}>
      <div className="top ">
        <div className="joined">
          Joined <TimeAgo date={s.timestamp} />
        </div>
        {s.typeofworkcontractorparttimefulltimegig ? (
          <div className="seeking">
            <span className="job-type">Seeking {s.typeofworkcontractorparttimefulltimegig}</span>
          </div>
        ) : (
          ''
        )}
      </div>
      <div className="header">
        <div className="image">
          <Gravatar email={s.emailaddress} size={125} />
        </div>
        <div className="name">
          {s.firstname} {s.lastname}
        </div>
        <div className="title">
          <small>{s.jobtitle}</small>
        </div>
      </div>
      <ul className="links">
        <li className="email">
          <a href={'mailto:' + s.emailaddress}>
            <Mail />
          </a>
        </li>
        {s.phonenumber ? (
          <li className="phone">
            <a href={'tel:' + s.phonenumber}>
              <Phone />
            </a>
          </li>
        ) : (
          ''
        )}
        {s.linkedinorportfoliourl ? (
          <li className="portfolio">
            <a href={s.linkedinorportfoliourl} target="_blank">
              <Link />
            </a>
          </li>
        ) : (
          ''
        )}
        {s.resumelink ? (
          <li className="resume">
            <a href={s.resumelink} target="_blank">
              <FileText />
            </a>
          </li>
        ) : (
          ''
        )}
      </ul>
      <div className="content">{s.describeyourskills}</div>
      <div className="skills">{s.skills}</div>
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
      <Page>
        <Container className="job-seekers row">
          {isLoading ? <Loader /> : seekers.map((j, i) => renderSeeker(fromEntries(j), i))}
        </Container>
      </Page>
    </IndexLayout>
  )
}
