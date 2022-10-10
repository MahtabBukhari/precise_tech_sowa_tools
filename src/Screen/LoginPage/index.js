import React from 'react'
import './LoginPage.css'
import PageHelmet from '../../components/PageHelmet';
import LoginForm from './LoginForm';
import { Container, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';




const Login = () => {
    const navigate = useNavigate()

    const {loading, authentication} = useSelector(state=>state.auth)

    const handleSignIn=(e)=>{
        e.preventDefault();
        if(authentication){
          navigate('/')
        }else{
          alert('invalide credentials')
        }
     
    }


 
  return (
    <>
  { loading?<h1>loading...</h1> : <div>
        <PageHelmet title={'Login'}/>
        <h1 className='LoginTitle'>Customer Login</h1>
      <div className='LoginForm'>
      
  
      
        <Container>
            <Form  onSubmit={handleSignIn}>
            <LoginForm />
            </Form>
        </Container>
       
      </div>
    </div>}
    </>
  )
}

export default Login
