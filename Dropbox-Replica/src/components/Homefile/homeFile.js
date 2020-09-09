import React, { Component } from 'react';
import { withRouter} from 'react-router';
import {connect} from 'react-redux';
import './homeFile.css';


class Homefile extends Component {
    render() {
    return (
      

        <div className="home-access-sections">
        <div className="home-access-section rowcancle col-xs-12 row">
            <h2 className="home-access-section__header">
                <div className="home-access-section__title col-md-10">
                    <div className="home-access-section__title-text">
                        <div className="ue-effect-container uee-home-section-header-starred">Starred</div>
                    </div>
                </div>
                <div className="home-section-header__button col-md-2">
                    <button className="button-as-link show-hide-section-button mc-button-styleless">
                        <span className="mc-button-content">Hide</span>
                    </button>
                </div>
            </h2>
            <div className="starred">
                <div className="starred-container">
                    <div className="home-access__empty-text starred--empty">
                    When you star items, they’ll show up here for easy access. 
                    <a href="/help/desktop-web/star-doc-file-folder" target="_blank" rel="noopener noreferrer">Learn more</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="home-access-section rowcancle col-xs-12 row">
            <h2 className="home-access-section__header">
                <div className="home-access-section__title col-md-10">
                    <div className="home-access-section__title-text">
                        <div className="ue-effect-container uee-home-section-header-starred">Recent</div>
                    </div>
                </div>
                <div className="home-section-header__button col-md-2">
                    <button className="button-as-link show-hide-section-button mc-button-styleless">
                        <span className="mc-button-content">Hide</span>
                    </button>
                </div>
            </h2>
            <div className="starred"><div className="starred-container">
                <div className="home-access__empty-text starred--empty">
                    Items you recently viewed show up here.
                    <a href="/help/desktop-web/star-doc-file-folder" target="_blank" rel="noopener noreferrer">Learn more</a>
                </div>
            </div>
        </div>
                
        </div>            
    </div>       


    );
  }
}


function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Homefile));
