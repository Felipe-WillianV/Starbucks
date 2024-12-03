import React from 'react';
import './WhatsNew.css';
import Footer from '../componentes/Footer';

const images = {
  frappuccino: './img/frappuccino-drink.png',
  caramelo: './img/caramelo.png',
  unicorn: './img/unicorn.png',
  tea: './img/tea.png',
};

const newItems = [
  { title: "Iced Frappuccino", img: images.frappuccino, desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { title: "Salted Caramel Cold", img: images.caramelo, desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { title: "Unicorn Delight Latte", img: images.unicorn, desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { title: "Matcha Tea Fizz", img: images.tea, desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
];

const WhatsNew = () => {
    
    return (
     <>
        <div className="whats-new">
        <header className="header">
            <h1>What's New at Starbucks</h1>
        </header>
        <div className="container">
            {newItems.map((item, index) => (
            <div key={index} className="card">
                <img src={item.img} alt={item.title} className="card-image" />
                <div className="card-body">
                <h3 className="card-title">{item.title}</h3>
                <p className="card-text">{item.desc}</p>
                </div>
            </div>
            ))}
        </div>
        </div>
        <Footer />
     </>
     );
};

export default WhatsNew;
