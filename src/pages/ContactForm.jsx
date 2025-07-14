import React, { useState, useEffect } from 'react'
import '../styles/form.css';

function ContactForm({ presetTipo = '' }) {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    direccion: '',
    tipo: presetTipo || 'chococake',
    cantidad: 1,
    mensaje: '',
  })

  const [errores, setErrores] = useState({})

  useEffect(() => {
    const tipoGuardado = localStorage.getItem("tipoPedido")
    if (tipoGuardado) {
      setFormData(prev => ({ ...prev, tipo: tipoGuardado }))
    }
  }, [])

  const handleChange = e => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const validateForm = () => {
    const { nombre, email, telefono, direccion, cantidad } = formData
    let newErrores = {}

    if (!nombre.trim()) newErrores.nombre = "Este campo es obligatorio."
    if (!email.trim()) newErrores.email = "Este campo es obligatorio."
    if (!telefono.trim()) newErrores.telefono = "Este campo es obligatorio."
    if (!direccion.trim()) newErrores.direccion = "Este campo es obligatorio."
    if (!cantidad || parseInt(cantidad) < 1) newErrores.cantidad = "Debe ser al menos 1."

    return newErrores
  }

  const handleSubmit = e => {
    e.preventDefault()
    const foundErrors = validateForm()

    if (Object.keys(foundErrors).length > 0) {
      setErrores(foundErrors)
      return
    }

    setErrores({})
    console.log("Formulario enviado:", formData)
    alert("¡Pedido enviado con éxito!")
    localStorage.removeItem("tipoPedido")
  }

  return (
    <section id="form" className="container">
      <div className="formulario-container">
        <form id="formulario-pedido" className="form-container" onSubmit={handleSubmit}>
          <h3 className="delForm">¡Haz tu pedido!</h3>

          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className={errores.nombre ? "error" : ""}
          />
          {errores.nombre && <span className="error-text">{errores.nombre}</span>}

          <label htmlFor="email">Correo electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errores.email ? "error" : ""}
          />
          {errores.email && <span className="error-text">{errores.email}</span>}

          <label htmlFor="telefono">Teléfono:</label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            className={errores.telefono ? "error" : ""}
          />
          {errores.telefono && <span className="error-text">{errores.telefono}</span>}

          <label htmlFor="direccion">Dirección:</label>
          <input
            type="text"
            id="direccion"
            name="direccion"
            value={formData.direccion}
            onChange={handleChange}
            className={errores.direccion ? "error" : ""}
          />
          {errores.direccion && <span className="error-text">{errores.direccion}</span>}

          <label htmlFor="tipo">Tipo de pastel:</label>
          <select
            id="tipo"
            name="tipo"
            value={formData.tipo}
            onChange={handleChange}
          >
            <option value="chococake">Chococake</option>
            <option value="redvelvet">Red Velvet</option>
            <option value="tresleches">Tres Leches</option>
            <option value="otro">Otro</option>
          </select>

          <label htmlFor="cantidad">Cantidad:</label>
          <input
            type="number"
            id="cantidad"
            name="cantidad"
            min="1"
            value={formData.cantidad}
            onChange={handleChange}
            className={errores.cantidad ? "error" : ""}
          />
          {errores.cantidad && <span className="error-text">{errores.cantidad}</span>}

          <label htmlFor="mensaje">Mensaje adicional:</label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows="4"
            value={formData.mensaje}
            onChange={handleChange}
          />

          <button type="submit">Enviar pedido</button>
        </form>
      </div>
    </section>
  )
}

export default ContactForm
