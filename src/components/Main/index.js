import './index.css';

const Main = () => {
    return(
        <div className="opening-container" id="home">
            <div className="opening-content">
                <p className="intro">Hi, my name is</p>
                <h1 className="name-header">Naveen Malineni.</h1>
                <h1 className="passion-header">I build things on Passion</h1>
                <p className="statement">I'm a Software Developer specializing in building <br/>
                exceptional app experiences. Currently, I'm focused on<br/>
                building accessible, human-centered products.</p>
                <a href="mailto:naveenmalineni7@gmail.com">
                    <button className="get-in-touch">Hire Me</button>
                </a>
            </div>
        </div>
    )
}

export default Main;