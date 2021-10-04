import {Component} from 'react';
import './index.css';

class Header extends Component{
    state = {hamburgerclicked:false,makeBlur:true,hideHam:false,prevPos:window.pageYOffset,topVal:0}

    hamClicked = () => {
        this.setState({hamburgerclicked:true,makeBlur:false,hideHam:true});
    }

    closeHam = () => {
        this.setState({hamburgerclicked:false,makeBlur:true,hideHam:false});
    }

    /* onScroll = () => {
        let {prevPos} = this.state;
        let currentPos = window.pageYOffset;
        prevPos > currentPos ? this.setState({topVal: 0}) : this.setState({topVal: currentPos});
        prevPos = currentPos;
    } */

    scrolled = event => {
        console.log('scrolled')
    }

    render(){
        const {hamburgerclicked,makeBlur,hideHam,topVal} = this.state; 

        return(
            <div className={`header-container ${topVal !== 0 ? 'updatetop':''}`} onScroll={this.scrolled}>
                <a href="https://naveenmalineni.netlify.app/">
                    <img className="site-logo" src={require('./logo.svg').default} alt="logo" />
                </a>
                <div className={`overlay ${hamburgerclicked?"":"burger-data"} ${makeBlur?"":"hider"}`}>
                    <span className="closing" onClick={this.closeHam}>&times;</span>
                    <ul className="header-list overlay-content">
                        <a href="#about" className="nav-things">
                            <li className="header-content about">About</li>
                        </a>
                        <a href="#experience" className="nav-things">
                            <li className="header-content exp">Experience</li>
                        </a>
                        <a href="#work" className="nav-things">
                            <li className="header-content work">Work</li>
                        </a>
                        <a href="#contact" className="nav-things">
                            <li className="header-content contact">Contact</li>
                        </a>
                        <li>
                            <a href={require("./Naveen Mallineni.pdf").default} target="_blank" rel="noreferrer">
                                <button className="btn resume">Resume</button>
                            </a>
                        </li>
                    </ul>
                </div>
                <span className={`burger ${hideHam?"hamhider":""}`} onClick={this.hamClicked} >&#9776;</span>
            </div>
        )
    }
}

export default Header;