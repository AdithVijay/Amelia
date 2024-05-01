import React from 'react'
import card1 from "../assets/t1.jpg";
import card2 from "../assets/t2.jpg";
import card3 from "../assets/t3.jpg";
import card4 from "../assets/SKS_5219.jpg";
import logo1 from "../assets/11.jpg";
import logo2 from "../assets/s2.jpg";
import logo3 from "../assets/s3.jpg";
import logo4 from "../assets/cpl.jpg";
import gallery1 from "../assets/gallery1.jpg";
import gallery5 from "../assets/gallery5.jpg";
import gallery6 from "../assets/gallery6.jpg";
import gallery12 from "../assets/gallery12.jpg";
import gallery9 from "../assets/gallery9.jpg";
import gallery8 from "../assets/gallery8.jpg";
import gallery2 from "../assets/gallery2.jpg";
import gal22 from "../assets/gal22.jpg";
import gal23 from "../assets/gal23.jpg";
import Footer from '../component/Footer';

const Gallery = () => {
  return (
    <div>
       <div  className=' grid md:grid-cols-3  grid-flow-row-dense gap-4 mx-10 mt-5 mb-16 ' >
   {/* {isloaded && (<InstagramEmbed url="https://www.instagram.com/_viishnu_santhosh?igsh=NzIycHd3YW52NnVk" width={650} />)} */}
   <img src={ card2} alt="Amalia beauty thiruvalla" className='' />
   <img src={gal23} alt="Amalia beauty thiruvalla" className='' />
   <img src={card3} alt="Amalia beauty thiruvalla" className='' />
   <img src={card4}  alt="Amalia beauty thiruvalla " className=' row-span-2 ' />
   <img src={logo2} alt="Amalia beauty thiruvalla" className=' ' />
   <img src={gallery5 } alt="Amalia beauty thiruvalla" className='' />
   <img src={gallery12} alt="Amalia beauty thiruvalla " className='' />
   <img src={logo4} alt="Amalia beauty thiruvalla" className='row-span-2 ' />
   <img src={gallery1} alt="Amalia beauty thiruvalla" className=' row-span-2 ' />
   <img src={gallery6} alt="Amalia beauty thiruvalla" className=' row-span-2 ' />
   <img src={logo1} alt=" Amalia beauty thiruvalla" className=' ' />
   <img src={gallery9 } alt=" Amalia beauty thiruvalla" className=' ' />
   <img src={ logo3} alt=" Amalia beauty thiruvalla" className=' ' />
   <img src={ gallery8} alt=" Amalia beauty thiruvalla" className=' ' />
   <img src={gallery2} alt="Amalia beauty thiruvalla" className=' row-span-2 ' />
   <img src={card1} alt="Amalia beauty thiruvalla" className=' row-span-2 ' />
   <img src={gal22} alt="Amalia beauty thiruvalla" className=' row-span-2 ' />
  </div>
  <Footer />
    </div>
  )
}

export default Gallery
