import React, { Component } from 'react';
import './Auth.css';
import { withRouter} from 'react-router';
import {connect} from 'react-redux';
import thunk from 'redux-thunk';
import {register , setBackRegistered,resetVariable} from '../../action/authAction'   
import {login, setBackLogined} from '../../action/authAction'
import { format } from 'path';

class Auth extends Component {
    
  constructor(props){
    super(props);
    this.state = {
      showSignin : true,
      email : "",
      password :"",
      emailregistration: "",
      passwordregistration: "",
      fname: "",
      lname: ""
    }
      this.signup = this.signup.bind(this)
      this.onChangeEmail = this.onChangeEmail.bind(this)
      this.onChangePassword = this.onChangePassword.bind(this)
      this.onChangefname = this.onChangefname.bind(this)
      this.onChangelname = this.onChangelname.bind(this)
      this.onChangeemailregistration = this.onChangeemailregistration.bind(this)
      this.onChangepasswordregistration = this.onChangepasswordregistration.bind(this)
  }      

      
    componentWillReceiveProps(newProps) {    
      console.log(newProps)

      if(newProps.status === true){
        this.setState({showSignin : !this.state.showSignin});
        this.props.resetVariable()
        }

      if(newProps.loginStatus === true){
        
      this.props.resetVariable()
        newProps.history.push("/home")
      }
        
    }

    

    signup(){
      this.setState({showSignin : !this.state.showSignin});
    }
    
    onChangeEmail(e){
      console.log(e.target.value);
      this.setState({
        email : e.target.value
      })
    }

    onChangePassword(e){
      console.log(e.target.value);
      this.setState({
        password : e.target.value
      })
    }

    onChangefname(e){
      this.setState({
        fname : e.target.value
      });
    }

    onChangelname(e){
      this.setState({
        lname : e.target.value
      })
    }

    onChangeemailregistration(e){
      this.setState({
        emailregistration : e.target.value
      });
    
    }

    onChangepasswordregistration(e){
      this.setState({
        passwordregistration : e.target.value
      });
    }

  render() {
    console.log('Registration success : ') ; 
    console.log(this.props.status);
    console.log('login success:');
    console.log(this.props.loginStatus);  

    return (

      <section className="drawer-form">
        
        {
          this.state.showSignin === true ?

          <div className="signin-form">
            <div className="signin-subcontainer">
              <div className="signin-title">
                <span className="signin-title-enter">Enter</span>
              </div>
              <div className="signin-create">
                <span>or</span><a onClick={this.signup} id="signin-link">create an account</a>
              </div>
            </div>

          <div id="signupform">                
                <div className="form-group">
                  <input type="email"  onChange={this.onChangeEmail} className="form-control" id="Inputemail"  placeholder="E-mail" required></input>

                </div>
                <div className="form-group">
                  <input type="password" onChange={this.onChangePassword} className="form-control" id="exampleInputPassword1" placeholder="Password" required></input>
                </div>

                
                  <span className="recapcha1">
                    <div className="recaptcha-container">
                        <span>This page is protected by reCAPTCHA and is subject to the Google</span>
                          <a href="https://www.google.com/policies/privacy/" target="_blank">Privacy Policy</a>
                          <span>and</span>
                          <a href="https://www.google.com/policies/terms/" target="_blank">Terms of Service</a>
                      </div>
                  </span>
                
                <label>
                  <input type="checkbox" id="remember-checkbox"/><span>Remember me</span>
                </label><br/>                              
                
                <button className="buttonenter button4" onClick={() => {
                   console.log("kathan patel", this.state.email)

                  this.props.login(this.state.email,
                                   this.state.password)                  
                  }}><span>Enter</span></button>

                

                <div className="">
                  <button className="glink">
                  <i className="fa fa-google logo"></i> 
                  <span className="linkgoogle">Sign in with Google</span>
                  </button>
                </div>



                <a className="forget-passsword-link" href="https://www.dropbox.com/forgot?email_from_login=">Forgot password?</a>
              </div>
         </div>
         
        :

        <div className="signup-form">
          <div className="register-subcontainer">
            <div className="register-title">
              <span className="register-title-enter">List</span>
            </div>
            <div className="signin-link">
              <span>or</span><a onClick={this.signup} id="signup-link">Enter your account</a>
            </div>

          <div id="listform">   
            <div className="listfield">             
                <div className="form-group1">
                  <input type="fname" onChange={this.onChangefname} className="form-control1" id="firstName"  placeholder="First name" required></input>
                </div>
                <div className="form-group1">
                  <input type="lname" onChange={this.onChangelname} className="form-control1" id="lastName" placeholder="Last name" required></input>
                </div>
                <div className="form-group1">
                  <input type="email" onChange={this.onChangeemailregistration} className="form-control1" id="Inputemail"  placeholder="E-mail" required></input>
                </div>
                <div className="form-group1">
                  <input type="password" onChange={this.onChangepasswordregistration} className="form-control1 " id="exampleInputPassword1" placeholder="Passwords" required></input>
                </div>
            </div>

                
                  <span className="s123">
                    <div className="recaptcha-container">
                        <span>This page is protected by reCAPTCHA and is subject to the Google</span>
                          <a href="https://www.google.com/policies/privacy/" target="_blank">Privacy Policy</a>
                          <span>and</span>
                          <a href="https://www.google.com/policies/terms/" target="_blank">Terms of Service</a>
                      </div>
                  </span>
                
                <label>
                  <input type="checkbox" id="remember-checkbox"/><span>I agree with the<a href="https://www.dropbox.com/terms">Dropbox Terms</a></span>
                </label><br/>                              
                
                <button className="buttonenter button4" onClick={() => {
                  console.log("kathan patel", this.state.emailregistration)
                  
                  this.props.register(this.state.fname,
                                      this.state.lname,
                                      this.state.emailregistration,
                                      this.state.passwordregistration)
                  }}><span>List</span></button>

                <a className="forget-passsword-link" href="https://www.dropbox.com/forgot?email_from_login=">Forgot password?</a>
          </div>
          </div>
        </div>
      }
      </section>
    );
  }
} 


function mapStateToProps(state) {
  return {
      status : state.status,
      error : state.error,
      loginStatus: state.loginStatus,

      
  

  };
}

function mapDispatchToProps(dispatch) {
  return {
      login: (email,password) => dispatch(login(email,password)),
      setBackLogined: () => dispatch(setBackLogined()),
      register: (fname,lname,emailregistration,passwordregistration) => dispatch(register(fname,lname,emailregistration,passwordregistration)),
      setBackRegistered : () => dispatch(setBackRegistered()),
      resetVariable : () => dispatch(resetVariable()),
  };
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(props => <Auth {...props}/>));
