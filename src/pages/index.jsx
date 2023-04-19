import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';
import { Card, Row, Col } from 'react-bootstrap';
import image from "../Images/INO.png"

const index = () => {
  return (
    <>
      <Row md={12} lg={2} className='roww'>
        <Col>
          <Card bg='transparent' border='0' className='w-100 h-100 cr'>
            <Card.Body>
              <Card.Subtitle className="mb-2 text-dark" style={{ fontFamily: "cali" }}>Strategy, UI/UX.{'\u00A0\u00A0\u00A0'} {'\u00A0\u00A0\u00A0'} June 6, 2023</Card.Subtitle>
              <Card.Title><h1 style={{ fontFamily: "Calibri", fontWeight: 'bolder', fontSize: '65px', lineHeight: '1.2' }}>Eye On Cash!</h1></Card.Title>
              <Card.Text style={{ fontFamily: "Calibri", fontSize: '20px', lineHeight: '1.5', marginBottom: '1rem' }}>
                We’ve created a unique visual system and strategy across the wide Existing spectrum of visible mobile applications…
              </Card.Text>
              <Card.Text> <Link className='Link2' to='/demo'>Get Your INO Reporter <span style={{ fontSize: '25px' }}>→</span></Link></Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card bg='transparent' border='0' className='w-100 h-100'>
            <Card.Img variant="top" src={image}  />
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default index;
