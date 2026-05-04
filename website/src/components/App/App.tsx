import Button from '@mui/material/Button';
import React from 'react';
import * as P from './parts';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
// import Map from '../Map/Map';
// import MapWrapper from '../Map/MapWrapper';

function App() {
  const isMobile = window.innerWidth < 900;
  return (
    <>
    <P.Wrapper>
      <P.ImageWrapper>
      
       {/* {!isMobile && */}
         <P.BookNow>
           <P.BookNowLabel><b>Sprawdź dostępność 2026</b></P.BookNowLabel>
           <P.NoStyledLink to="/kontakt">
             <Button sx={{ 
               backgroundColor: '#c79d09',
               width: '200px',
               height: '67px',
               '&:hover' : {
                 backgroundColor: '#242f25',
                }
              }}
              variant="contained">
                Rezerwuję pobyt<ArrowRightIcon /></Button>
           </P.NoStyledLink>
         </P.BookNow>
        {/* } */}
         <P.Image isMobile={isMobile}/>
      </P.ImageWrapper>

        <P.FirstInfoWrapper isMobile={isMobile}>
          <P.FirstInfoTitle>Drewniane domki w Jarosławcu</P.FirstInfoTitle>
          <P.FirstInfoSneakWrapper>
            {!isMobile && <div><P.FirstInfoPhoto src="assets/zdj/front.jpg" /></div>}
            <P.FirstInfoDescription>
            "Domki na pniu" to miejsce gdzie znajdują się nowe, nowocześnie wyposażone, piętrowe drewniane domki gwarantujące wygodny i radosny pobyt nad morzem. Obiekt wybudowany w 2022 roku. Z domku w ciągu 9 minut spacerkiem dojdziemy do plaży "Dubaj" czy też obiektów gastronomicznych i handlowych . Dla naszych gości mamy prywatny parking na 8 aut. Dla wszystkich gości, którzy wybiorą minimum 7-dniowy pobyt w naszych domkach na powitanie serwujemy butelkę schłodzonego Prosecco.
             {/* Domki Na Pniu witają Cię na stronie! Powstały w tym roku (2022) The International budget hostel is a former 17 century warehouse located in the heart of Amsterdam on one of the most beautiful canals in the city. It is a few minutes walk from the Leidseplein and very close to the museums. It is mostly a back-packer, student and young people’s hostel. It has 4 persons rooms with shared facilities and private rooms available. Internet station is available at the reception area. Free Internet Access Wifi in all rooms. */}
            </P.FirstInfoDescription>
          </P.FirstInfoSneakWrapper>
        </P.FirstInfoWrapper>
      
        <P.SmallGalleryWrapper>
          <P.SmallGalleryBox><P.SmallGalleryImage src="assets/zdj/jadalnia.jpg" /></P.SmallGalleryBox>
          <P.SmallGalleryBox><P.SmallGalleryImage src="assets/zdj/lazienka2.jpg" /></P.SmallGalleryBox>
          <P.SmallGalleryBox><P.SmallGalleryImage src="assets/zdj/noc5.jpg" /></P.SmallGalleryBox>
          <P.SmallGalleryBox><P.SmallGalleryImage src="assets/zdj/pien1.jpg" /></P.SmallGalleryBox>
        </P.SmallGalleryWrapper>

        <P.NoStyledLink to="/galeria">
          <Button sx={{ 
            backgroundColor: '#c79d09',
            width: '200px',
            height: '45px',
            '&:hover' : {
              backgroundColor: '#242f25',
            }
          }}variant="contained">Zobacz więcej zdjęć</Button>
        </P.NoStyledLink>


        <P.FinalBarWrapper>
          <P.FinalBarHeader>9 minut do Dubaju!</P.FinalBarHeader>
          idąc pieszo
        </P.FinalBarWrapper>

        {/* <P.Map>
          <MapWrapper />
        </P.Map> */}

        <P.WarmWelcomeWrapper isMobile={isMobile}>
          <P.WarmWelcomeLeftSide isMobile={isMobile}>
          <P.WarmWelcomePhoto src="assets/zdj/plaza2.jpg" />
          <P.WarmWelcomeText isMobile={isMobile}>
          Ciepłe powitanie! <br />
Mamy nadzieję, że znajdziesz w domkach ofertę spełniającą Twoje potrzeby i zdecydujesz się na pobyt u nas. Jeśli masz jakiekolwiek pytania, nie wahaj się z nami skontaktować.
            {/* A warm welcome! */}
{/* We hope you find an offer that hostel your needs and chose to stay with us. If you got any questions please do not hesitate to contact us. */}

{/* Susanne & Kadir | Hostel Reservation. */}
</P.WarmWelcomeText>

          </P.WarmWelcomeLeftSide>
        <P.WarmWelcomeCoolStuff>
          <ul>
            <li>Blisko do plaży</li>
            <li>Blisko do centrum miasta</li>
            <li>Spokojna okolica</li>
            <li>Piętrowy apartament, łączna powierzchnia 50m2 oraz duży zewnętrzny taras</li>
            <li>Grill przy tarasie każdego domku</li>
            <li>Plac zabaw na terenie ośrodka</li>
            <li>Parking bezpłatny na kostce, 8 samochdów</li>
            <li>Aneks kuchenny w pełni wyposażony m.i.n. kuchnia indukcyjna, kapsułkowy ekspres do kawy</li>
            <li>Udostępniamy ręczniki</li>
            <li>Salon - TV</li>
            <li>2 wygodne sypialnie</li>
          </ul>
         
        <P.NoStyledLink to="/oferta">
          <Button sx={{ 
            backgroundColor: '#c79d09',
            width: '200px',
            height: '45px', 
            '&:hover' : {
              backgroundColor: '#242f25',
            }
          }}variant="contained">Poznaj naszą ofertę</Button>
          </P.NoStyledLink>
        </P.WarmWelcomeCoolStuff>
        </P.WarmWelcomeWrapper>
    </P.Wrapper>
    </>
  );
}

export default App;
