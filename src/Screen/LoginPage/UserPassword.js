import React from 'react'
import { Button, Col,Form, Row } from 'react-bootstrap'
import { PrevStep } from '../../Redux/Actions/LoginFormAction'
import { useDispatch } from 'react-redux'

const UserPassword = ({handlePassword,input}) => {
  const dispatch = useDispatch()
  return (
    <>
   
    <Form.Group  controlId="formEmail">
                            <Form.Label className="label">Enter Your Password</Form.Label>
                            <Form.Control
                            className='formInput'
                            type="password"
                            defaultValue={input.password}
                            placeholder="user password"
                            name="password"
                            required
                            onChange={e=>handlePassword(e)}
                            />
                        </Form.Group>
                        <p className='loginParagraph'>Forgot your password?</p>
                        <Row>
                            <Col className='col-lg-6 col-md-6 col-sm-6'>
                            <Button variant="outline-warning" className='prevButton' onClick={()=>{dispatch(PrevStep())}}>prev</Button>

                            </Col>
                            <Col className='col-lg-6 col-md-6 col-sm-6'>
                            <Button variant="warning" type='submit' className='signinButton'>Sign in</Button>

                            </Col>
                            
                         
                        </Row>
   
</>
  )
}

export default UserPassword
