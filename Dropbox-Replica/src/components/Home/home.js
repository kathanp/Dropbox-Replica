import React from 'react';
import './home.css';
import { withRouter} from 'react-router';
import {connect} from 'react-redux';
import {checkSession} from '../../action/authAction';
import {uploadFile} from '../../action/uploadFileAction'
import HomeFile from '../Homefile/homeFile';


// import HomeFile from '../Homefile/homeFile';

class Home extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
    }
    
}


    handleSubmit(e){       
        e.preventDefault();
        console.log(e.target.files[0]); 
        
        
    };
    
componentWillMount(newProps){

    
    this.props.checkSession();
        console.log(newProps);
}

componentWillReceiveProps(newProps) {    
    console.log(newProps);
    console.log("session is", newProps.isLoggedIn);

    if(newProps.isLoggedIn === false){
        newProps.history.push("/auth");    
    }    
}





 render() {
        
    return (
    <React.Fragment>
        <div className="navigation-area">
            <div className="nav-panel">
                <a className="home_button" href="https://www.dropbox.com/">
                    <i className="fab fa-dropbox fa-dropboxsize"></i>
                </a>
                <div className="nav_contents">
                        <ul className="nav_product" >
                            <li className="list4">
                                <div className="products_wrapper">
                                    <span className="">
                                        <a href="https://www.dropbox.com/h?role=personal" className="elementprops" id="home" target="_self" >Home</a>
                                    </span> 
                                </div>
                                   
                            </li>
                            <li className="list4">
                                <span className="">
                                    <div className="products_wrapper">
                                    <a href="https://www.dropbox.com/home" className="elementprops" id="home" target="_self" >files</a>
                                    </div>
                                </span>
                            </li>
                            <li className="list4">
                                <span className="effect-container">
                                    <div className="products_wrapper">
                                    <a href="https://www.dropbox.com/paper?_tk=left_nav_paper&role=personal" className="elementprops" id="home" target="_self" >Papers</a>
                                    </div>
                                </span>
                            </li>
                            <li className="list4">
                                <span className=""> 
                                    <div className="products_wrapper">
                                    <a href="https://www.dropbox.com/showcases?_tk=web_left_nav_bar" className="elementprops" id="home" target="_self" >Showcases</a>
                                    </div>
                                </span>
                            </li>
                            
                           
                        </ul>
                </div>


            </div>
        </div>
        
        <div className=" ktgtjn row">
            <div className ="home-header row">
                <div className="home-header-home col-xs-9"> 
                    <h1 className="home-h1">Home</h1>
                </div>
                <div className="home-header-search col-xs-3 row">
                    <div className="Searchbar_input col-xs-6">
                        <div  aria-label="Search" className="search-bar__button"> 
                            <i className="fa fa-search searchIcon"></i>
                            <input className="searchBox" type="search" name="search" placeholder="Search"></input>
                        </div>
                    </div>   
                    <div className="top-menu col-xs-6">
                        <i className="fa fa-bell-o headerbell" aria-hidden="true"></i>
                    </div>
                </div>
            </div>

            <div className="home row">     
                <div className="primary-sidebar col-xs-9">
                                
                   <HomeFile/>
                </div>

                <div className="secondary-sidebar-shadow  col-xs-3">
                    <div className="secondary-sidebar">
                        <div className="home-access-sidebar">
                            <div className="upload-action col-xs-12">
                                <div className="kk-popover">
                                    <button className=" btn btn-secondary upload-button col-xs-12" tabIndex="0" data-toggle="collapse" data-target="#contentbutton" aria-haspopup="true" aria-expanded="false">Create new file </button>
                                        <nav role="menu" tabIndex="-1" className="mc-popover-content-menu">
                                            {/* <div className="mainbox" id="contentbutton">
                                                <div className="upload-btn-wrapper kathan">
                                                    <form className="upload-file" onSubmit={this.handleSubmit} encType="multipart/form-data" >
                                                        <input type='file' className="filefolder" encType="multipart/form-data" onChange={(e) => {
                                                                
                                                                // console.log(e.target.files[0]); 
                                                                var file = e.target.files[0];   
                                                                console.log('File to be uploaded ' , file ) ; 
                                                                

                                                                
                                                            this.props.uploadFile( this.props.email, file, "asdasd", "fdfdsfd");                                                                                         
                                                          }}
                                                          />
                                                        <span id='button'>File</span>
                                                    </form> 
                                                    <div className="upload-folder">
                                                        <input type='file' className="filefolder1"/>
                                                        <span id='button'>Folder</span>
                                                    </div> 
                                                </div>
                                            </div>  */}
                                        </nav>
                                </div>                       
                            </div>
                        </div>
                        

                        <ul className="main-action3">
                            <li className="action-lists-element">                                                                      
                                <button className="action-context" role="file">
                                    <form className="upload-file" onSubmit={this.handleSubmit} encType="multipart/form-data" >
                                                            <input type='file' className="filefolder" encType="multipart/form-data" onChange={(e) => {
                                                                    
                                                                    // console.log(e.target.files[0]); 
                                                                    var file = e.target.files[0];   
                                                                    console.log('File to be uploaded ' , file ) ; 
                                                                    

                                                                    
                                                                this.props.uploadFile( this.props.email, file, "asdasd", "fdfdsfd");                                                                                         
                                                            }}
                                                            />
                                                            <span id='button'>File</span>
                                                        </form> 
                                <i className="far fa-file-archive fa-sm icon-size tertiary-icon-wrapper"></i>Upload files</button>
                                
                            </li>
                            <li className="action-lists-element">
                                <button className="action-context">
                                <i className="far fa-file fa-sm icon-size tertiary-icon-wrapper"></i>Upload folder</button>
                               
                            </li>
                            <li className="action-lists-element">
                                <button className="action-context"><i className="far fa-file-archive fa-sm icon-size tertiary-icon-wrapper"></i> New shared folder </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    <div>
            
            
           </div>
    </ React.Fragment>

 );
 }}

 
function mapStateToProps(state) {
    return {
        isLoggedIn : state.isLoggedIn
       
       
        
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {      
        checkSession : () => dispatch(checkSession()),
        uploadFile : (email , file , filename , directory) => dispatch(uploadFile(email , file , filename , directory))
    };
  }
  
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(props => <Home {...props}/>));
