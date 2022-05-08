//import react from 'react';


/*var swiper = new Swiper(".swiper-container", {

    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 20,
      stretch: 0,
      depth: 200,
      modifier: 1,
      slideShadows: true,
    },
    loop: true,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
    
  });*/
 /* VanillaTilt.init(document.querySelectorAll(".card"), {
		max: 25,
		speed: 400,
    glare: true,
    "max-glare": 1,
	});*/

import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./styles.css";
import sec from "./pics/Amitabha Singh pic.svg";
import thir from "./pics/amiya patanaik.svg";
import four from "./pics/Gautham Pasupuleti.svg";
import five from "./pics/Jack Sim.svg";
import six from "./pics/Rahul Basak.svg";
import sev from "./pics/Rostam J.svg";
import eigh from "./pics/Satadru Chowdhury.svg";
import nine from "./pics/Sayan Chakraborty (1).svg";
import ten from "./pics/sourabh jain.svg";
import ele from "./pics/sujaysantra.svg";
import twel from "./pics/unknown.svg";
import thirte from "./pics/varun javeri.svg";


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

export default function App() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Previous Year Guest List</h1>
      <div className="App">
      
        <Carousel breakPoints={breakPoints}>
          <Item><div className="swiper-slide">

<img src={sec} alt="amitabha singh" />
  <h2>Amitabha Singh</h2>
  <p>DIRECTOR AND INDEPENDENT FILMMAKER</p>
</div></Item>
          <Item><div className="swiper-slide">
          <img src={thir} alt='amiya patanaik' />
            <h2>Dr. Amiya Patanaik</h2>
            <p>NEUROBIT TECHNOLOGIES, CEO AND FOUNDER</p>
          
          </div></Item>
          <Item><div className="swiper-slide">
          <img src={four} alt='gautham pasupuleti' />
            <h2>Gautham Pasupuleti</h2>
            <p>BIODESIGN INNOVATION LABS, FOUNDER AND CEO</p>
          
          </div></Item>
          <Item><div className="swiper-slide">
          <img src={five} alt='jack sim' />
            <h2>Jack Sim</h2>
            <p>WORLD TOILET ORGANIZATION, FOUNDER</p>
          
          </div></Item>
          <Item><div className="swiper-slide">
          <img src={six} alt='rahul basak' />
            <h2>Rahul Basak</h2>
            <p>CEO OF AMAR CANVAS, CHEIF EDITOR- MY CANVAS TALK</p>
         
          </div></Item>
          <Item><div className="swiper-slide">
          <img src={sev} alt='rostam j. Neuwirth' />
            <h2>Rostam J. Neuwirth</h2>
            <p>GLOBAL LEGAL STUDIES AT UNIVERSITY OF MACAU, HOD</p>
          
          </div></Item>
          <Item><div className="swiper-slide">
          <img src={eigh} alt='satadru Chowdhury' />
            <h2>Satadru Chowdhury</h2>
            <p>VAANAHAA EDUCATION AND INNOVATION LABS PVT LTD</p>
          
          </div></Item>
          <Item><div className="swiper-slide">
          <img src={nine} alt="sayan chakraborty" />
            <h2>Sayan Chakraborty</h2>
            <p>FOUNDER AT WTF AND HUNGER NUMBER</p>
          
          </div></Item>
          <Item><div className="swiper-slide">
          <img src={ten} alt="sourabh jain" />
            <h2>Sourabh Jain</h2>
            <p>PAYTM, VICE PRESIDENT</p>
          
          </div></Item>
          <Item><div className="swiper-slide">
          <img src={ele} alt="sujay santra" />
            <h2>Sujay Santra</h2>
            <p>FOUNDER AND CEO IKURE TECHSOFT PVT LTD</p>
         
          </div></Item>
          <Item><div className="swiper-slide">
          <img src={twel} alt="maya vishwakarma" />
            <h2>Maya Vishwakarma</h2>
            <p>PADWOMAN OF INDIA/ FOUNDER SUKARMA/ SOCIAL ENTREPRENEUR/ TED-X SPEAKER/ KEYNOTE SPEAKER</p>
          
          </div></Item>
          <Item> <div className="swiper-slide">
          <img src={thirte} alt="varun jaweri" />
            <h2>Varun Javeri</h2>
            <p>LEADING INNOVATION STRATEGIST AT NHA</p>
          
          </div></Item>
          
        </Carousel>
      </div>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
