import * as P from './Kontakt/parts';
import React from "react";
import HeaderWrapper from "../components/HeaderWrapper/HeaderWrapper";

const Kontakt = () => {
  return (
    <P.Wrapper>
      <HeaderWrapper title={'kontakt'} />
      <P.TextBox>Rezerwacje i kontakt</P.TextBox>
      <P.BankAccountNumber>Zaliczki wpłacamy na numer konta: 80 1050 1461 1000 0097 2974 1596 </P.BankAccountNumber>
      <P.BankAccountNumber>Potwierdzenie wpłaty prosimy wysłać na adres e-mail.</P.BankAccountNumber>
      <P.NoStyledLink href="tel:506141730">tel: 506 141 730</P.NoStyledLink>
      <P.NoStyledLink href="mailto:domkinapniu@gmail.com">e-mail: domkinapniu@gmail.com</P.NoStyledLink>  
    </P.Wrapper>
  );
  }


export default Kontakt;