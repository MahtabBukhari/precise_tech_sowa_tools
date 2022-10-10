import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'

const Cards = () => {
  return (
    <Row className='CardRow'>
        <Col className='col-lg-6 col-md-6 col-sm-6 CardCol'> 
        <Card className='Card' style={{ border:"none" }}>
      <Card.Img className='CardImage' variant="top" src="https://www.sowatool.com/INTERSHOP/static/WFS/Sowa-Webshop_CA-Site/-/Sowa-Webshop_CA/en_US/Homepage/New-Catalogue-Blog.jpg" />
      <Card.Body>
        <Card.Title className='CardTitle' >Check out the NEW Sowa Tool Catalogue</Card.Title>
        <Card.Text  className='CardText'>
        We've revamped our Sowa Tool Catalogue to now be interactive. You can now use this interactive online version of our catalogue to easily shop for products by clicking their product code to be taken directly to the product page on the website. You can also search the catalogue by the product code or name of an item to more easily find what you're looking for.
        </Card.Text>
        <Button className='CardButton' variant='dark' >Check it Out</Button>
      </Card.Body>
    </Card>
    </Col>

        <Col className='col-lg-6 col-md-6 col-sm-6 CardCol'>
        <Card className='Card' style={{ border:"none" }}>
      <Card.Img className='CardImage' variant="top" src="https://www.sowatool.com/INTERSHOP/static/WFS/Sowa-Webshop_CA-Site/-/Sowa/en_US/homepage/Were-Hiring-Blog.jpg" />
      <Card.Body>
        <Card.Title className='CardTitle'>Join the Sowa Tool Team!</Card.Title>
        <Card.Text className='CardText'>
        We're always looking for new individuals with unique perspectives and experiences to help us achieve our goals. Here at Sowa we want our employees to succeed just as much as our business, so setting them up for success is paramount.<br/>
Check out our current opportunities and learn more about how you can fit in the Sowa Tool Family below.
        </Card.Text>
        <Button className='CardButton' variant='dark' >Apply Now</Button>
      </Card.Body>
    </Card>
        </Col>
    </Row>
  )
}

export default Cards
