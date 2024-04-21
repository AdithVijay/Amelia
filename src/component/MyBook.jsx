import React from "react";
import HTMLFlipBook from 'react-pageflip';
import menu0 from '../assets/menu/0.png'
import menu1 from '../assets/menu/1.png'
import menu2 from '../assets/menu/2.png'
import menu3 from '../assets/menu/3.png'
import menu4 from '../assets/menu/4.png'
import screenfull from 'screenfull';
import { useEffect } from "react";
function MyBook(props) {

useEffect(() => {
    

    document.getElementById('target').addEventListener('click', () => {
        if (screenfull.isEnabled && window.innerWidth > 768) {
            screenfull.request();
        }
    });
}, [])
    return (
        <div  className=" flex justify-center  md:m-10 md:w-full  select-none   xl:scale-150 md:scale-100 scale-[.85]  xl:my-52  " id="target">
          <HTMLFlipBook width={450} height={700}  showCover={true}  style={{ maxWidth: '100%', height: 'auto' }}
 className=" mb-3">
          
             <div className=" ">
                <img src={menu0} alt="menu-page1" className=" m-auto "  />
            </div>
             <div className=" ">
                <img src={menu1} alt="menu-page1" className="m-auto  "  />
            </div>
             <div className=" ">
                <img src={menu2} alt="menu-page1" className="m-auto  "  />
            </div>
            <div className="">
                <img src={menu3} alt="menu-page1" className="m-auto  "  />
            </div>
            <div className=" ">
                <img src={menu4} alt="menu-page1" className="m-auto  "  />
            </div>
            <div className="">
                <img src={menu4} alt="menu-page1" className="m-auto  "  />
            </div>
           
          </HTMLFlipBook>
        </div>
    );
}
export default MyBook