import axios from 'axios';
// import jwt from 'jsonwebtoken';



const headers = {
    'Accept': 'application/json'
};


export function login(email , password) {
    console.log('Elements', email, password);

    return function(dispatch, error){
        fetch('http://localhost:3002/login', {
            method: 'POST', // or 'PUT',
            // mode: 'no-cors',
            credentials: 'include',
            body:   JSON.stringify( {
                        email: email,
                        password: password,
                        }), 
            headers: {
                ...headers,
                'Content-Type': 'application/json'
            }
       })
        .then(function (response) {
                console.log('Response', response);

                response.json().then(res => {
                    console.log('kathan',res);
                    dispatch({type : 'LOGGEDIN_USER' , payload: res})
                })     
            })
        .catch(function (error) {
            console.log('Rejected Request' , error)
    
            dispatch({type : 'CHECKUSER_REJECTED' , payload : error});
            })
    
    }
}
    

export function setBackLogined(){
    return {
        type: 'SET_BACK_LOGINED',    
        payload : { success: false }
    }
}


export function checkSession(){

    return function(dispatch, error){
        fetch('http://localhost:3002/checkSession', {
            method: 'GET', // or 'PUT',
            // mode: 'no-cors',
            credentials: 'include',
            headers: {
                ...headers,
                'Content-Type': 'application/json'
            } 
        })

        .then(function (response){
            console.log('palash', response);            
            response.json().then(res => {
                dispatch({type: 'SESSION_CHECK', payload: res.status});
            })
        })

        .catch (function(error){
            console.log('palash',error);
        })
}}



// registration api 

export function register(fname , lname, emailregistration , passwordregistration){

    console.log('Elements', fname , lname, emailregistration, passwordregistration);

    return function(dispatch){
        axios.post('http://localhost:3002/registerdropbox', {
            fname : fname, 
            lname : lname,
            emailregistration : emailregistration, 
            passwordregistration : passwordregistration,
        })
        .then(function (response) {
            console.log('Response', response);
            console.log(response.data)

            dispatch({type :'REGISTRATION_SUCCESS', payload : response.data});
        })
    
        .catch(function (error) {
            console.log(error);
        })
    }
}

    export function resetVariable(){
        return function(dispatch){
            dispatch({ type: 'RESET_VAR', payload:{status: false, error: "", loginStatus:false}})
        }
    }

    export function setBackRegistered(){
        return {
            type: 'SET_BACK_REGISTERED',    
            payload : { success: false }
        }
    }