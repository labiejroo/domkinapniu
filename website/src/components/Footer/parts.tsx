import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Wrapper = styled.footer`
  padding: 10px 30px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  background-color: #f0efed;
  font-family: myFirstFontReg;
  color: #242f25;
  border-top: 1px solid #c79d09;
`;

export const Logo = styled.img`
    width: 90px;
    height: 126px;
`;

export const IconsWrapper = styled.div`
  a {
    color: #c79d09; !important;
  }
  text-align: center;
`;

export const TextBox = styled.div`
    color: #242f25;
    font-family: myFirstFontReg;
`;

export const NoStyledLink  = styled.a`
text-decoration: none;
text-align: center
`
;