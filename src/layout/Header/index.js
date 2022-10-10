import React from 'react';
import './header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'

import {Navbar, Row, Col, Form, InputGroup, Button} from 'react-bootstrap'

import { FiUsers,FiSliders, FiHeart, FiShoppingBag, FiAlignRight } from 'react-icons/fi';
import { FaSearch } from 'react-icons/fa';

import { useSelector } from 'react-redux';


const Header= () => {

  const {user} = useSelector(state=>state.auth)
  return (
    <div className='header'>
      <header>
     <Navbar className='Navbar sticky-top' style={{paddingBottom:'0px'}} variant='dark' expand="lg">
     <Row>
        <Col className='col-lg-4 col-md-4 col-sm-4'>
        <Navbar.Toggle className='ml-1' aria-controls="basic-navbar-nav" />
          <Navbar.Brand className='navBarBrand' href="#home"><img src='https://www.sowatool.com/INTERSHOP/static/WFS/Sowa-Webshop_US-Site/-/Sowa-Webshop_US-smb-responsive/en_US/Sowa.png' alt='sowa logo'/> <span className='header-tag-line'>TOOLING YOUR WORLD.</span></Navbar.Brand>
          
        
        </Col>
        <Col className='col-lg-2 col-md-2 col-sm-2'><h3 style={{color:'white',marginTop:'2vmax'}}>{user}</h3></Col>
        <Col className='col-lg-3 col-md-3 col-sm-3'>
        <InputGroup className='mt-2'>
                <Form.Control className='formInput'/>
                <Button variant='light' className='searchButton'><FaSearch  color='black'/></Button>
                </InputGroup>
        
        </Col>
    {/* <Navbar.Collapse id='basic-navbar-nav'>


    </Navbar.Collapse> */}

            <Col className='secondCol col-lg-3 col-md-3 col-sm-3'>

             <Row>
            

              <ul className='firstRow'>
                {/* <li><InputGroup>
                <Form.Control className='formInput'></Form.Control>
                <Button variant='light' className='searchButton'><FaSearch  color='black'/></Button>
                </InputGroup></li> */}
              <li><Link to='/login'><FiUsers color='white'/><span>Login</span></Link></li>
              <li><FiSliders color='white'/></li>
              <li><FiHeart color='white'/></li>
              <li><FiShoppingBag color='white'/> <span>0</span> </li>
              <li><FiAlignRight color='white'/></li>
              <li><img src='https://www.sowatool.com/INTERSHOP/static/WFS/Sowa-Webshop_CA-Site/-/-/en_US/img/countrycanada.png' alt='countrySwitch'/></li>
              </ul>
       
             </Row>
             <Row>
              <div className='contactInfor'>
                <span>1-800-265-8221</span>
                <span><a href='mailto:sales@sowatool.com'>sales@sowatool.com</a></span>
              </div>
             </Row>

            
            
            </Col>
   


       </Row>
        <Row className='secondNavbarRow'>
        <Navbar.Collapse id='basic-navbar-nav'>
        <Col className='col-lg-10 col-md-10 col-sm-10 me-auto'>
        
          <ul>
            <li><a href="/">Shop All Products</a></li>
            <li><a href="/">Shop By Brand</a></li>
            <li><a href="/">Download Centre</a></li>
            <li><a href="/">Contact Us</a></li>
            <li><a href="/">About Us</a></li>
            <li><a href="/">Careers</a></li>
            <li><a href="/">Support</a></li>
           
          
          </ul>
        </Col>
<Col className='col-lg-2 col-md-2 col-sm-2 me-auto'>
         <div className='lastNavLink'><a href="/">Quick Order</a></div>

</Col>

        </Navbar.Collapse>

        {/* <Nav className='seconNav'>
           <Nav.Item className='secondNavItem'><Nav.Link className='secondNavLink'>Shop All Products</Nav.Link></Nav.Item>
           <Nav.Item className='secondNavItem'><Nav.Link className='secondNavLink'>Shop By Brand</Nav.Link></Nav.Item>
           <Nav.Item className='secondNavItem'><Nav.Link className='secondNavLink'>Download Centre</Nav.Link></Nav.Item>
           <Nav.Item className='secondNavItem'><Nav.Link className='secondNavLink'>Contact Us</Nav.Link></Nav.Item>
           <Nav.Item className='secondNavItem'><Nav.Link className='secondNavLink'>About Us</Nav.Link></Nav.Item>
           <Nav.Item className='secondNavItem'><Nav.Link className='secondNavLink'>Careers</Nav.Link></Nav.Item>
           <Nav.Item className='secondNavItem'><Nav.Link className='secondNavLink'>Support</Nav.Link></Nav.Item>
           <Nav.Item className='secondNavItem'><Nav.Link className='secondNavLink'>Quick Order</Nav.Link></Nav.Item>
          </Nav> */}
          
          </Row>  
  
    </Navbar>
          </header>
    </div>
     
  )
}

export default Header
