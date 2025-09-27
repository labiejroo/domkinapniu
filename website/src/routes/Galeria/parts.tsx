import styled from "@emotion/styled";

interface isModalOpen {
    isModalOpen: boolean;
}

export const Wrapper = styled.div`
    display: flex;
    gap: 20px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: myFirstFontReg;
    background-color: #f0efed;
    
`;

export const Gallery = styled.div`
    -webkit-column-count: 3;
    -moz-column-count: 3;
    column-count: 3;
    -webkit-column-width: 33%;
    -moz-column-width: 33%;
    column-width: 33%;
    padding: 0px 12px;

    @media (max-width: 991px) {
        -webkit-column-count: 2;
        -moz-column-count: 2;
        column-count: 2;
    }

    @media (max-width: 480px) {
        -webkit-column-count: 1;
        -moz-column-count: 1;
        column-count: 1;
        -webkit-column-width: 100%;
        -moz-column-width: 100%;
        column-width: 100%;
    }

    margin-bottom: 20px;
`;

export const Pics = styled.div`
    -webkit-transition: all 350ms ease;
    transition: all 350ms ease;
    cursor: pointer;
    margin-bottom: 12px;

    &:hover {
        filter: opacity(.8);
    }
`;

export const Modal = styled.div<isModalOpen>`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000;
    transition: opacity .3s ease, visibility .3s ease, transform .3s ease-in-out;
    visibility: hidden;
    opacity: 0;
    transform: scale(0);
    overflow: hidden;
    z-index: 9999;

    ${p => p.isModalOpen && `
        visibility: visible;
        opacity: 1;
        transform: scale(1);

        svg {
            position: fixed;
            top: 10px;
            right: 10px;
            width: 2rem;
            height: 2rem;
            padding: 5px;
            background-color: (0,0,0,.4);
            color: #fff;
            cursor: pointer;
        }
    `};

    img {
        width: auto;
        max-width: 100%;
        height: auto;
        max-height: 100%;
        display: block;
        line-height: 0;
        box-sizing: border-box;
        padding: 20px 0 20px;
        margin: 0 auto;
    }
`;