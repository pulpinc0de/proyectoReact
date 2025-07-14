
import React, { useRef } from 'react'
import ProductCard from '../components/ProductCard'
import '../styles/products.css';
import chococake from '../assets/chococake.jpg';
import redVelvet from '../assets/redvelvet.jpg';
import tresLeches from '../assets/tresleches.jpg';



function Products() {
  const formRef = useRef()

  const cakes = [
    {
      title: 'Chococake',
      image: chococake,
      description: 'Bizcochuelo húmedo con cobertura de chocolate y frutos rojos.',
    },
    {
      title: 'Red Velvet',
      image: redVelvet,
      description: 'Esponjoso bizcocho rojo aterciopelado y suave crema de queso.',
    },
    {
      title: 'Tres Leches',
      image: tresLeches,
      description: 'Bizcocho empapado en una mezcla de tres leches, dulce y húmedo.',
    },
  ]

  const handleEncargar = (tipo) => {
    const tipoFormateado = tipo.toLowerCase().replace(/\s/g, '')
    localStorage.setItem('tipoPedido', tipoFormateado)
    formRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <h1 id="products" className="ProductosEstrellas">Nuestros Productos Estrella</h1>
      <section className="card-container">
        {cakes.map((cake, index) => (
          <ProductCard
            key={index}
            title={cake.title}
            image={cake.image}
            description={cake.description}
            onEncargar={handleEncargar}
          />
        ))}
      </section>
    </>
  )
}

export default Products
