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
  cursor: pointer;

  /* &:hover,
  &:focus {
    text-decoration: none;
  } */
`

const HeaderLink = ({ to, text }: { to: string; text: string }) => (
  <HomepageLink to={to} activeStyle={{ color: 'red' }} /* partiallyActive={true} */>
    {text}
  </HomepageLink>
)

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
      <HeaderLink to="/" text="Home" />
      <HeaderLink to="/job-listing/" text="Job Listing" />
      <HeaderLink to="/resources/" text="Resources" />
      <HeaderLink to="/contact/" text="Contact" />
    </TabsWrap>
  </StyledHeader>
)

export default Header
