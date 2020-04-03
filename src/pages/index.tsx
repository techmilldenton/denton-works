import * as React from 'react'

import image from '../images/denton_works-illustration1.png'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import styled from '@emotion/styled'
import { fonts, dimensions } from '../styles/variables'

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

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <Inner>
          <Copy>
            <Slogan>{slogan}</Slogan>
            <Info>{info}</Info>
          </Copy>
          <div>
            <img src={image} alt="denton works" />
          </div>
        </Inner>
      </Container>
    </Page>
  </IndexLayout>
)

export default IndexPage
