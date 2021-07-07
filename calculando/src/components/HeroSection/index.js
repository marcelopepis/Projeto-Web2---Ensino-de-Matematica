import React, {useState} from 'react'
import Video from '../../videos/video.mp4';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP,
        HeroBtnWrapper, ArrowFoward, ArrowRight } from './HeroElements';
import {Button} from '../ButtonElement';

const HeroSection = () => {
  const [ hover, setHover ] = useState(false);

  const onHover = () => {
    setHover(!hover);
  }


  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4'></VideoBg>
      </HeroBg>
      <HeroContent>
        <HeroH1>Aprenda matemática com o Calculando!</HeroH1>
        <HeroP>
          Faça seu cadastro hoje para começar!
        </HeroP>
        <HeroBtnWrapper>
          <Button to="signup" onMouseEnter = {onHover} onMouseLeave = {onHover} primary='true' dark='true'>
            Cadastrar {hover ? <ArrowFoward/> : <ArrowRight/>}
          </Button>
          
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
