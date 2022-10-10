import React from 'react';
import {Container } from 'react-bootstrap';
import MDBCarousel from 'react-multi-carousel';




const Category = () => {
  const responsive = {
    // superLargeDesktop: {
    //   // the naming can be any, depends on you.
    //   breakpoint: { max: 4000, min: 3000 },
    //   items: 4
    // },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <Container>

<MDBCarousel className='MDBCard'  infinite={true} autoPlaySpeed={2000} responsive={responsive} >
  <div><img src='https://www.sowatool.com/INTERSHOP/static/WFS/Sowa-Webshop_CA-Site/-/Sowa/en_US/category/Drilling-L1.jpg' alt='category1'/> <h6>Drilling & Holemaking</h6></div>
  <div><img src='https://www.sowatool.com/INTERSHOP/static/WFS/Sowa-Webshop_CA-Site/-/Sowa/en_US/category/Indexable-L1.jpg' alt='category2'/><h6>Indexable Cutting Tools</h6></div>
  <div><img src='https://www.sowatool.com/INTERSHOP/static/WFS/Sowa-Webshop_CA-Site/-/Sowa/en_US/category/Measuring-L1.jpg' alt='category3'/><h6>Measuring & Inspecting</h6></div>
  <div><img src='https://www.sowatool.com/INTERSHOP/static/WFS/Sowa-Webshop_CA-Site/-/Sowa/en_US/category/Milling-L1.jpg' alt='category4'/><h6>Milling</h6></div>
  <div><img src='https://www.sowatool.com/INTERSHOP/static/WFS/Sowa-Webshop_CA-Site/-/Sowa/en_US/category/Threading-L1.jpg' alt='category6'/><h6>Tool Holding</h6></div>
  <div><img src='https://www.sowatool.com/INTERSHOP/static/WFS/Sowa-Webshop_CA-Site/-/Sowa/en_US/category/ToolHolding-L1.jpg' alt='category6'/><h6>Tool Holding</h6></div>
  <div><img src='https://www.sowatool.com/INTERSHOP/static/WFS/Sowa-Webshop_CA-Site/-/Sowa/en_US/category/Workholding-L1.jpg' alt='category7'/><h6>Workholding, Clamping & <br/>Fixturing</h6></div>
</MDBCarousel>;



{/*         
    <div className='category'>
    
        <ul>
     
            <li><img src='https://www.sowatool.com/INTERSHOP/static/WFS/Sowa-Webshop_CA-Site/-/Sowa/en_US/category/Drilling-L1.jpg' alt='category1'/><h6>Drilling & Holemaking</h6></li>
            <li><img src='https://www.sowatool.com/INTERSHOP/static/WFS/Sowa-Webshop_CA-Site/-/Sowa/en_US/category/Indexable-L1.jpg' alt='category2'/><h6>Indexable Cutting Tools</h6></li>
            <li><img src='https://www.sowatool.com/INTERSHOP/static/WFS/Sowa-Webshop_CA-Site/-/Sowa/en_US/category/Measuring-L1.jpg' alt='category3'/><h6>Measuring & Inspecting</h6></li>
            <li><img src='https://www.sowatool.com/INTERSHOP/static/WFS/Sowa-Webshop_CA-Site/-/Sowa/en_US/category/Milling-L1.jpg' alt='category4'/><h6>Milling</h6></li>
            <li><img src='https://www.sowatool.com/INTERSHOP/static/WFS/Sowa-Webshop_CA-Site/-/Sowa/en_US/category/Threading-L1.jpg' alt='category6'/><h6>Tool Holding</h6></li>
            <li><img src='https://www.sowatool.com/INTERSHOP/static/WFS/Sowa-Webshop_CA-Site/-/Sowa/en_US/category/ToolHolding-L1.jpg' alt='category6'/><h6>Tool Holding</h6></li>
            <li><img src='https://www.sowatool.com/INTERSHOP/static/WFS/Sowa-Webshop_CA-Site/-/Sowa/en_US/category/Workholding-L1.jpg' alt='category7'/><h6>Workholding, Clamping & <br/>Fixturing</h6></li>
    
        </ul>
       
      
    </div> */}
  
    </Container>
  )
}

export default Category
