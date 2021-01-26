import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
  const path = window.location.href.split('/')[3] || 'home';
  const [language, setLanguage] = useState('EN');
  const { onChangeLanguage } = props;


  const changeLanguage = () => {
    if (language === 'EN') {
      setLanguage('RO');
      localStorage.setItem('language', 'RO');
      if (onChangeLanguage) {
        onChangeLanguage('RO');
      }
    } else {
      setLanguage('EN');
      localStorage.setItem('language', 'EN');
      if (onChangeLanguage) {
        onChangeLanguage('EN');
      }
    }
  }

  useEffect(() => {
    const getLanguage = () => {
      setLanguage(localStorage.getItem('language'));
    }
    getLanguage();
  }, []);

  return (
    <div className="header-container">
      {/* <div className="flags-container">
        <p onClick={changeLanguage} className="language">{language}</p>
      </div> */}
      <ul className="navigation">
        <li className={`navigation-item hasBorder ${path === 'home' ? 'active' : 'inactive'}`}>
          <Link to="/">APIO</Link>
        </li>
        <li className={`navigation-item hasBorder ${path === 'products-and-services' ? 'active' : 'inactive'}`}>
          {
            language === 'EN'
            ? <Link to="/products-and-services">Products &amp; Services</Link>
            : <Link to="/products-and-services">Produse si Servicii</Link>
          }
        </li>
        <li className={`navigation-item hasBorder ${path === 'news' ? 'active' : 'inactive'}`}>
          <Link to="/news">{language === 'EN' ? 'News' : 'Stiri'}</Link>
        </li>
        <li className={`navigation-item ${path === 'contact' ? 'active' : 'inactive'}`}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;