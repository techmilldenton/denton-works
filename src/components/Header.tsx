import * as React from 'react'
import styled from '@emotion/styled'
// import { transparentize } from 'polished'
import { Link } from 'gatsby'

import logo from '../images/denton_works-logo.png'
import { heights, dimensions, colors, fonts } from '../styles/variables'
import Container from './Container'
import { companyFormUrl, jobSeekerFormUrl } from '../constants'
import { noUnderline } from '../styles/mixins'

const { headingSizes } = dimensions

const StyledHeader = styled.header`
  height: ${heights.header}px;
  padding: 0 ${dimensions.containerPadding}rem;
  background-color: ${colors.brand};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  /**
   * iPhone X break
   */
  @media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {
    height: 200px;
    flex-direction: column;
    justify-content: space-around;
  }
`

const LogoWrap = styled(Container)``

const Logo = styled.img`
  width: 400px;
`

const TabsWrap = styled(Container)``

const TabButtonWrap = styled(Container)`
  display: flex;
  flex-direction: row;
`

const HomepageLink = styled(Link)`
  ${noUnderline}
  color: ${colors.brandBlue};
  cursor: pointer;
  font-family: ${fonts.sansSerif};
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0 12px;

  /**
   * iPhone X break
   */
  @media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {
    font-size: 1rem;
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

const SubButtons = styled.a`
  ${noUnderline}
  align-items: center;
  background-color: ${colors.white};
  border-radius: 12px;
  color: ${colors.brandGreen};
  display: flex;
  font-size: ${headingSizes.h4}rem;
  height: 30px;
  justify-content: center;
  padding: 12px;

  &:first-of-type {
    margin-right: 12px;
  }
`

interface HeaderProps {
  title: string
}

export const Header: React.FC<HeaderProps> = () => (
  <StyledHeader>
    <LogoWrap>
      <Link to="/">
        <Logo src={logo} alt="denton works" />
      </Link>
    </LogoWrap>
    <TabsWrap>
      <HeaderLink to="/" text="Home" />
      <HeaderLink to="/job-seekers/" text="Job Seekers" />
      <HeaderLink to="/jobs/" text="Jobs" />
      <HeaderLink to="/resources/" text="Resources" />
      <HeaderLink to="/contact/" text="Contact" />
    </TabsWrap>
    <TabButtonWrap>
      <SubButtons href={companyFormUrl} target="blank">
        Employers
      </SubButtons>
      <SubButtons href={jobSeekerFormUrl} target="blank">
        Candidates
      </SubButtons>
    </TabButtonWrap>
  </StyledHeader>
)

export default Header
