import React from "react";
import Pizza from '../../../assets/home/pizza.jpg'

const About = () => {
  return (
    <div className="about" id="About">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12 p-25">
            <h3>About Us</h3>
            <h1>WELCOME TO MAESTRO PIZZINI</h1>
            <p>
              Investigationes demonstraverunt lectores legere me lius quod ii
              legunt saepius. Claritas est etiam processus dynaus, quise
              sequitur mutationem consuetudium lectorum.
            </p>
          
          </div>
          <div className="col-sm-12 col-md-6 ">
            <div className="about__img">
              <img src={Pizza} alt="Pizza" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
