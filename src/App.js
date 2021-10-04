import {Component} from 'react';
import {VscGithubAlt} from 'react-icons/vsc'
import {FiLinkedin} from 'react-icons/fi'

import Header from './components/Header'
import Main from './components/Main'
import About from './components/About'
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './App.css';

class App extends Component {
  state = {isLoading:true}

  componentDidMount() {
    setInterval(() => {
      this.setState({isLoading:false});
    }, 100);
  }

  render(){
    const {isLoading} = this.state;

    return (
      <div className="App">
        <div className="preloader">
          {isLoading?<header className="App-header">
            <img src={require('./assets/logo.svg').default} className="App-logo" alt="logo" />
          </header>:
          <div className="main-container">
            <div className="social-icons-container">
                <a href="https://github.com/naveenM6" target="_blank" rel="noopener noreferrer">
                  <VscGithubAlt className="social-icons git"/>
                </a>
                <a href="https://www.linkedin.com/in/naveenmalineni/" target="_blank" rel="noopener noreferrer">
                  <FiLinkedin  className="social-icons linkedin"/>
                </a>
                <span className="v-line"></span>
            </div>
            <div className="content-container">
              <Header/>
              <Main/>
              <About/>
              <Experience/>
              <Projects/>
              <Contact/>
              <Footer/>
            </div>
            <div className="mail-container">
            <a className="mail-anchor" href="mailto:naveenmalineni7@gmail.com">
              <p className="mail">naveenmalineni7@gmail.com</p>
            </a>
              <span className="v-line"></span>
            </div>
          </div>}
        </div>
      </div>
    )
  }
}

export default App;
