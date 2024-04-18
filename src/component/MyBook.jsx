import React from "react";
import HTMLFlipBook from 'react-pageflip';
import menu0 from '../assets/menu/0.png'
import menu1 from '../assets/menu/1.png'
import menu2 from '../assets/menu/2.png'
import menu3 from '../assets/menu/3.png'
import menu4 from '../assets/menu/4.png'
function MyBook(props) {
    return (
        <div  className=" flex justify-center  md:m-10 md:w-full   ">
          <HTMLFlipBook width={500} height={700}  showCover={true}  style={{ maxWidth: '100%', height: 'auto' }}
 className=" mb-3">
          
             <img src={menu0} alt="menu-page1"  />
              <img src={menu1} alt="menu-page2" />
              <img src={menu2} alt="menu-page3" />
              <img src={menu3} alt="menu-page3" />
              <img src={menu4} alt="menu-page4" />
              <img src={menu4} alt="menu-page5" />
          </HTMLFlipBook>
        </div>
    );
}
export default MyBook