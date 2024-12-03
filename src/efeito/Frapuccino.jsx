import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Frapuccino.css';

function Frapuccino() {
  const [currentImage, setCurrentImage] = useState('src/img/img1.png');

  const images = {
    frappuccino: './img/img1.png',
    caramelo: './img/caramelo.png',
    unicorn: './img/unicorn.png',
    tea: './img/tea.png',
  };

  const handleChangeImage = (image) => {
    setCurrentImage(image);
  };

  return (
    <section>
      <div className="frap">
        <AnimatePresence>
          <motion.img
            key={currentImage} // Adiciona a chave para a animação de saída
            className="frapImg"
            src={currentImage}
            alt="starbucks"
            initial={{ opacity: 0, x: 100 }} // Imagem nova começa da direita
            animate={{ opacity: 1, x: 0 }} // Mover para a posição original
            transition={{ duration: 0.6 }} // Aumenta a duração da animação
          />
        </AnimatePresence>
      </div>

      <div className="thumb" style={{ display: 'flex', justifyContent: 'center' }}>
        <ul style={{ display: 'flex', paddingTop: 85, position: 'absolute', right: '30%' }}>
          {Object.entries(images).map(([key, src]) => (
            <li className="li" key={key}>
              <img
                className={`thumb${key === 'unicorn' ? '2' : '1'}`}
                src={src}
                alt={key.charAt(0).toUpperCase() + key.slice(1)}
                onClick={() => handleChangeImage(src)}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Frapuccino;

