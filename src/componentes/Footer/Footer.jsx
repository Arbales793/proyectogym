import React from 'react';
import './Footer.css';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'; // Importa los iconos

const Footer = () => {
  return (
    <footer>
      {/* Contenido del footer */}
      <div>
        <a href="https://facebook.com/tu_perfil" target="_blank" rel="noopener noreferrer">
          <FaFacebook /> Facebook
        </a>
        <a href="https://instagram.com/tu_perfil" target="_blank" rel="noopener noreferrer">
          <FaInstagram /> Instagram
        </a>
        <a href="https://wa.me/tunumero" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp /> WhatsApp
        </a>
      </div>
    </footer>
  );
};

export default Footer;

