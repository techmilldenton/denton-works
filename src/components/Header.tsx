import * as React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
// import { transparentize } from 'polished'

import logo from '../images/denton_works-logo.png'
import Container from './Container'
import { dimensions, colors, fonts } from '../styles/variables'
import { noUnderline } from '../styles/mixins'

const StyledHeader = styled.header`
  height: 100px;
  padding: 0 ${dimensions.containerPadding}rem;
  background-color: ${colors.brand};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 1025px) {
    flex-direction: column;
    justify-content: space-around;
    padding: 2rem 1rem;
    height: 180px;
  }
`

const Logo = styled.img`
  width: 400px;
`

const HomepageLink = styled(Link)`
  ${noUnderline}
  color: ${colors.brandBlue};
  cursor: pointer;
  font-family: ${fonts.sansSerif};
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0 12px;

  @media only screen and (max-width: 1025px) {
    font-size: 1.125rem;
    margin: 0 4px;
  }
`

const HeaderLink = ({ to, text }: { to: string; text: string }) => (
  <HomepageLink
    to={to}
    activeStyle={{
      textDecoration: 'underline',
      textDecorationColor: colors.brandGreen,
    }} /* partiallyActive={true} */
  >
    {text}
  </HomepageLink>
)

interface HeaderProps {
  title: string
}

export const Header: React.FC<HeaderProps> = () => (
  <StyledHeader>
    <Container>
      <Link to="/">
        <Logo src={logo} alt="denton works" />
      </Link>
    </Container>
    <Container>
      <HeaderLink to="/jobs/" text="Jobs" />
      <HeaderLink to="/job-seekers/" text="Job Seekers" />
      <HeaderLink to="/resources/" text="Resources" />
      <HeaderLink to="/about/" text="About" />
    </Container>
  </StyledHeader>
)

export default Header
