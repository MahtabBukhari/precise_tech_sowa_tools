import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { NextStep } from '../../Redux/Actions/LoginFormAction'


const UserEmail = ({handleEmail,input}) => {

  const dispatch = useDispatch()

    // this method callNext help us to identify the email is currect or not 
    const callNext=()=>{
// get the last words of email that start from @ to end
        const ema = input.email.slice(-10,)
// console.log(ema)
       ema ==='@gmail.com'?dispatch(NextStep()):alert('please enter your email')
    }
  return (
    <>
        <Form.Group  controlId="formEmail">
                                <Form.Label className="label">Enter Your Email</Form.Label>
                                <Form.Control
                                type="email"
                                className='formInput'
                                placeholder='user email'
                                defaultValue={input.email}
                                name="email"
                                required
                                onChange={e=>handleEmail(e)}
                                />
                            </Form.Group>
                            
                             <Button variant="warning"  className='nextButton'  onClick={()=>{callNext()}}>Next</Button>
                            
                        
                        </>
  )
}

export default UserEmail
