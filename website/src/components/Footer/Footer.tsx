import React from "react";
import * as P from './parts';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {

    return(
        <P.Wrapper>
            <P.Logo src="assets/logo/pionowe/png/logo.png" />
            <P.TextBox>ul. Morska 11, 76-107 Jarosławiec</P.TextBox>
            <P.IconsWrapper>
                <P.NoStyledLink href="tel:506141730">
                506 141 730
                    {/* <FacebookIcon /> */}
                    {/* </a> */}
                </P.NoStyledLink>
                    <br />
                    <P.NoStyledLink href="mailto:domkinapniu@gmail.com">

               domkinapniu@gmail.com
                    </P.NoStyledLink>
                    {/* <InstagramIcon /> */}
            </P.IconsWrapper>
            <P.TextBox>© COPYRIGHT 2022</P.TextBox>
        </P.Wrapper>
    )
};

export default Footer;