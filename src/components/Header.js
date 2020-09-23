import React from 'react';
// import { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import './Header.css'

// will track which tasks have been marked completed

function Header() {

  return (
    <header>
      <h2 id="header-title">Task Manager</h2>

      <Navbar bg="dark" variant="dark" defaultactivekey="/home">

        <Nav.Item>
          <Nav.Link className="navlink" href="/home">Home</Nav.Link>
        </Nav.Item>

        {/* <Nav.Item>
          <Nav.Link className="navlink" eventKey="history">History</Nav.Link>
        </Nav.Item> */}

      </Navbar>
    
    </header>
  )

}

export default Header;