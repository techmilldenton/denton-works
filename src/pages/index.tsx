import * as React from 'react'

import background from '../images/denton_works-illustration1.png'

import Page from '../components/Page'
import IndexLayout from '../layouts'
import styled from '@emotion/styled'
import { fonts, dimensions, colors } from '../styles/variables'
import { css } from '@emotion/core'

const { headingSizes } = dimensions

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
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 30px;
  max-width: 600px;

  @media screen {
    margin-top: 5rem;
    margin-left: 5rem;
  }
`

const Inner = styled.div`
  /* display: flex;
  flex-direction: row;

  @media screen {
    max-width: 40%;
  } */
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
        background-image: url(${background});
        background-origin: border-box;
        background-repeat: no-repeat;
        background-size: 50vw;
        background-position-x: right;
      `}
    >
      <Inner>
        <Copy>
          <Slogan>{slogan}</Slogan>
          <Info>{info}</Info>
          <CallToActionWrap>
            <CallToAction>Post a Job</CallToAction>
            <CallToAction>Upload Your Qualifications</CallToAction>
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
