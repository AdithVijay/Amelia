import React from 'react'
import card1 from "../assets/t1.jpg";
import card2 from "../assets/t2.jpg";
import card3 from "../assets/t3.jpg";
import card4 from "../assets/SKS_5219.jpg";
import logo1 from "../assets/11.jpg";
import logo2 from "../assets/s2.jpg";
import logo3 from "../assets/s3.jpg";
import logo4 from "../assets/cpl.jpg";
import Footer from '../component/Footer';

const Gallery = () => {
  return (
    <div>
       <div  className=' grid grid-cols-3 grid-flow-row-dense gap-4 mx-10 ' >
   {/* {isloaded && (<InstagramEmbed url="https://www.instagram.com/_viishnu_santhosh?igsh=NzIycHd3YW52NnVk" width={650} />)} */}
   <img src={card1} alt="" className='' />
   <img src={card2} alt="" className='' />
   <img src={card3} alt="" className='' />
   <img src={card4}  alt=" " className=' row-span-2 ' />
   <img src={logo1} alt="" className='  ' />
   <img src={logo2} alt="" className='' />
   <img src={logo3} alt=" " className='' />
   <img src={logo4} alt="" className='row-span-2 ' />
   <img src="https://www.thoughtco.com/thmb/vrWPIa5gM20NUbQdFa84M7i5wHs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-697389167-5a737ae0ba617700372d5569.jpg" alt=" " className=' ' />
   <img src="https://www.thoughtco.com/thmb/vrWPIa5gM20NUbQdFa84M7i5wHs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-697389167-5a737ae0ba617700372d5569.jpg" alt=" " className=' ' />
  </div>
  <Footer />
    </div>
  )
}

export default Gallery
