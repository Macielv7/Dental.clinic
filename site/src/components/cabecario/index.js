import React, { useState } from "react"
import "./index.scss"

const Header = () => {
  const [active, setActive] = useState("nav_menu")
  const [icon, setIcon] = useState("nav_toggler")
  const navToggle = () => {
    if (active === "nav_menu") {
      setActive("nav_menu nav_active")
    } else setActive("nav_menu")

    if (icon === "nav_toggler") {
      setIcon("nav_toggler")
    } else setIcon("nav_toggler")
  }
  return (
    <>
     return (
      <header class="header">

     
  
      <a href="/" class="logo"> Dental clinic <i class="fas fa-mug-hot"></i> </a>
  
      <nav class="navbar" >
          <a href="#home">home</a>
          <a href="#about">about</a>
          <a href="#menu">menu</a>
          <a href="#review">review</a>
          <a href="#book">book</a>
      </nav>
  
      <a href="/agendamento" class="btn">Faça o seu agendamento</a>
     
  </header>
    </>
  )
}

export default Header