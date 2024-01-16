import React, { useState } from 'react';
import { Outlet, Link } from "react-router-dom"


const Navbar = () => {
  const [activeItem, setActiveItem] = useState('home'); // Estado para controlar o item ativo

  const handleItemClick = (item: string) => {
    setActiveItem(item);
    // Adicione lógica adicional aqui, como navegação para a página associada ao item clicado
  };

  return (
    <div>
      <nav className="navbar">
        <ul className="navbar-list">
          <li
            className={activeItem === 'home' ? 'navbar-item active' : 'navbar-item'}
            onClick={() => handleItemClick('home')}
          >
            Home
          </li>
          <li
            className={activeItem === 'about' ? 'navbar-item active' : 'navbar-item'}
            onClick={() => handleItemClick('about')}
          >
            <Link to="/list">Tabela de Dados</Link>
          </li>
          <li
            className={activeItem === 'contact' ? 'navbar-item active' : 'navbar-item'}
            onClick={() => handleItemClick('contact')}
          >
            <Link to="/register">Registre-se</Link>
          </li>
        </ul>
      </nav>
      <Outlet/>
    </div>
  );
};

export default Navbar;
