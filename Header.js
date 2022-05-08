import React from 'react';
import "./etalk.css";
import "./defaulter.css";
//import "./footer.css";
//import './d02';
//import './e-talk';
import first from "./pics/E-TALK.png";
/*import sec from "./pics/Amitabha Singh pic.svg";
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
import thirte from "./pics/varun javeri.svg";*/



//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export default function Header(){
    return(
        <>
<head>
  <meta charset="UTF-8"/>
  <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous"/>
    
  
  
  <title>E-Talk</title>
</head>

<body>
  
  

  <div id="main">
    <div className="box1" id="box1">
      <h1>E-Talk</h1>
      
      <img src={first} alt=""/>
      <p>
        Nothing can inspire young minds more than role models and sharing their experience gives them the
        pursuit of happiness and wish to once be there on stage. With our E-Talks held by eminent personalities
        who have proved themselves in the field of innovation and entrepreneurship, participants get to know
        about their thrilling and adventurous journey first hand.
      </p>
    </div>
    
    





    
    
  </div>




  
  
  
</body>


</>
);
}