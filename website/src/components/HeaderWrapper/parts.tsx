import styled from "@emotion/styled";

export const HeaderWrapper = styled.div`
    width: 100%;
    height: 300px;
    @media (max-width: 768px) {
        height: 150px;
    }
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px) {
        margin-top: 90px;
    }
`;
export const ImageWrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.3);
    background-blend-mode: overlay;
    @media (max-width: 768px) {
        background-position: top center;
    }
    background-image: url("assets/zdj/tlo.jpg");
    filter: blur(3px);
`;

export const Title = styled.div`
    color: white;
    position: absolute;
    font-Size: 48px;
    @media (max-width: 768px) {
        font-Size: 32px;
    }
    font-family: myFirstFontBold2;
`;