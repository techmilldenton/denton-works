import { dimensions } from './variables'
import { css } from '@emotion/core'

export const getEmSize = (size: number) => size / dimensions.fontSize.regular

export const noUnderline = css`
  &:hover,
  &:focus {
    text-decoration: none;
  }
`
