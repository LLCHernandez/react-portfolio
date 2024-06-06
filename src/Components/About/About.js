//WHEN I am presented with the About Me section
//THEN I see a recent photo or avatar of the developer and a short bio about them

import React from 'react';
import './About.css';
import '../../Terminals/Terminal.css';

const About = () => {
return(
    <section className = "main section">
        <div className="about">
            <div className="text">
                <div  className="header">
                    <h1>About Me</h1>
                </div>
                <p>Hello there! I'm Luis H! I'm a web developer and designer based in San Antonio Texas.<br/>⠀</p>
                <p>Having spent a large chunk of my life in sales and the USN, I've finally found my passion at the web design and technology. I'm an exceptionally creative designer.<br/>⠀</p>
                <p>Currently I'm a student at <a className="school"href="https://techbootcamps.smu.edu/coding/" target="_blank" rel="noreferrer">Southern Methodist University Coding Bootcamp</a> and spend most of my time designing websites. 
                When I'm not busy, you can find me obsessing over D&D or Video Games. 
                <br/>⠀</p>
            </div>
            <div className="avatar"></div>
        </div>
    </section>
    );
}


export default About;