import React from "react";
import './About.css';
import ourmission from '../images/our-mission.jpg';
import ourvision from '../images/our-vision.jpg';
import ourvalues from '../images/our-values.jpg';

const About = () => {
    const aboutData = [
        {
          title: "Our Mission",
          image: ourmission,
          description: "To challenge minds with intriguing riddles and promote creative thinking."
        },
        {
          title: "Our Vision",
          image: ourvision,
          description: "To become the go-to platform for riddle enthusiasts worldwide."
        },
        {
          title: "Our Values",
          image: ourvalues,
          description: "Curiosity, Creativity, and Fun."
        }
    ];

    return (
        <div className="about-section">
            <h2>About Us</h2>
            <div className="about-cards">
                {aboutData.map((item, index) => (
                    <div 
                        className="about-card" 
                        key={index} 
                        style={{ backgroundImage: `url(${item.image})` }}
                    >
                        <div className="about-card-content">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default About;
