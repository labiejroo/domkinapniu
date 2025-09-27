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

export const TextBox = styled.h1`
    text-align: center;
`;

export const TableWrapper = styled.div`
    padding: 0px 20px 20px 20px;
    max-width: 100%;
`;

export const NoStyledLink  = styled(Link)`
text-decoration: none;`;