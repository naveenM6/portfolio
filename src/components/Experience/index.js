import {RiArrowDropRightLine} from 'react-icons/ri'
import {Component} from 'react';

import './index.css';

const companyName = [
    {
        id:0,
        companyName:'iB Hubs'
    },
    {
        id:1,
        companyName:'LpTechlogs'
    }
]

const companyContent = [
    {
        id:0,
        role:'Business Analyst',
        workDate: 'July 2020 - Present',
        jobContent: ['Build Business Models to make the reach of product to more in number.',
        'Interacting with the customers and understanding their pain points & addressing them.',
        'Making our product reach huge numbers and getting insights to make more Human centric approach in our product.']
    },
    {
        id:1,
        role:'FrontEnd Developer',
        workDate: 'July 2018 - December 2018',
        jobContent: ['Developed and maintained code for in-house and client websites primarily using HTML, CSS.',
        'Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness',
        'Got a good grip over html and css by converting templates to pages']
    }
]

class Experience extends Component {
    state = {activeId:0,activeTab:'tabColor'}

    updateID = id => {
        this.setState({activeId: id});
    }

    render() {

        const {activeId,activeTab} = this.state;

        return (
            <div className="experience" id="experience">
                <h1 className="experience-header">Where I've Worked</h1>
                <div className="experience-data">
                    <div className="experience-names">
                        {companyName.map(item => <p key={item.id} 
                        onClick={this.sendId = () => this.updateID(item.id)} 
                        className={`company-name ${activeId === item.id ? activeTab : ''}`}>{item.companyName}</p>)}
                    </div>
                    <div className="company-content">
                        <h3>{companyContent[activeId].role} @ <span>{companyName[activeId].companyName}</span></h3>
                        <p>{companyContent[activeId].workDate}</p>
                        {companyContent[activeId].jobContent.map(
                            item => <p key={item}>{<RiArrowDropRightLine className="arrows"/>} {item}</p>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default Experience;