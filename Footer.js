import React from 'react';
//import "./etalk.css";
//import "./defaulter.css";
import "./footer.css";

export default function Footer(){
    return(
        <>
<head>
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous"/>
</head>
<footer className="footcolor">
      <div className="about-foot">
        <h1>About us</h1>
        <span></span>
        <span></span>
        <p>Envisage is the official E-Summit of Techno Main Salt Lake organized by IIC-TMSL.
        </p>
        <div>
        
          <a href="https://www.facebook.com/envisagetmsl">
          <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/envisagetmsl/">
          <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.youtube.com/channel/UCnrbFhmXUKnMU2Wzeq-EY6Q">
          <i className="fab fa-youtube"></i>
          </a>
          <a href="https://twitter.com/envisagetmsl">
          <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.linkedin.com/company/envisagetmsl/">
          <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
      <div className="links-foot">
        <h1>Quick Links</h1>
        <span></span>
        <span></span>
        <ul>
          <li><a href="#box1">E-Talk</a></li>
          <li><a href="#box2">Guest List</a></li>
        </ul>
      </div>
      <div className="contact-foot">
        <h1>Contact</h1>
        <span></span>
        <span></span>
        <div className="address">
          <div>
            <i className="fas fa-map-marker-alt"></i>
            <p>
              TECHNO INDIA : EM-4/1, Sector-V,
              Salt Lake, Kolkata-700091,West Bengal
            </p>
          </div>
          <div>
            <i className="fas fa-phone-alt"></i>
            <p>+91 85150 05676</p>
          </div>
          <div>
            <i className="fas fa-envelope"></i>
            <a className="acolor" href="mailto:envisagetmsl@gmail.com">envisagetmsl@gmail.com</a>
          </div>
        </div>
      </div>
    </footer>
    </>
    );
}