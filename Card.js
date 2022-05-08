import React from 'react';
//import './e-talk';

//import "./etalk.css";
//import "./defaulter.css";
import "./footer.css";
import "./Card.css";
//import Card from  "./Carddata";
//import sec from "./pics/Amitabha Singh pic.svg";

export default function Card(props){
    const image = props.item.imge;
    const name = props.item.name;
    const occup = props.item.occup;
    

    return(
        <>
        <head>
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous"/>
</head>
        <body>
 <div className='card'>
<div className="parent">
        <div className="one">
            <div className="second">
                <img src={image} alt=" " /><br/>
            </div>
    <div className="first-main">
    <p>
       {name}
    </p><br/>
    <p className="small">
        {occup}
    </p><br/>
    <div className="button">
        <button><i className="fab fa-linkedin"></i></button>
    </div>
    </div>
        </div>
</div>
 </div>
        <script type="text/javascript" src="vanilla-tilt.js"></script>
        

       
        
       </body>
        </>
    );
}