import * as React from 'react'
import { Global, css } from '@emotion/core'
import styled from '@emotion/styled'
import normalize from '../styles/normalize'
import { colors } from '../styles/variables'

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
