import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';

class Navbar extends Component {
   render() {
      return (
         <div>
            <Nav variant="tabs" defaultActiveKey="/home">
               <Nav.Item>
                  <Nav.Link href="/">Home</Nav.Link>
               </Nav.Item>

               <Nav.Item>
                  <Nav.Link eventKey="link-1">Blog</Nav.Link>
               </Nav.Item>

               <Nav.Item>
                  <Nav.Link eventKey="link-2">Assignments</Nav.Link>
               </Nav.Item>

               <Nav.Item>
                  <Nav.Link href="/info">Info</Nav.Link>
               </Nav.Item>
            </Nav>
         </div>
      );
   }
}

export default Navbar;