import {NEXT_STEP,PREV_STEP,LOGIN_FAIL,LOGIN_REQUEST,LOGIN_SUCCESS } from '../Types/LoginConstants'


//we return the action if we have the only manage front end ui and fetching data form backend
export const NextStep=()=>{

    return{
        type:NEXT_STEP
    }

}

export const PrevStep=()=>{
    return { type:PREV_STEP}
}



//action for login

//we dispatch an action from action creator if the data is fetch form the backend

export const UserLogin=(email,password)=>(dispatch)=>{

    // email=''
    // password=''
  
    // if(!email | !password){
    //     return(
    //         alert('enter credentials')
    //     )

    // }

    try {

        dispatch({type:LOGIN_REQUEST})  // it work if we fetch data from backend and data take some time to come


        if(email || password){
            dispatch({type:LOGIN_SUCCESS,payload:'User'})
        }else if(email==='mahtab@gmail.com' && password==='1234'){
            dispatch({type:LOGIN_SUCCESS,payload:'Admin'})
        }else{
            dispatch({type:LOGIN_FAIL})
        }



        
    } catch (error) {

        dispatch({type:LOGIN_FAIL})
        
    }



}