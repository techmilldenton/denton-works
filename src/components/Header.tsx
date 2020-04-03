import * as React from 'react'
import styled from '@emotion/styled'
// import { transparentize } from 'polished'
import { Link } from 'gatsby'

import logo from '../images/denton_works-logo.png'
import { heights, dimensions, colors } from '../styles/variables'
import Container from './Container'

const StyledHeader = styled.header`
  height: ${heights.header}px;
  padding: 0 ${dimensions.containerPadding}rem;
  background-color: ${colors.brand};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const LogoWrap = styled(Container)``

const TabsWrap = styled(Container)``

const HomepageLink = styled(Link)`
  color: ${colors.brandBlue};
  font-size: 1.5rem;
  font-weight: 600;

  &:hover,
  &:focus {
    text-decoration: none;
  }
`

interface HeaderProps {
  title: string
}

const Header: React.FC<HeaderProps> = () => (
  <StyledHeader>
    <LogoWrap>
      <Link to="/">
        <img src={logo} alt="denton works" />
      </Link>
    </LogoWrap>
    <TabsWrap>
      <HomepageLink to="/">Home</HomepageLink>
      <HomepageLink to="/job-listing/">Job Listing</HomepageLink>
      <HomepageLink to="/resources/">Resources</HomepageLink>
      <HomepageLink to="/contact/">Contact</HomepageLink>
    </TabsWrap>
  </StyledHeader>
)

export default Header
