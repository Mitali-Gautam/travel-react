// Navbar.js
import React from 'react';
import menuItemsArr from './MenuItems';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
      <div className="container">
        <a className="navbar-brand" href="index.html">Pacific<span>Travel Agency</span></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="oi oi-menu"></span> Menu
        </button>

        <div className="collapse navbar-collapse" id="ftco-nav">
          <ul className="navbar-nav ml-auto">
            {menuItemsArr.map((item,index) => (
              <li key={index} className="nav-item">
                <a href={item.url} className={item.cName}>{item.title}</a>
              </li>
            )
            )}
          </ul>
        </div>
      </div>
	</nav>
  )
}

export default Navbar;