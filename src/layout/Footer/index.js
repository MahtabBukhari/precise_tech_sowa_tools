import React from 'react'
import './footer.css'
import { Button, Col, Container, Row } from 'react-bootstrap'
import{FiChevronsUp}from"react-icons/fi"

const Footer= () => {
  return (
    <div>
   <footer>

  
        <div className='topFooter'>
          <Container>
            <Row className='footerTopRow'>
              <Col className='col-lg-10 col-md-10 col-sm-10'>  <div className="topLeftPart"><strong>1-800-265-8221</strong><span>Monday - Friday, 8:00 am - 5:30 pm EST</span></div></Col>
              <Col className='col-lg-2 col-md-2 col-sm-2'>          <div className="topRightPart"><Button variant="light"><FiChevronsUp/></Button></div>
</Col>
            </Row>
          </Container>
        </div>
        <div className='bottomFooter'>
          <Container >
            <Row className='bottomRowBottom'>
              <Col className='col-lg-2 col-md-2 col-sm-2'>
             
               <ul className='footerUi'>
                <li>   <h6>ACCOUNT</h6></li>
                <li>Customer Login</li>
              <li>Order History</li>
              <li>Returns</li>
              <li>Ordering, Shipping & Payment</li>
              <li>Help & Support</li>
              </ul></Col>
              <Col className='col-lg-2 col-md-2 col-sm-2'>
              
               <ul className='footerUi'>
                <li><h6>DOWNLOADS</h6></li>
                <li>Catalogues & Brochures</li>
              <li>GS Tooling Package Forms</li>
              <li>RGA</li>
              <li>Quote Request Forms</li>
            
              </ul>
              </Col>
              <Col className='col-lg-2 col-md-2 col-sm-2'>
              
               <ul className='footerUi'>
                <li><h6>COMPANY</h6></li>
                <li>About Us</li>
              <li>Careers</li>
              <li>Customer Support</li>
              <li>Privacy Policy</li>
              <li>Request Information</li>
              <li>Give Us Your Feedback</li>
    
            
              </ul>
              </Col>
              <Col className='col-lg-3 col-md-3 col-sm-3'>

                <h6 className='findText'>FIND A DISTRIBUTOR</h6>
              </Col>
              <Col className='col-lg-3 col-md-3 col-sm-3 iconBottom'>
              <h6>WE'RE SOCIAL</h6>
              <ul className='footerUi' >
               
                <li><img src='https://www.sowatool.com/INTERSHOP/static/WFS/Sowa-Webshop_CA-Site/-/Sowa/en_US/Social%20Media%20Icons/Social%20Media%20Icons-01.png' alt='facebookIcon'/></li>
                <li><img src='https://www.sowatool.com/INTERSHOP/static/WFS/Sowa-Webshop_CA-Site/-/Sowa/en_US/Social%20Media%20Icons/Social%20Media%20Icons-02.png' alt='instagramIcon'/></li>
                <li><img src='https://www.sowatool.com/INTERSHOP/static/WFS/Sowa-Webshop_CA-Site/-/Sowa/en_US/Social%20Media%20Icons/Social%20Media%20Icons-03.png' alt='youtubeIcon'/></li>
                <li><img src='https://www.sowatool.com/INTERSHOP/static/WFS/Sowa-Webshop_CA-Site/-/Sowa/en_US/Social%20Media%20Icons/Social%20Media%20Icons-04.png' alt='LinkedinIcon'/></li>
            
              </ul>
              </Col>
             
            </Row>


          </Container>
        </div>
   
        </footer>
    </div>
  )
}

export default Footer
