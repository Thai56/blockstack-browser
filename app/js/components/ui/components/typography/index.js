import styled, { css } from 'styled-components'
import { spacing } from '@ui/common/constants'

const genericStyles = css`
  ${({ padding }) =>
    padding &&
    css`
      padding: ${padding};
    `};
  ${({ overflow }) =>
    overflow &&
    css`
      max-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    `};
`

const Type = styled.div``

const p = styled.p`
  line-height: 24px;
  font-size: 16px;
  color: ${({ color }) => color || 'rgba(39, 16, 51, 0.7)'};
  padding: 0;
  margin: 0;
  strong {
    font-weight: 500;
    color: ${({ color }) => color || 'rgba(39, 16, 51, 0.9)'};
  }
  ${genericStyles};
  & + & {
    margin-top: ${spacing.base};
  }
`

const a = styled.a`
  line-height: 24px;
  font-size: 16px;
  color: ${({ color }) => color || 'rgba(39, 16, 51, 0.7)'};
  padding: 0;
  margin: 0;
  strong {
    font-weight: 500;
    color: ${({ color }) => color || 'rgba(39, 16, 51, 0.9)'};
  }
  ${genericStyles};
  & + & {
    margin-top: ${spacing.base};
  }
  text-decoration: underline !important;
  &:hover {
    cursor: pointer;
  }
`

const Small = styled.span`
  line-height: 24px;
  display: inline-block;
  font-size: 14px;
  color: rgba(39, 15, 52, 0.7);
  ${genericStyles};
  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `};
`

const h1 = styled.h1`
  font-weight: 300;
  line-height: 38px;
  font-size: 28px;
  color: #271033;
  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `};

  ${genericStyles};

  margin: 0;
`
const h2 = styled.h2`
  font-weight: 300;
  line-height: 34px;
  font-size: 24px;
  color: #271033;
  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `};

  ${genericStyles};

  margin: 0;
`

const h3 = styled.h3`
  font-style: normal;
  font-weight: normal;
  line-height: 24px;
  font-size: 18px;
  color: #271033;
  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `};
  ${({ light }) =>
    light &&
    css`
      color: rgba(39, 15, 52, 0.5);
    `};

  ${genericStyles};

  margin: 0;
`
const h5 = styled.h5`
  font-style: normal;
  font-weight: 500;
  line-height: 23px;
  font-size: 14px;
  text-align: right;

  color: rgba(39, 15, 52, 0.4);

  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `};

  ${genericStyles};

  margin: 0;
`

const h4 = styled.h4`
  font-style: normal;
  font-weight: 600;
  line-height: 23px;
  font-size: 14px;

  color: rgba(39, 15, 52, 0.85);

  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `};

  ${genericStyles};

  margin: 0;
`

Type.p = p
Type.a = a
Type.small = Small
Type.h1 = h1
Type.h2 = h2
Type.h3 = h3
Type.h4 = h4
Type.h5 = h5

export { Type }
