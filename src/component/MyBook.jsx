import React from "react";
import HTMLFlipBook from 'react-pageflip';
function MyBook(props) {
    return (
        <HTMLFlipBook width={600} height={1000}  showCover={true}>
           
            <div className="demoPage bg-slate-100">  <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Beauty Parlor Menu</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 shadow-md rounded-md">
          <h2 className="text-xl font-bold mb-2">Fruit Facial</h2>
          <p className="mb-2">Mixed Fruit</p>
        </div>
        <div className="bg-white p-4 shadow-md rounded-md">
          <h2 className="text-xl font-bold mb-2">Nature's Facial</h2>
          <p className="mb-2">Silver Pearl, Gold, Illuminating Gold, Pure Ayurvedic Facial Panchtattva, Diamond</p>
        </div>
        <div className="bg-white p-4 shadow-md rounded-md">
          <h2 className="text-xl font-bold mb-2">Seasoul Facial</h2>
          <p className="mb-2">Seasoul Facial</p>
        </div>
        <div className="bg-white p-4 shadow-md rounded-md">
          <h2 className="text-xl font-bold mb-2">03+ Facial</h2>
          <p className="mb-2">Seaweed Facial</p>
        </div>
        <div className="bg-white p-4 shadow-md rounded-md">
          <h2 className="text-xl font-bold mb-2">Vedic Line Facial</h2>
          <p className="mb-2">Silver Pearl, Gold, Diamond, Special Acne Treatment, Neem & Bhrami</p>
        </div>
        <div className="bg-white p-4 shadow-md rounded-md">
          <h2 className="text-xl font-bold mb-2">Aroma Facial</h2>
          <p className="mb-2">Gold, Silver, Bridal Glow, Vitamin C</p>
        </div>
        <div className="bg-white p-4 shadow-md rounded-md">
          <h2 className="text-xl font-bold mb-2">Shahnaz Husain Facial</h2>
          <p className="mb-2">Normal, Flower Power, Pearl, Gold, Diamond</p>
        </div>
        <div className="bg-white p-4 shadow-md rounded-md">
          <h2 className="text-xl font-bold mb-2">Hydra Facial</h2>
          <p className="mb-2">Seasoul, Vitamin C, 03+, Normal</p>
        </div>
      </div>
    </div></div>
            <div className="demoPage bg-slate-300">Page 2</div>
            <div className="demoPage  bg-slate-400">Page 3</div>
            <div className="demoPage bg-slate-300">Page 4</div>
            <div className="demoPage  bg-slate-400">Page 5</div>
            <div className="demoPage bg-slate-300">Page 6</div>
            <div className="demoPage  bg-slate-400">Page 7</div>
            <div className="demoPage  bg-slate-400">Page 8</div>
        </HTMLFlipBook>
    );
}
export default MyBook