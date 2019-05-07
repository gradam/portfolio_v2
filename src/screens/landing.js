import React, { useState } from 'react'
import styled from 'styled-components'
import Typist from 'react-typist'

import Section from '@components/section'
import { OrangeText, WhiteText } from '@styles/span'
import Button from '@styles/button'
import media from '@styles/media'
import { pxToRem } from '@utils/css'

import 'react-typist/dist/Typist.css'

const LandingSection = styled(Section)`
  background: ${props => props.theme.colors.black};
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;

  .Typist {
    display: flex;
    align-content: center;
    justify-content: center;
    flex-direction: column;
  }
`

const TextContainer = styled.div`
  font-weight: 700;
  text-align: center;
  margin-left: 50px;
  margin-right: 50px;

  ${media.lessThan('xsmall')`
    font-size: ${pxToRem(40)};
    padding-top: 20px;
  `}

  ${media.between('xsmall', 'small')`
    font-size: ${pxToRem(56)};
    padding-top: 30px;
  `}

  ${media.between('small', 'medium')`
    font-size: ${pxToRem(80)};
    padding-top: 40px;
  `}

  ${media.greaterThan('medium')`
    font-size: ${pxToRem(80)};
    padding-top: 50px;
  `}
`

const LandingButton = styled(Button)`
  color: ${props => props.theme.colors.white};
  align-self: center;
`

const Landing = () => {
  const [hideButton, setHideButton] = useState(false)

  return (
    <LandingSection sectionId="landing">
      <Typist
        cursor={{ show: false }}
        onTypingDone={() => {
          setTimeout(() => setHideButton(true), 1000)
        }}
      >
        <TextContainer>
          <WhiteText>HI!, I AM </WhiteText>
          <OrangeText>JAKUB</OrangeText>
          <Typist.Backspace count={'HI!, I AM JAKUB'.length} delay={1000} />
          <WhiteText>ARE YOU LOOKING FOR A FULL STACK </WhiteText>
          <br />
          <OrangeText>DEVELOPER</OrangeText>
          <WhiteText>?</WhiteText>
        </TextContainer>
      </Typist>
      <LandingButton className={`full ${hideButton && 'hide'}`}>GET TO KNOW ME</LandingButton>
    </LandingSection>
  )
}

export default Landing
