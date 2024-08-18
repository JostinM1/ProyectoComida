

import React, { useState } from 'react';
import ComidaEcuatoriana from './componentes/ComidaEcuatoriana';
import './App.css'; // Importa el CSS que ya tienes
import ComidaChina from './componentes/ComidaChina';
import ComidaEU from './componentes/ComidaEU';

const App = () => {
const [selectedComida, setSelectedComida] = useState(null);
  const renderComida = () => {
      switch (selectedComida) {
          case 'ecuador':
              return <ComidaEcuatoriana />;
          case 'china':
              return <ComidaChina />;
            case 'EstadosUnidos':
              return <ComidaEU />;
                
          default:
              return <p>Selecciona una comida del menú</p>;
              
    }
  };
  
  return (
      <div>
          <nav className="navbar">
              <ul className="navbar-menu">
                <img src="./public/logo.png" alt="Logo" className='logo' />
             
                  <li className="navbar-item" onClick={() => setSelectedComida('ecuador')}>Comida Ecuatoriana</li>
                  <li className="navbar-item" onClick={() => setSelectedComida('china')}>Comida China</li>
                  <li className="navbar-item" onClick={() => setSelectedComida('EstadosUnidos')}>Comida Estados Unidense</li>
                  
              </ul>
          </nav>
          <div className="content">
              {renderComida()}
          </div>
      </div>
  );
};

export default App;