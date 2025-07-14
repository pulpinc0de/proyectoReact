import React from 'react'
import "../styles/about.css";
import carta from '../assets/carta.jpg';

function About() {
  return (
    <section id="about">
      <div className="contenido">
        <h2>Sobre nosotros</h2>
        <p className="texto">
          En Ares Cakes, la repostería no es solo nuestro oficio: es una forma de transmitir amor, tradición y alegría.
          <br/>
          Desde nuestros comienzos, nos dedicamos a crear pasteles que celebren momentos especiales —ya sea un cumpleaños, una boda, una graduación o simplemente un antojo por algo dulce.
          
          Cada pastel que horneamos es una combinación perfecta de ingredientes de calidad, técnicas cuidadosas y un toque personal. Nos inspira la sonrisa de quien recibe nuestros productos, y por eso no dejamos ningún detalle al azar. 
          
          Utilizamos frutas frescas, chocolates premium y recetas que han sido perfeccionadas a lo largo del tiempo.
          Además de sabor, cuidamos la estética: creemos que un pastel también debe ser una obra de arte comestible. Por eso, ofrecemos diseños personalizados que se adaptan al estilo y la emoción de cada evento. ¿Te imaginas ese pastel que siempre soñaste? Lo hacemos realidad.
          Nos enorgullece ser una empresa local con valores sólidos: compromiso, creatividad y cercanía. Atendemos con cariño y escuchamos cada idea, porque cada cliente es parte de nuestra historia. Nuestro equipo está formado por apasionados de la repostería que disfrutan ver cómo lo dulce transforma cualquier momento en algo inolvidable.
          <br/> ¡Vení y descubrí por qué nuestros pasteles no solo se comen... se celebran!
        </p>
        <img src={carta} alt="fondotxt" className="fondo" />
      </div>
    </section>
  )
}

export default About
