import React, { useState } from 'react'
import './FormularioLogin.css'

const FormularioLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    const handleLogin = (e) => {
      e.preventDefault();
      // Validación de campos vacíos
      if (!username || !password) {
        setError('Por favor, completa todos los campos.');
        return;
      }
      // Validación de longitud de contraseña
      if (password.length < 6) {
        setError('La contraseña debe tener al menos 6 caracteres.');
        return;
      }
      // Aquí puedes agregar más validaciones según tus necesidades
      // Si todo está bien, envía el formulario
      console.log('Usuario:', username);
      console.log('Contraseña:', password);
    };
  
    return (
      <div className='FormularioLogin'>
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Numero de DNI"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Ingresar</button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
      </div>
    );
  };
  
  export default FormularioLogin
