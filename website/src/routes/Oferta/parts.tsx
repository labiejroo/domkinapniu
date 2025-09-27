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
`;

export const ColumnWrapper = styled.div<{ isMobile: boolean }>`
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    width: ${p => !p.isMobile ? '80%' : '100%'};
    // height: 500px;
    padding: 20px 0px;
    flex-direction: row;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const NoStyledLink  = styled(Link)`
text-decoration: none;`;
   
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