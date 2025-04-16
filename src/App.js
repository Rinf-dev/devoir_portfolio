import React from "react" ;
import {BrowserRouter,Routes,Route} from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Legal from './components/Legal';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import "../src/components/css/main.css";


function App() {

  return (
    <header >
        <div id="firstline">
          <p>John Doe</p>
          <Navbar expand="lg" className="text-white ">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className ="navbar-dark"/>
            <Navbar.Collapse id="basic-navbar-nav" >
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/services">Services</Nav.Link>
                <Nav.Link href="/Portfolio">Portfolio</Nav.Link>
                <Nav.Link href="/Contact">Contact</Nav.Link>
                <Nav.Link href="/Legal">Mentions Légales</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
    </Navbar>

      </div>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/About" element={<About/>}></Route>
              <Route path="/Contact" element={<Contact/>}></Route>
              <Route path="/Services" element={<Services/>}></Route>
              <Route path="/Legal" element={<Legal/>}></Route>
              <Route path="/Portfolio" element={<Portfolio/>}></Route>
              <Route path="/Navigation" element={<Navigation/>}></Route>          
            </Routes>
          </BrowserRouter>
          <Footer/>
    </header> 

);
}

export default App;
