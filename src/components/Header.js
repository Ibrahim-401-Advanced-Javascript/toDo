import React from 'react';
// import { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import './Header.css'

function Header() {

  return (
    <header>
      

      <Navbar bg="dark" variant="dark" defaultactivekey="/home">

        <Nav.Item>
          <Nav.Link className="navlink" href="/home">Home</Nav.Link>
        </Nav.Item>

      </Navbar>
    
    </header>
  )

}

export default Header;