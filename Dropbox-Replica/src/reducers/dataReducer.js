const initialState = {
    status : false, 
    error : '',
    // email : null,
    // isAuthenticated: false,
    loginStatus : false,
    isLoggedIn: null
    }

const _reducer = (state = initialState , action ) => {      
    switch(action.type){
        case 'REGISTRATION_SUCCESS' : {
            return {...state ,  status : action.payload.status , error : action.payload.error  }
        }

        case 'LOGGEDIN_USER' : {            
			return {...state , loginStatus : action.payload.status, error: action.payload.error} 
        }

        case 'CHECKUSER_REJECTED': {
            return {...state, status: action.payload.status, error: action.payload.error}
        }

        case 'RESET_VAR' : {
            return {...state, status: action.payload.status, loginStatus:action.payload.loginStatus, error: action.payload.error}
        }

        case 'SESSION_CHECK': {
            return {...state, isLoggedIn: action.payload}
        }

       

        

        default :   
        return state ;
    }
}

export default _reducer ;