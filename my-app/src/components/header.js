import React, { useState } from 'react';
import {  ChevronDoubleDown, PersonCircle } from 'react-bootstrap-icons';
import { Link, useParams } from 'react-router-dom';
import './style.css';

function Header() {

  const [items, setItems] = useState([
    {
      id: 1,
      path: '/logout',
      title: 'Log Out',
      selected: false,
    },

    
  ]);
  const { path } = useParams();

  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleItemClick = (index) => {
    const newItems = [...items];
    newItems[index].selected = !newItems[index].selected;
    setItems(newItems);
    setDropdownVisible(!dropdownVisible);
  };
  
  return (
    <header className="header">
    <div className="logo">
      <h1 style={{color:'gray'}}>Logo</h1>
    </div>
    <div className="log" onClick={() => setDropdownVisible(!dropdownVisible)}>
      <PersonCircle size={24} color="rgba(105, 155, 247, 1)" />
      <p className="login-name">Hi, Admin!</p>[]
      <ChevronDoubleDown size={11} color="gray" />
      {dropdownVisible && (
        <div className="items">
          <ul>
            {items.map((item, index) => (
              <li key={item.id}>
                <Link
                  to={item.path}
                  className={`link ${item.path === path ? 'active' : ''} `}
                  onClick={() => handleItemClick(index)}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  </header>
  );
}

export default Header;