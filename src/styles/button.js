import styled from 'styled-components'

import media from '@styles/media'
import { pxToRem } from '@utils/css'

const Button = styled.button`
  border: 1px solid ${props => props.theme.colors.orange};
  background: transparent;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.5s;

  &.full {
    background: ${props => props.theme.colors.orange};
  }

  &.hide {
    opacity: 1;
  }

  ${media.lessThan('xsmall')`
    margin-top: 10px;
    border-radius: 16.5px;
    height: 33px;
    width: 161px;
    font-size: ${pxToRem(15)};
  `}

  ${media.between('xsmall', 'small')`
    margin-top: 15px;
    border-radius: 19.5px;
    height: 39px;
    width: 200px;
    font-size: ${pxToRem(18)};
  `}

  ${media.between('small', 'medium')`
    margin-top: 20px;
    border-radius: 22px;
    height: 44px;
    width: 250px;
    font-size: ${pxToRem(21)};
  `}

  ${media.greaterThan('medium')`
    margin-top: 25px;
    border-radius: 25px;
    height: 50px;
    width: 300px;
    font-size: ${pxToRem(25)};
  `}
`

export default Button
