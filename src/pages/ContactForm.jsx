import React, { useState, useEffect } from 'react'
import '../styles/form.css';

//funcion para el formulario de contacto
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

  // Estado para manejar errores de validación
  const [errores, setErrores] = useState({})

  // Cargar el tipo de pastel desde localStorage si existe
  useEffect(() => {
    const tipoGuardado = localStorage.getItem("tipoPedido")
    if (tipoGuardado) {
      setFormData(prev => ({ ...prev, tipo: tipoGuardado }))
    }
  }, [])

  // Manejar cambios en los campos del formulario
  const handleChange = e => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  // Validar el formulario antes de enviar
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

  // Manejar el envío del formulario
  const handleSubmit = e => {
    e.preventDefault()
    const foundErrors = validateForm()

    if (Object.keys(foundErrors).length > 0) {
      setErrores(foundErrors)
      return
    }
    // Si no hay errores, enviar el formulario
    setErrores({})
    console.log("Formulario enviado:", formData)
    alert("¡Pedido enviado con éxito!")
    localStorage.removeItem("tipoPedido")
  }

  // Guardar el tipo de pastel en localStorage al cambiarlo
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
          {/* Validación del campo nombre */}
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
          {/* Validación del campo email */}
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
          {/* Validación del campo teléfono */}
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
          {/* Validación del campo dirección */}
          {errores.direccion && <span className="error-text">{errores.direccion}</span>}

          <label htmlFor="tipo">Tipo de pastel:</label>
          <select
            id="tipo"
            name="tipo"
            value={formData.tipo}
            onChange={handleChange}
          >
            {/* Opciones de tipo de pastel */}
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
          {/* Validación del campo cantidad */}
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
