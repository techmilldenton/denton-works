import * as React from 'react'
import styled from '@emotion/styled'
import { colors } from '../styles/variables'

const StyledLayoutMain = styled.main`
  background: ${colors.white};
  display: flex;
  flex-direction: column;
  flex: 1;
`

interface LayoutMainProps {
  className?: string
}

const LayoutMain: React.FC<LayoutMainProps> = ({ children, className }) => (
  <StyledLayoutMain className={className}>{children}</StyledLayoutMain>
)

export default LayoutMain
