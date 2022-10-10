import React from 'react'
import './HomePage.css'

import Carousels from '../../components/Carousels'
import Category from '../../components/Category'
import Cards from '../../components/Cards'
import { Row } from 'react-bootstrap'
import PageHelmet from '../../components/PageHelmet'

const Home = () => {
  return (
    <section className='homeSection'>
      <PageHelmet title={'Sowa Tool'}/>
      <Carousels/>
      <h2 className='categoryHeading'>Top Product Categories</h2>
      <Category/>

      <Cards  />

    <Row className='DistributerRow'>
      <h2>Authorized Distributors Of</h2>
      <ul>
        <li><a href='/'><img className='distributerImages' src='https://www.sowatool.com/INTERSHOP/static/WFS/Sowa-Webshop_CA-Site/-/Sowa/en_US/homepage/Authorized%20Distributors/mitutoyo-BW.png' alt='Mitutoyo'/></a></li>
        <li><a href='/'><img className='distributerImages'  src='https://www.sowatool.com/INTERSHOP/static/WFS/Sowa-Webshop_CA-Site/-/Sowa/en_US/homepage/Authorized%20Distributors/Starrett-BW.png' alt='Starrett'/></a></li>
        <li><a href='/'><img className='distributerImages'  src='https://www.sowatool.com/INTERSHOP/static/WFS/Sowa-Webshop_CA-Site/-/Sowa/en_US/homepage/Authorized%20Distributors/Seco_web300-BW.png' alt='Seco'/></a></li>
        <li><a href='/'><img className='distributerImages'  src='https://www.sowatool.com/INTERSHOP/static/WFS/Sowa-Webshop_CA-Site/-/Sowa/en_US/homepage/Authorized%20Distributors/GuehringDLogo_1_2-BW.png' alt='Guhring'/></a></li>
        <li><a href='/'><img className='distributerImages'  src='https://www.sowatool.com/INTERSHOP/static/WFS/Sowa-Webshop_CA-Site/-/Sowa/en_US/homepage/Authorized%20Distributors/Gray_Tools-BW.png' alt='Gray Tools'/></a></li>
      
      </ul>
    </Row>
      </section>
  )
}

export default Home