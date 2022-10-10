
import {NEXT_STEP,PREV_STEP,LOGIN_FAIL,LOGIN_REQUEST,LOGIN_SUCCESS} from '../Types/LoginConstants'


export const MultiStepFormReducer = (state=1,action)=>{
    const {type}= action;
    switch(type){
        case NEXT_STEP:
         return   state = state +1;

         case PREV_STEP:

         return state=state-1;

         default:
            return state;

    }

}

export const LoginUser =(state={},action)=>{
    const {type,payload}=action;

    switch(type){
        case LOGIN_REQUEST:
              
             return{
                loading:true,
                
             }
        case LOGIN_SUCCESS:

                return{
                    loading:false,
                    authentication:true,
                    user:payload
                }
        case LOGIN_FAIL:
            return{ 
                loading:false,
                authentication:false
            }
        default:
            return state;
    }


}