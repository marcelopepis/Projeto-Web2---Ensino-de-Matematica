import React from 'react';
import { TeamContainer, TeamRow, TeamWrapper, Column1, TextWrapper, TopLine, Heading, Subtitle,
Column2, ImgWrap, Img} from './TeamElements';
import img1 from '../../images/criancas.png';

const Team = ({lightBg, id, imgStart, topLine, lightText, headLine, darkText, description, img, alt}) => {
  return (
    <>
      <TeamContainer lightBg={lightBg} id={id}>
        <TeamWrapper>
          <TeamRow imgStart= {imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText = {lightText}>{headLine}</Heading>
                <Subtitle darkText = {darkText} >{description}</Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img1} alt={alt}/>
              </ImgWrap>
            </Column2>
          </TeamRow>
        </TeamWrapper>

      </TeamContainer>
    </>
  )
}

export default Team