import styled from "@emotion/styled";
import { Link } from "react-router-dom";

interface isMobile {
  isMobile: boolean;
}

export const ContactWrapper = styled.header<isMobile>`
  // height: 170px;
  // border-top: green;
  margin-top: ${p => !p.isMobile ? '93px' : '56px'};
  display: flex;
  align-items: center;
  // justify-content: space-evenly;
  background-color: #f0efed;
  font-family: myFirstFontReg;
  border-bottom: 1px solid #242f25;
  color: #242f25;
  margin-left: auto;
  justify-content: flex-end;
`;

export const ContactInfo = styled.div`
position: relative;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  // border-top: px solid #c79d09;
  margin-right: 20px;
  gap: 5px;
  &:hover {
    color: #c79d09; !important;
    a {
      color: #c79d09; !important;
    }
  }
  a {
    text-decoration: none;
    color: #242f25;
    font-family: myFirstFontReg;
  }
`;

export const MainHeader = styled.div`
  display: flex;
  padding: 0px 35px;  
  // height: 100%;
  background-color: pink;
  border-top: 1px solid green;
  border-bottom: 1px solid green;
`;

export const Logo = styled.div`
  padding: 10px 0px;
  // height: 100%;
  width: 200px;
  background-color: yellow;
`;

export const Links = styled.div`
  margin-left: auto;
  float: right;
  padding: 20px 0px;  
  width: 55%;
  // height: 100%;
  // background-color: grey;
  display: flex;
  justify-content: space-around;
  align-items: center;

  font-family: myFirstFontReg;
  text-decoration: none;
  text-transform: uppercase;
  gap:40px;
  
`;

export const NoStyledLink  = styled(Link)`
text-decoration: none;`;
export const StyledLink  = styled(Link)`
     //some CSS styles here
     text-decoration: none;
    color: #242f25;

    // a:hover {
    //   color: #c79d09;
    // }

    &:hover {
      color: #c79d09;
    }
    
    // a:active {
    //   color: black;
    // }
    
    // a:visited {
    //   color: purple;
    // }
`;

export const LinkBox = styled.div`
  display: inline-block;
  height: 100%;
  // width: 50px;
  justify-content: center;
  align-items: center;

  text-decoration: none;
`;