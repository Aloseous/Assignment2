import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';


const FormList = ({data}) => {
  return (
    <Form className='w-50'>
      <Row className="mb-3">
        <Form.Group>
          <Col className='d-flex align-center'>
          <Form.Label className='col-4'>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            defaultValue=""
          />
          </Col>        
        </Form.Group>       
      </Row>
      <Button type="submit">Submit form</Button>
    </Form>
  )
}

export default FormList
