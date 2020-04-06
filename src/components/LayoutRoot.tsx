import * as React from 'react'
import { Global, css } from '@emotion/core'
import styled from '@emotion/styled'
import normalize from '../styles/normalize'
import { colors } from '../styles/variables'
import background from '../images/denton_works-illustration1.png'

const StyledLayoutRoot = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 80px);
`

const globalStyles = css`
  ${css(normalize)}

  body {
    background: ${colors.brand};
  }

  a {
    color: ${colors.brandBlue};
  }

  .___gatsby {
    overflow: scroll;
  }
`

const BottomBar = styled.div`
  background-color: ${colors.brandBlue};
  height: 5rem;

  /**
   * iPhone X break
   */
  @media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {
    background: url(${background});
    background-color: ${colors.brandBlue};
    background-size: contain;
    background-repeat: no-repeat;
    background-position-x: right;
    background-position-y: 6px;
  }
`

interface LayoutRootProps {
  className?: string
}

export const LayoutRoot: React.FC<LayoutRootProps> = ({ children, className }) => (
  <>
    <Global styles={globalStyles} />
    <StyledLayoutRoot className={className}>{children}</StyledLayoutRoot>
    <BottomBar />
  </>
)

export default LayoutRoot
