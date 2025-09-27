import React from "react";
import * as P from './parts';

interface HeaderWrapperProps {
    title: string;
}
const HeaderWrapper: React.FC<HeaderWrapperProps> = ({title}) => {

    return(
        <P.HeaderWrapper>
            <P.ImageWrapper />
            <P.Title>{title}</P.Title>
        </P.HeaderWrapper>
    )
};

export default HeaderWrapper;