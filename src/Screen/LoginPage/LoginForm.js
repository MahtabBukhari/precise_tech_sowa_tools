import React, { useEffect, useState } from 'react'
import CheckoutSteps from '../../components/CheckOutSteps';
import { UserLogin } from '../../Redux/Actions/LoginFormAction'; //action
// import DisplayLogin from './DisplayLogin';
import UserEmail from './UserEmail';
import UserPassword from './UserPassword';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';


const LoginForm = () => {
    const dispatch = useDispatch()
    const step = useSelector(state=>state.steps)
    // const [step, setStep]=useState(1);
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const input={email,password}

        
    useEffect(()=>{

     
        dispatch(UserLogin(email,password))

    },[email,password,dispatch])

  

 

    // const nextStep=()=>{
       
    //     setStep(step+1)

    // }

    // const prevStep=()=>{
      
    //     setStep(step-1)
    // }

  

    const handleEmail =(e)=>{
      
        setEmail(e.target.value)

    }

    const handlePassword=(e)=>{
       
        setPassword(e.target.value)
    }

    switch(step){
        case 1:
            return(
                <>
                <CheckoutSteps step1/>
                 <h2 className='Loginheading'>Registered Customers</h2>
                 <p className='loginParagraph'>If you have an account, sign in with your email address.</p>
                <UserEmail handleEmail={handleEmail} input={input} />
                </>
            )
        case 2:
            return(
                <>
                <CheckoutSteps step1 step2/>
                <h2 className='Loginheading'>Registered Customers</h2>
                 <p className='loginParagraph'>If you have an account, sign in with your email address.</p>
                <UserPassword  handlePassword={handlePassword} input={input}/>
                </>
            )
      
        default:

            break;
    }
}

export default LoginForm
