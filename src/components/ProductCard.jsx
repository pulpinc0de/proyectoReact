import React from 'react'
import PropTypes from 'prop-types'
import '../styles/productCard.css';


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

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onEncargar: PropTypes.func,
}

export default ProductCard