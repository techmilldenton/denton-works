import * as React from 'react'
import styled from '@emotion/styled'

import { dimensions, fonts } from '../styles/variables'

const StyledPage = styled.div`
  display: block;
  flex: 1;
  font-family: ${fonts.sansSerif};
  position: relative;
  padding: ${dimensions.containerPadding}rem;
  margin-bottom: 3rem;
`

interface PageProps {
  className?: string
}

const Page: React.FC<PageProps> = ({ children, className }) => (
  <StyledPage className={className}>{children}</StyledPage>
)

export default Page
