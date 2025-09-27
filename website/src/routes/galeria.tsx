import * as P from './Galeria/parts';
import React, { useState } from "react";
import HeaderWrapper from "../components/HeaderWrapper/HeaderWrapper";
import CloseIcon from '@mui/icons-material/Close';

let data = [
  {
    id: 1,
    imgSrc: 'assets/zdj/brzoza1.jpg',
  },
  {
    id: 2,
    imgSrc: 'assets/zdj/front.jpg',
  },
  {
    id: 3,
    imgSrc: 'assets/zdj/grill.jpg',
  },
  {
    id: 4,
    imgSrc: 'assets/zdj/jadalnia.jpg',
  },
  {
    id: 5,
    imgSrc: 'assets/zdj/sypialnia.jpeg',
  },
  {
    id: 6,
    imgSrc: 'assets/zdj/lazienka1.jpg',
  },
  {
    id: 7,
    imgSrc: 'assets/zdj/lazienka2.jpg',
  },
  {
    id: 8,
    imgSrc: 'assets/zdj/noc1.jpg',
  },
  {
    id: 9,
    imgSrc: 'assets/zdj/noc2.jpg',
  },
  {
    id: 10,
    imgSrc: 'assets/zdj/noc3.jpg',
  },
  {
    id: 11,
    imgSrc: 'assets/zdj/noc4.jpg',
  },
  {
    id: 12,
    imgSrc: 'assets/zdj/noc5.jpg',
  },
  {
    id: 13,
    imgSrc: 'assets/zdj/kuchnia.jpg',
  },
  {
    id: 14,
    imgSrc: 'assets/zdj/lozka1.jpg',
  },
  {
    id: 15,
    imgSrc: 'assets/zdj/lozka2.jpg',
  },
  {
    id: 16,
    imgSrc: 'assets/zdj/przedsionek.jpg',
  },
  {
    id: 17,
    imgSrc: 'assets/zdj/salon1.jpg',
  },
  {
    id: 18,
    imgSrc: 'assets/zdj/salon2.jpg',
  },
  {
    id: 19,
    imgSrc: 'assets/zdj/salon4.jpg',
  },
  {
    id: 20,
    imgSrc: 'assets/zdj/schody.jpg',
  },
]
const Galeria = () => {
  const [modal, setModal] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState('');
  const getImg = (imgSrc: string) => {
    console.log(imgSrc);
    setTempImgSrc(imgSrc);
    setModal(true);
  }

  return (
    <P.Wrapper>
      <HeaderWrapper title={'galeria'} />
      <P.Gallery>
        <P.Modal isModalOpen={modal}>
          <img src={tempImgSrc} />
          <CloseIcon onClick={() => setModal(false)} />
        </P.Modal>
        {data.map((item,index)=>{
          return(
            <P.Pics key={index}>
                <img src={item.imgSrc} style={{width: '100%'}} onClick={()=>getImg(item.imgSrc)}/>
            </P.Pics>
          )
        })}
      </P.Gallery>
    </P.Wrapper>
  );
}

export default Galeria;