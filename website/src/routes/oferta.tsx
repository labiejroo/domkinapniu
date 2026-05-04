import { Box, ImageList, ImageListItem } from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";
import HeaderWrapper from "../components/HeaderWrapper/HeaderWrapper";
import * as P from './Oferta/parts';

const itemData = [
    {
      img: 'assets/zdj/kuchnia.jpg',
      title: 'kuchnia',
    },
    {
      img: 'assets/zdj/noc2.jpg',
      title: 'noc',
    },
    {
      img: 'assets/zdj/parking1.jpg',
      title: 'parking',
    },
    {
      img: 'assets/zdj/pien2.jpg',
      title: 'pien',
    },
    {
      img: 'assets/zdj/pien1.jpg',
      title: 'pien',
    },
    {
      img: 'assets/zdj/pien3.jpg',
      title: 'pien',
    },
    {
      img: 'assets/zdj/plaza1.jpg',
      title: 'plaza',
    },
    {
      img: 'assets/zdj/plaza3.jpg',
      title: 'plaza',
    },
    {
      img: 'assets/zdj/salonnoc2.jpg',
      title: 'salon',
    },
    {
      img: 'assets/zdj/schody.jpg',
      title: 'schody',
    },
    {
      img: 'assets/zdj/tlo.jpg',
      title: 'budynki',
    },
  ];

  
const Oferta = () => {
  const isMobile = window.innerWidth < 900;
  
    return(
        <P.Wrapper>
            <HeaderWrapper title={'oferta'} />
            <P.ColumnWrapper isMobile={isMobile}>
                <P.LeftColumn>
                    <P.LeftColumnBox><b>Domki letniskowe w Jarosławcu</b></P.LeftColumnBox>
                    {/* <P.LeftColumnBox>W naszej ofercie znajdą Państwo:</P.LeftColumnBox> */}
                    {/* <ul>
                        <li>cos </li>
                        <li>cos </li>
                        <li>cos </li>
                    </ul> */}
            {/* <li>Pełne wyposażenie kuchenne</li> */}
                    <P.LeftColumnBox>Parter domku to salon z aneksem kuchennym i łazienką. Wyposażony w : zmywarkę, kuchenkę mikrofalową, kuchenkę indukcyjną, kapsułkowy ekspress do kawy, czajnik elektryczny, lodówkę i wszystkie niezbędne akcesoria kuchenne. Na parterze znajduje się nowocześnie wyposażona łazienka z kabiną prysznicową oraz salon do wypoczynku z rozkładaną 2-osobową kanapą i TV. Na piętrze znajdują się 2 sypialnie oraz garderoba. W większej sypialnii znajduje się łóżko kontynentalne z zagłowiem 160x200, w mniejszej łóżko 120x200 oraz 90x200. Łączna powierzchnia użytkowa domku to aż 50 m2 plus zewnętrzny taras z meblami ogrodowymi. Na terenie ośrodka znajduje się plac zabaw dla dzieci, sprzęt do grillowania dedykowany dla każdego domku. Pomieszczenia domku są jonizowane przed przyjazdem gości. Na żądanie udostępniamy żelazko i deskę do prasowania. Dla wszystkich gości, którzy wybiorą minimum 7-dniowy pobyt w naszych domkach na powitanie serwujemy butelkę schłodzonego Prosecco.</P.LeftColumnBox>
                </P.LeftColumn>
                <P.RightColumn>
                    <P.ImageCarousel>
                        <Box sx={{ width: '100%', height: '100%', overflowY: 'scroll' }}>
                            <ImageList variant="masonry" cols={3} gap={8}>
                                {itemData.map((item) => (
                                <ImageListItem key={item.img}>
                                    <img
                                    src={`${item.img}?w=248&fit=crop&auto=format`}
                                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item.title}
                                    loading="lazy"
                                    />
                                </ImageListItem>
                                ))}
                            </ImageList>
                        </Box>
                    </P.ImageCarousel>
                    <P.NoStyledLink to="/galeria">
                      <Button sx={{ 
                        backgroundColor: '#c79d09',
                        width: '200px',
                        height: '45px', 
                        '&:hover' : {
                          backgroundColor: '#242f25',
                        }
                      }}variant="contained">Zobacz wszystkie zdjęcia</Button>
                    </P.NoStyledLink>
                </P.RightColumn>
            </P.ColumnWrapper>
        </P.Wrapper>
    );
};


  
export default Oferta;