import React from "react";
import HTMLFlipBook from 'react-pageflip';
import menu0 from '../assets/menu/0.png'
import menu1 from '../assets/menu/1.png'
import menu2 from '../assets/menu/2.png'
import menu3 from '../assets/menu/3.png'
import menu4 from '../assets/menu/4.png'
function MyBook(props) {
    return (
        <div  className=" flex justify-center  m-10">
          <HTMLFlipBook width={600} height={750}  showCover={true} className=" mb-3">
          
             <img src={menu0} alt=""  />
              <img src={menu1} alt="" />
              <img src={menu2} alt="" />
              <img src={menu3} alt="" />
              <img src={menu4} alt="" />
              <img src={menu4} alt="" />
          </HTMLFlipBook>
        </div>
    );
}
export default MyBook