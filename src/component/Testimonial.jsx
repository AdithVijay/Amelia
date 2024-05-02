// import React, { useState } from "react";

// import card1 from "../assets/t1.jpg";
// import card2 from "../assets/t2.jpg";
// import card3 from "../assets/t3.jpg";
// import pic2 from "../assets/logo7.webp";
// import pic3 from "../assets/logo8.webp";
// import pic4 from "../assets/t1.jpg";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";





// function App() {
//   const data = [
//     {
//       img: card1,
//       name: "John | Doe",
//       desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum vel modi similique, inventore alias sed, facere cupiditate perferendis nulla dolorum tenetur? Iure, "
//   },
//   {
//       img: card2,
//       name: "Jane | Smith",
//       desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Sed non mauris vitae erat consequat auctor eu in elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
//   },
//   {
//       img: card3,
//       name: "Michael | Johnson",
//       desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Sed non mauris vitae erat consequat auctor eu in elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
//   },
//   {
//       img: pic2,
//       name: "Emily | Davis",
//       desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Sed non mauris vitae erat consequat auctor eu in elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
//   },
//   {
//       img: pic2,
//       name: "David | Wilson",
//       desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Sed non mauris vitae erat consequat auctor eu in elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
//   },
//   {
//       img: pic3,
//       name: "Sarah | Thompson",
//       desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Sed non mauris vitae erat consequat auctor eu in elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
//   },
//   {
//       img: pic4,
//       name: "Robert | Anderson",
//       desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Sed non mauris vitae erat consequat auctor eu in elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
//   },
    
//   ];
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     responsive: [
//         {
//           breakpoint: 768, // width to change settings
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1
//           }
//         }
//       ]
//   };
//   return (

//     <div className='w-3/4 m-auto'>
//       <div className="mt-20">
//       <Slider {...settings}>
//         {data.map((d) => (
//           <div key={d.name} className="h-[500px] text-black rounded-xl">
//             <div className='h-56 flex justify-center items-center rounded-t-xl'>
//               <img src={d.img} alt="Amalia review icon" className="h-44 w-44 rounded-full object-cover"/>
//             </div>

//             <div className="flex flex-col items-center justify-center gap-4 p-4">
//               <p className="text-xl text-[#8E8E8E]  font-semibold">{d.name}</p>
//               <p className="text-center text-[#8E8E8E] ">{d.desc}</p>
           
//             </div>
//           </div>
//         ))}
//       </Slider>

//       </div>
      
//     </div>
//   );
// }



// export default App;
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ReactStars from 'react-stars'
function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
        {
          breakpoint: 768, // width to change settings
          settings: {
           
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
  return (
    <div className=' w-3/4 md:m-auto  min-h-[20rem]  '>
      <div className="mt-10   ">
      <Slider {...settings}>
   
        {data.map((d) => (
          <div key={d.name} className="bg-white md:h-[500px] h-[620px] text-black rounded-xl     ">
            <div className='h-56 flex justify-center items-center rounded-t-xl'>
              <div  alt="" className=" w-32 h-32 pt-8 font-bold text-6xl  text-white  rounded-full flex justify-center"  style={{ backgroundColor: d.bgColor }}>

                {d.img}
                
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-4  md:h-auto pb-10      p-4">
              <p className="text-xl text-[#8E8E8E]  font-semibold">{d.name}</p>
              <p className="text-center text-[#8E8E8E] ">{d.review}</p>
              <div className="">
                <ReactStars edit={false}
                  count={5}
                  
                  value	={d.value}
                  half	={true}
                  size={25}
                  color2={'#ffd700'} />
              </div>
            </div>
          
          </div>
        ))}
      </Slider>
      </div>
      
    </div>
  );
}
function darkenColor(color, factor) {
  const hex = color.replace("#", "");
  const rgb = parseInt(hex, 16);
  const r = Math.round(((rgb >> 16) & 0xff) * (1 - factor));
  const g = Math.round(((rgb >>  8) & 0xff) * (1 - factor));
  const b = Math.round(((rgb >>  0) & 0xff) * (1 - factor));
  return `#${(r << 16 | g << 8 | b).toString(16).padStart(6, "0")}`;
}

const data = [
  {
    name: `Hanna Jacob`,
    img: "H",
    review: `Best saloon in Thiruvalla. Excellent service and great customer friendly environment . I did hydra facial and hair Botox treatment. Both services were very effective. Also it is a mother and child friendly salon. I came with my 2 year old daughter and the staff took care of my daughter so well . I highly recommend this salon to everyone especially for mothers.`,
    value: 5,
    bgColor: darkenColor("#FFD700", 0.2) // Darken by 20%
    
  },
  {
    name: `Kavya Mohan`,
    img: "K",
    review: `I'm not a regular user of parlor. But of all that i had ever been to, the most comfortable, welcoming, guiding and the best service i have ever received is from you. Special thanks to Mrs. Krishna for her friendly nature and amazing service. Thanks to team Amelia.`,
    bgColor: darkenColor("#FF4500", 0.2),
    value:4.5
  },
  {
    name: `Sarah Thomas`,
    img: "S",
    review: `I had an amazing experience at the salon! They  provided exceptional service during my hair cut ,he took ample time and delivered excellent service. Moreover, the staff were incredibly friendly and attentive, providing top-notch service`,
    value:4.5,
    bgColor: darkenColor("#FF6347", 0.2) // Darken by 20%
  },
  {
    name: `Aparna Suresh`,
    img: "A",
    review: `Services are really good. They using Quality products and they treat customers very well.`,
    value:5,
    bgColor: darkenColor("#FFD700", 0.2) // Darken by 20%
  },

  {
    name: `Manjima Mohan `,
    img: "M",
    review: `Highly recommended this place. I had hair treatment done . They provide great hair spas in a very relaxing environment.Easy appointments, welcoming staff, and talented employees . A very good unisex make up studio and spa providing excellent services, good ambience & maintaining good hygiene.`,
    value:5,
    bgColor: darkenColor("#FF4500", 0.2) // Darken by 20%
  },
  {
    name: `Geeta Kumari`,
    img: "G",
    review: `It's one of the best beauty salon in thiruvalla. And their service are too good. Personally I love it..`,
    value:5,
    bgColor: darkenColor("#FF4500", 0.2) // Darken by 20%
  },
];

export default App;