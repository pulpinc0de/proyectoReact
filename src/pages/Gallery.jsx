import React from 'react'
import '../styles/gallery.css';
import torta1 from '../assets/birthday.jpg';
import torta2 from '../assets/angelic.jpg';
import torta3 from '../assets/birthdaycake.jpg';
import torta4 from '../assets/christmas.jpg';
import torta5 from '../assets/tortacelesteblanca.jpg';
import torta6 from '../assets/tortaverde.jpg';
import torta7 from '../assets/tortadorada.jpg';
import torta8 from '../assets/tortablancarosa.jpg';
import torta9 from '../assets/tortacorona.jpg';  
import torta10 from '../assets/retropasta.jpg';


export default function Gallery() {
  return (
    <section id="gallery" className="container">
      <h2 className="text-center mb-4">Nuestra galería</h2>
      <div className="gallery-grid">
        <img src={torta1} alt="Cake 1" />
        <img src={torta2} alt="Cake 2" />
        <img src={torta3} alt="Cake 3" />
        <img src={torta4} alt="Cake 4" />
        <img src={torta5} alt="Cake 5" />
        <img src={torta6} alt="Cake 6" />
        <img src={torta7} alt="Cake 7" />
        <img src={torta8} alt="Cake 8" />
        <img src={torta9} alt="Cake 9" />
        <img src={torta10} alt="Cake 10" />
      </div>
    </section>
  );
}