import React from 'react';
import ComidaEcuatoriana from './ComidaEcuatoriana';
import AcercaDeNosotros from './acercadenosotros';
function Header({ openModal, closeModal, modalContent }) {
    return (

        <header>
            <div className="dropdown-menu">
              <button className="dropbtn">Categorías</button>
              <div className="dropdown-content">
              
                <a href="#" onClick={() => openModal(<ComidaEcuatoriana />)}>Comida Ecuatoriana</a>
                <a href="#" onClick={() => openModal(<ComidaChina />)}>ComidaChina</a>
                <a href="#" onClick={() => openModal(<ComidaEstadoUnidense/>)}>Comida Estado Unidense</a>
              </div>
            </div>


        </header>
    );
};

export default Header;