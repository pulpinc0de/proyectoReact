import React from 'react'
import PropTypes from 'prop-types'
import '../styles/productCard.css';

// Componente ProductCard
// Muestra la información de un pastel y permite encargarlo
function ProductCard({ title, image, description, onEncargar }) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <button
        onClick={() => {
        const tipoFormateado = title.toLowerCase().replace(/\s/g, '')
        localStorage.setItem('tipoPedido', tipoFormateado)
        window.location.hash = '#form'
        document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' })

       }}
        >
        Encargar
      </button>


    </div>
  )
}
// PropTypes para validar las props del componente
ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onEncargar: PropTypes.func,
}

export default ProductCard