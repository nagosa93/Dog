import React, { Component } from "react";
import myImg from './Katani.jpeg';
import './AboutMe.css';

class AboutMe extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div> 
                <div className="about-me">
                <h1>About Me </h1>
                <p> My name is Sara Nagosa , 26 old from Holon , a graduate of the Fullstuck software development course.
                    During the course I gained knowledge in languages: C #, Python, React, JavaScript NodeJS.
                    Databases: SQL and MOngoDB.
                    I know how to adapt myself to teamwork and freelance work as needed,
                     to manage my time effectively and to learn new professional areas on my own.
                    I am convinced that I will quickly integrate into the field.    
                     Looking for the first job that will fulfill my abilities  &#128522;</p>
                     <br/>
                     <div className="about-img">
                    <img src={myImg} alt="me and my dog"/>
                    </div>
                    </div>
            </div>
        );
    }
}

export default AboutMe;  