import * as React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

import background from '../images/denton_works-illustration1.png'

import Page from '../components/Page'
import IndexLayout from '../layouts'
import { fonts, dimensions, colors } from '../styles/variables'
import { companyProfileUrl, jobSeekerFormUrl } from '../constants'
import { noUnderline } from '../styles/mixins'

const { headingSizes } = dimensions

const slogan = 'Connecting employers and job seekers in the Denton community'

const Slogan = styled.div`
  font-family: ${fonts.serif};
  font-size: ${headingSizes.super}rem;
  font-weight: 600;
  color: ${colors.brandBlue};
`

const info = 'Find or list full-time, part-time,\n or project-based work available now.'

const Info = styled.div`
  font-size: ${headingSizes.h3}rem;
  color: ${colors.gray.calm};
`

const Copy = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 30px;
  max-width: 36rem;
  max-height: 22rem;

  @media screen {
    margin-top: 5rem;
    margin-left: calc(15vw - 4rem);
  }
`

const Inner = styled.div`
  background-image: url(${background});
  background-position-x: right;
  background-position-y: 2rem;
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  flex-direction: row;
  flex-grow: 1;
`

const CallToAction = styled.a`
  ${noUnderline}
  align-items: center;
  background-color: ${colors.brandGreen};
  border-radius: 12px;
  color: ${colors.white};
  display: flex;
  font-size: ${headingSizes.h3}rem;
  height: 80px;
  justify-content: center;
  padding: 1.5rem;

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
    <Page
      css={css`
        padding: 0;
        flex-direction: column;
        display: flex;
        justify-content: space-between;
      `}
    >
      <Inner>
        <Copy>
          <Slogan>{slogan}</Slogan>
          <Info>{info}</Info>
          <CallToActionWrap>
            <CallToAction href={companyProfileUrl}>Post a Job</CallToAction>
            <CallToAction href={jobSeekerFormUrl}>Upload Your Qualifications</CallToAction>
          </CallToActionWrap>
        </Copy>
        {/* <div>
          <img src={image} alt="denton works" />
        </div> */}
      </Inner>
    </Page>
  </IndexLayout>
)

export default IndexPage
