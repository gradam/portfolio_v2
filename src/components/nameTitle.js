import React from 'react'
import styled from 'styled-components'

import media from '@styles/media'
import { OrangeText, WhiteText } from '@styles/span'
import { pxToRem } from '@utils/css'

const TitleText = styled.h1`
  margin-top: 0;

  ${media.lessThan('xsmall')`
    font-size: ${pxToRem(32)};
    padding-top: 20px;
  `}

  ${media.between('xsmall', 'small')`
    font-size: ${pxToRem(48)};
    padding-top: 30px;
  `}

  ${media.between('small', 'medium')`
    font-size: ${pxToRem(72)};
    padding-top: 40px;
  `}

  ${media.greaterThan('medium')`
    font-size: ${pxToRem(105)};
    padding-top: 50px;
  `}
`

const NameTitle = ({ className }) => (
  <TitleText className={className}>
    <WhiteText>JAKUB</WhiteText> <OrangeText>SEMIK</OrangeText>
  </TitleText>
)

export default NameTitle
