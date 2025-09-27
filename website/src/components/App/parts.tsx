import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

interface isMobile {
  isMobile: boolean;
}

export const Wrapper = styled.div`
  // height: 455px;
  background-color: #f0efed;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  `;
  
export const ImageWrapper = styled.div`
  width: 100%;
  height: 700px;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img<{ isMobile: boolean}>`
  width: 100%;
  height: 100%;
  position: absolute;
  // background-attachment: fixed;
  // background-position: center;
  // background-repeat: no-repeat;
  // background-size: cover;
  /* The image used */
  background-image: url("assets/zdj/tlo.jpg");
  background-image: ${p => !p.isMobile ? css`url("assets/zdj/tlo.jpg");` : css`url("assets/zdj/front.jpg");`};
  background-blend-mode: overlay;
  background-color: rgba(0,0,0,.3);

  /* Set a specific height */
  // min-height: 500px;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  @supports (-webkit-touch-callout: none) {
    /* CSS specific to iOS devices */ 
    background-attachment:scroll;
  }
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const BookNow = styled.div`
  // position: absolute;
  // width: 50%;
  // height: 20%;
  // background-color: red;
  // top: 50%;
  // right: 50%;

  z-index: 111;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

export const BookNowLabel = styled.label`
  font-family: myFirstFontReg bold;
  font-size: 35px;
  color: white;
  text-align: center;
`;

export const FeatureLabel = styled.label`
  font-family: myFirstFontReg bold;
  font-size: 30px;
  color: white;
  text-align: center;
  background-color: #242f25;
  color: #c79d09;
`;

export const BookNowButton = styled.div`
position: absolute;
  width: 20%;
  height: 20%;
  // background-color: red;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const FirstInfoWrapper = styled.div<isMobile>`
  width: ${p => !p.isMobile ? '60%' : '80%'};
  // background-color: red; 
  display: flex;
  flex-direction: column;
  gap: 10px;
  // margin-top: 20px;
  padding-bottom: 20px;
  padding-top: 20px;
`;
export const FirstInfoTitle = styled.label`
  font-size: 35px;
  text-align: center;
`;
export const FirstInfoSneakWrapper = styled.div`
 display: flex;
 flex-direction: row;
//  gap: 40px;
 align-items: center;
 width: 100%;
`;
export const FirstInfoPhoto = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
`;
export const FirstInfoDescription = styled.label`
font-size: 15px;
text-align: center;
padding: 20px;
`;

export const SmallGalleryWrapper = styled.div`
  padding: 20px 20px;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const NoStyledLink  = styled(Link)`
text-decoration: none;`;

export const SmallGalleryBox = styled.div`
  width: 280px;
  height: 160px;
  overflow: hidden;

  &:hover img{
    opacity: 1;
    transform: scale(1.1);
  }
`;
export const SmallGalleryImage = styled.img`
  width: 100%;
  height: 100%;
  opacity: .7;
  transition: 0.5s all ease-in-out;
  object-fit: cover;
`;

export const WarmWelcomeWrapper = styled.div<isMobile>`
  padding: 20px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${p => !p.isMobile ? 'row' : 'column'};
  width: ${p => !p.isMobile ? '80%' : '100%'};
`;

export const WarmWelcomePhoto = styled.img`
  height: 300px;
  width: 300px;  
  border-radius: 50%;
`;

export const WarmWelcomeText = styled.div<isMobile>`
  padding: ${p => !p.isMobile ? '20px 60px' : '20px'};
  text-align: center;
`;

export const WarmWelcomeCoolStuff = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px 20px;
`;

export const WarmWelcomeLeftSide = styled.div<isMobile>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: ${p => !p.isMobile ? '600px' : 'auto'};
`;

export const FinalBarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
  background-color: #242f25;
  flex-direction: column;
  color: #f0efed;
  margin-top: 20px;
`;

export const FinalBarHeader = styled.div`
  font-size: 60px;
  text-align: center;
`;

export const Map = styled.div`
  width: 100%;
  height: 400px;
`;
