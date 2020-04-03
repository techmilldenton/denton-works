import * as React from 'react'

import image from '../images/denton_works-illustration1.png'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import styled from '@emotion/styled'
import { fonts, dimensions, colors } from '../styles/variables'

const { headingSizes, fontSize } = dimensions

const slogan = 'Connecting employers and job seekers in the Denton community'

const Slogan = styled.div`
  font-family: ${fonts.serif};
  font-size: ${headingSizes.h1}rem;
`

const info = 'Find or list full-time, part-time, or project-based work available now.'

const Info = styled.div`
  font-size: ${headingSizes.h2}rem;
`

const Copy = styled.div`
  display: flex;
  flex-direction: column;
`

const Inner = styled.div`
  display: flex;
  flex-direction: row;
`

const CallToAction = styled.div`
  align-items: center;
  background-color: ${colors.brandGreen};
  border-radius: 12px;
  color: ${colors.white};
  display: flex;
  font-size: ${headingSizes.h3}rem;
  height: 80px;
  justify-content: center;
  padding: 12px;

  &:first-of-type {
    margin-right: 12px;
  }
`

const CallToActionWrap = styled.div`
  display: flex;
  flex-direction: row;
`

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Inner>
        <Copy>
          <Slogan>{slogan}</Slogan>
          <Info>{info}</Info>
          <CallToActionWrap>
            <CallToAction>Post a Job</CallToAction>
            <CallToAction>Upload Your Qualifications</CallToAction>
          </CallToActionWrap>
        </Copy>
        <div>
          <img src={image} alt="denton works" />
        </div>
      </Inner>
    </Page>
  </IndexLayout>
)

export default IndexPage
