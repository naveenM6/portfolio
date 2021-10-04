import {RiArrowDropRightLine} from 'react-icons/ri'
import './index.css';


const About = () => {
    return (
        <div className="about-container" id="about">
            <h1 className="about-header">About Me</h1>
            <div className="about-content-wrapper">
                <div className="about-content">
                    <p className="about-content-one">
                        Hello! My name is Naveen and I enjoy creating things that live on the internet. My interest in web development started back in 2018 when I joined in a start up and converting templates to webpages taught me a lot about HTML &amp; CSS!
                    </p>
                    <p className="about-content-two">
                        Fast-forward to today, and I've had the privilege of working at a start-up &amp; Self. My main focus these days is building accessible, inclusive products and digital experiences.
                    </p>
                    <p>Here are the few technologies that i've been working with recently:</p>
                    <div className="technologies">
                        <p>{<RiArrowDropRightLine className="arrows"/>} React Native</p>
                        <p>{<RiArrowDropRightLine className="arrows"/>} React</p>
                        <p>{<RiArrowDropRightLine className="arrows"/>} Express JS</p>
                    </div>
                </div>
                <div className="personal-image-container">
                    <img className="personalpic" src={require('./professionalpic.JPG').default} alt="PersonalPic"/>
                </div>
            </div>
        </div>
    )
}

export default About