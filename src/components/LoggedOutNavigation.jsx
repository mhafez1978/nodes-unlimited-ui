import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/roboto/700.css';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import FilterDramaRoundedIcon from '@mui/icons-material/FilterDramaRounded';
import '../App.css';

function LoggedOutNavigation() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Navbar
      className="d-flex align-items-center navbar-dark bg-dark fixed-top"
      bg="dark"
      expand="lg"
      style={{ height: '64px' }}
    >
      <div className="container">
        <Navbar.Brand
          style={{
            fontFamily: "'Lobster', cursive",
            fontWeight: '700',
            fontSize: '2em',
            color: 'tomato',
            display: 'flex',
            alignContent: 'center',
          }}
          href="/"
        >
          <FilterDramaRoundedIcon sx={{ fontSize: '1.4em', marginRight:'15px' }} /> Nodes Unlimited
        </Navbar.Brand>
        <Navbar.Toggle onClick={handleShow} />
        <Navbar.Collapse>
          <Nav className="d-xs-none d-sm-none d-md-none d-lg-block d-xxl-block">
            <NavLink
              to="Home"
              style={({ isActive }) => ({
                color: isActive ? '#fff' : '#fff',
                background: isActive ? 'tomato' : '',
                textDecoration: isActive ? 'none' : 'none',
              })}
            >
              <Button sx={{ color: '#fff' }}>Home</Button>
            </NavLink>
            <NavLink
              to="About"
              style={({ isActive }) => ({
                color: isActive ? '#fff' : '#fff',
                background: isActive ? 'tomato' : '',
                textDecoration: isActive ? 'none' : 'none',
              })}
            >
              <Button sx={{ color: '#fff' }}>About</Button>
            </NavLink>
            <NavLink
              to="Services"
              style={({ isActive }) => ({
                color: isActive ? '#fff' : '#fff',
                background: isActive ? 'tomato' : '',
                textDecoration: isActive ? 'none' : 'none',
              })}
            >
              <Button sx={{ color: '#fff' }}>Our Services</Button>
            </NavLink>
            <NavLink
              to="Blog"
              style={({ isActive }) => ({
                color: isActive ? '#fff' : '#fff',
                background: isActive ? 'tomato' : '',
                textDecoration: isActive ? 'none' : 'none',
              })}
            >
              <Button sx={{ color: '#fff' }}>Blog</Button>
            </NavLink>
            <NavLink
              to="Contact"
              style={({ isActive }) => ({
                color: isActive ? '#fff' : '#fff',
                background: isActive ? 'tomato' : '',
                textDecoration: isActive ? 'none' : 'none',
              })}
            >
              <Button sx={{ color: '#fff' }}>Contact</Button>
            </NavLink>
            <NavLink
              to="Login"
              style={({ isActive }) => ({
                color: isActive ? '#fff' : '#fff',
                background: isActive ? 'tomato' : '',
                textDecoration: isActive ? 'none' : 'none',
              })}
            >
              <Button sx={{ color: '#fff' }}>Client Login</Button>
            </NavLink>
          </Nav>
        </Navbar.Collapse>

        {/* Off-canvas menu */}
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </Navbar>
  );
}

export default LoggedOutNavigation;
