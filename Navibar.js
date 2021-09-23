import React, { useState } from "react";
import { Nav, Navbar, Button, Modal, Form, ModalTitle, ModalBody, FormGroup, FormLabel, FormControl, FormText, FormCheck } from "react-bootstrap";
import ModalHeader from "react-bootstrap/esm/ModalHeader";
import { Link } from 'react-router-dom';

function NaviBar() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
  <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand>Savin Egor Prodaction</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link><Link to="/">Home</Link></Nav.Link>
              <Nav.Link><Link to="/users">User</Link></Nav.Link>
              <Nav.Link><Link to="/about">About</Link></Nav.Link>
            </Nav>
            <Nav>
              <Button variant="primary" className="mr-2" onClick={handleShow}>Log In</Button>
              <Button variant="primary" onClick={handleShow}>Sign out</Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>


        <Modal show={show} onHide={handleClose}>
          <ModalHeader closeButton>
            <ModalTitle>Log in</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup controlId="fromBasicEmail">
                <FormLabel>Email Adress</FormLabel>
                <FormControl type="email" placeholder="Enter email" />
                <FormText className="texe-muted">Well never shere your email</FormText>
              </FormGroup>
              <FormGroup controlId="fromBasicPassword">
                <FormLabel>Password</FormLabel>
                <FormControl type="password" placeholder="Enter email" />
              </FormGroup>
              <FormGroup controlId="fromBasicCheckbox">
                <FormCheck type="checkbox" label="Remeber me" />
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
  </>
  )}
  export default NaviBar;