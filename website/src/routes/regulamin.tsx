import * as P from './Regulamin/parts';
import React from "react";
import HeaderWrapper from '../components/HeaderWrapper/HeaderWrapper';


const Regulamin = () => {
    return (
      <P.Wrapper>
        <HeaderWrapper title={'regulamin'} />
        <P.TextBox>Poznaj nasz regulamin</P.TextBox>
        <P.OrderedList>
          <li>Turnus rozpoczyna się o godzinie 15:00, kończy się ósmego dnia turnusu o godzinie 10:00 rano.</li>
          <li>Rezerwacje przyjmujemy telefonicznie.</li>
          <li>Warunkiem przyjęcia rezerwacji jest wpłata zadatku w wysokości 30%.  W sytuacji rezygnacji z zarezerwowanego domku zadatek nie podlega zwrotowi.</li>
          <li>Wysokość opłat nie podlega zmniejszeniu lub zwrotowi jeżeli gość wyjedzie z własnej woli w trakcie trwania turnusu.</li>
          <li>Opłata za pobyt płatna gotówką lub przelewem w dniu przyjazdu.</li>
          <li>Cena zawiera: wodę, parking (maksymalnie 2 auta), pościel, ręczniki – 1 duży, 1 mały.</li>
          <li>Cena <b>nie zawiera</b> opłaty za prąd 1kWh - 2zł</li>
          <li>Goście wynajmujący domek ponoszą pełną odpowiedzialność finansową za wszelkie uszkodzenia lub zniszczenia wyposażenia powstałe z winy gości.</li>
          <li>Wszelkie usterki prosimy zgłaszać w recepcji ośrodka lub u konserwatora.</li>
          <li>Właściciel "Domki na Pniu" nie ponosi odpowiedzialności za rzeczy zaginione, pozostawione bez nadzoru.</li>
          <li>W domkach i pokojach obowiązuje całkowity zakaz palenia.</li>
          <li>Goście zobowiązani są do przestrzegania przepisów przeciwpożarowych.</li>
          <li>Rodzice lub opiekunowie zobowiązani są do opieki nad dziećmi na terenie całego ośrodka.</li>
          <li>Na terenie ośrodka akceptujemy małe zwierzęta.</li>
          <li>Osoby odwiedzające mogą przebywać na terenie ośrodka po uzgodnieniu tego z właścicielem ośrodka.</li>
          <li>Właściciel ośrodka udostępniając miejsca parkingowe nie bierze odpowiedzialności za kradzieże, uszkodzenia pojazdów i inne straty.</li>
          <li>Goście ubierają i rozbierają pościel.</li>
          <li>W dniu wyjazdu pomieszczenia należy pozostawić w takim stanie jakie zastało się w dniu przyjazdu.</li>
          <li>Za każdą osobę powyżej 6 osób w domku pobieramy dodatkową opłatę <b>80zł/doba</b></li>
        </P.OrderedList>
        <b>Regulamin pobytu ze zwierzętami:</b>
        <P.OrderedList>
          <li>Właściciel musi w pełni kontrolować zwierzę.</li>
          <li>Konieczne jest posiadanie książeczki zdrowia psa z aktualnymi szczepieniami.</li>
          <li>Potrzeby fizjologiczne zwierzę powinno załatwiać poza posesją.</li>
          <li>Właściciel zobowiązany jest do sprzątania po swoim zwierzęciu wewnątrz domku i na terenie posesji.</li>
          <li>Ewentualne szkody powstałe z udziałem zwierzęcia pokrywa właściciel.</li>
          <li><b>Opłata za zwierzę - 30zł/doba.</b></li>
        </P.OrderedList>
       
      </P.Wrapper>
    );
  }


  export default Regulamin;