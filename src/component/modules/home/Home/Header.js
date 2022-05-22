import React from "react";
import '../Home.css'
import NavigationBar from '../../../commonComponent/navigationBar/NavigationBar'
const Header = () => {
  return (
    <div className="banner" >
      <NavigationBar />
      <div className="banner__content">
        <div className="container ">
          <div className="banner__text">
            <h3>Start your Business by</h3>
            <h1>Build your Own Restaurant</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              minus ut mollitia error molestiae quia.
            </p>
            <div className="banner__btn">
              <a href="/AdminLogin" className="Button" style={{fontSize:20}}>
                Start Business
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
