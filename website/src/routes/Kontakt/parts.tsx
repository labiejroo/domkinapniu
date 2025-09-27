import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
    display: flex;
    gap: 20px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: myFirstFontReg;
    background-color: #f0efed;
    padding-bottom: 40px;
`;

export const ColumnWrapper = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    width: 80%;
    // height: 500px;
    padding: 20px 0px;
    flex-direction: row;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;
   
export const LeftColumn = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 30%;
    @media (max-width: 768px) {
        width: 80%;
    }
    padding-bottom: 20px;
`;

export const LeftColumnBox = styled.div`
    text-align: center;
`;

export const RightColumn = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 70%;
    @media (max-width: 768px) {
        width: auto;
    }
    height: 100%;
`;

export const ImageCarousel = styled.div`
    width: 80%;
    height: 400px;
    @media (max-width: 768px) {
        width: auto;
    }
    // background-color: blue;
`;

export const TextBox = styled.h1`
    text-align: center;
`;

export const BankAccountNumber = styled.h4`
    text-align: center;
`;

export const NoStyledLink  = styled.a`
text-decoration: none;
text-align: center;
font-size: 20px;
color: #242f25;
text-decoration: underline;
`
;