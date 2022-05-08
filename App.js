//import logo from './logo.svg';
import './App.css';
import React from "react";
import Header from "./components/Header";
import Card from './components/Card';
import Footer from './components/Footer';
import Etalk from './components/Etalk';
import cardData from  "./components/Carddata";

function App() {
  const cards = cardData.map(data => {
		return (
			<Card 
				id = {data.id}
				item = {data}
			/>
		)
	})
  return (
    <>
    <Header/>
    <Etalk/>
    <h1 style={{ textAlign: "center" }}>This Year's Guests</h1>
    <div className='etalkcard'>
      {cards}
      </div>    
    <Footer/>
    </>
  );
}

export default App;
