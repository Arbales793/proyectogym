import React from 'react';
import './Footer.css';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'; // Importa los iconos

const Footer = () => {
  return (
    <footer>
      {/* Contenido del footer */}
      <div>
        <a className="linksRedes" href="https://facebook.com/tu_perfil" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a className="linksRedes" href="https://instagram.com/tu_perfil" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a className="linksRedes" href="https://wa.me/tunumero" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

