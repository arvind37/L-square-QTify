// AppNavbar.js
import React from 'react';
import { Navbar, Container, InputGroup, FormControl } from 'react-bootstrap';
import qtifyLogo from '../assets/qtify-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import CustomButton from './button'; // Import the custom Button component
import './AppNavbar.css'; // Import custom CSS for Navbar styling

function AppNavbar() {
  return (
    <Navbar className="custom-navbar" expand="lg">
      <Container>
        {/* Logo */}
        <Navbar.Brand href="#home">
          <img
            src={qtifyLogo}
            width="67"
            height="34"
            className="d-inline-block align-top qtify-logo-img"
            alt="Qtify Logo"
          />
        </Navbar.Brand>
        {/* Search Bar */}
        <InputGroup className="search-bar">
          <FormControl
            placeholder="Search a album of your choice"
            aria-label="Search"
            aria-describedby="basic-addon2"
          />
          <CustomButton variant="primary" id="search-button">
            <FontAwesomeIcon icon={faSearch} />
          </CustomButton>
        </InputGroup>
        {/* Reusable Button */}
        <CustomButton variant="outline-light">Give Feedback</CustomButton>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
