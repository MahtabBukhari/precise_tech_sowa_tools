import React from 'react'
import { Carousel } from 'react-bootstrap'
import {FaChevronCircleLeft, FaChevronCircleRight} from 'react-icons/fa'

const Carousels = () => {
  return (
    <Carousel className='CarouselStyle' slide="true"  nextIcon={<FaChevronCircleRight color='dark' size='2em'/>} prevIcon={<FaChevronCircleLeft color='dark' size="2em"/>}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.sowatool.com/INTERSHOP/static/WFS/Sowa-Webshop_CA-Site/-/Sowa/en_US/homepage/Were-Hiring.jpg"
          alt="First slide"
          />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://www.sowatool.com/INTERSHOP/static/WFS/Sowa-Webshop_CA-Site/-/Sowa/en_US/homepage/Expanded-Offerings-Seco.jpg"
          className="d-block w-100"
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.sowatool.com/INTERSHOP/static/WFS/Sowa-Webshop_CA-Site/-/Sowa/en_US/homepage/WebsiteFeedbackRequestSM-1440x456-CADIS55.jpg"
          alt="Third slide"
        />

       
      </Carousel.Item>
    </Carousel>
  )
}

export default Carousels