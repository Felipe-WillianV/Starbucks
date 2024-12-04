import React from 'react';
import './Menu.css';

// Importando as imagens
import coffee from '../img/coffee.png';
import frappuccino from '../img/frappuccino.png';
import pastry from '../img/pastry.png';
import icedLatte from '../img/iced-latte.png';
import coldBrew from '../img/cold-brew.png';
import macchiato from '../img/macchiato.png';
import chaiLatte from '../img/chai-latte.png';
import cakePop from '../img/cake-pop.png';
import sandwich from '../img/sandwich.png';

const images = {
  coffee,
  frappuccino,
  pastry,
  icedLatte,
  coldBrew,
  macchiato,
  chaiLatte,
  cakePop,
  sandwich,
};

const menuItems = [
  { title: "Espresso", img: images.coffee, desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { title: "Frappuccino", img: images.frappuccino, desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { title: "Pastries", img: images.pastry, desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { title: "Iced Latte", img: images.icedLatte, desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { title: "Cold Brew", img: images.coldBrew, desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { title: "Macchiato", img: images.macchiato, desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { title: "Chai Latte", img: images.chaiLatte, desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { title: "Cake Pop", img: images.cakePop, desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { title: "Sandwich", img: images.sandwich, desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
];

const Menu = () => {
  return (
    <div className="menu">
      <header className="menu-header">
        <h1>Starbucks Menu</h1>
        <p>Explore the latest beverages and delicious treats.</p>
      </header>
      <div className="menu-container">
        {menuItems.map((item, index) => (
          <div key={index} className="menu-card">
            <img src={item.img} alt={item.title} className="menu-card-image" />
            <div className="menu-card-body">
              <h3 className="menu-card-title">{item.title}</h3>
              <p className="menu-card-text">{item.desc}</p>
              <button className="order-button">Order Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;

