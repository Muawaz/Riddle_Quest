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
          description: "We aim to provide the best services to our customers with a focus on quality and innovation."
        },
        {
          title: "Our Vision",
          image: ourvision,
          description: "To be a leader in our industry and set benchmarks for others to follow."
        },
        {
          title: "Our Values",
          image: ourvalues,
          description: "Integrity, Excellence, and Teamwork are at the core of everything we do."
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