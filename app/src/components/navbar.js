import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';

class Navbar extends Component {
   render() {
      return (
         <div>
            <Nav justify variant="tabs" defaultActiveKey="/home">
               <Nav.Item>
                  <Nav.Link>Home</Nav.Link>
               </Nav.Item>

               <Nav.Item>
                  <Nav.Link>Blog</Nav.Link>
               </Nav.Item>

               <Nav.Item>
                  <Nav.Link>Assignments</Nav.Link>
               </Nav.Item>

               <Nav.Item>
                  <Nav.Link>Info</Nav.Link>
               </Nav.Item>
            </Nav>
         </div>
      );
   }
}

export default navbar;