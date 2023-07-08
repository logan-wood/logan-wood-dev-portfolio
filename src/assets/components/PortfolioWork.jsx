import React from 'react'
import githubIcon from '../icons/github.svg'
import openIcon from '../icons/open.svg'
import './PortfolioWork.css'

function PortfolioWork(props) {
    return (
        <div className='portfolio-card'>
            <div className='row'>
                <div className='left-col'>
                    <h4>{props.title}</h4>
                    <p>{props.description}</p>
                </div>
                <img className='preview' src={props.preview} alt='preview image'></img>
            </div>
            <span className='divider-line'></span>
            <p>{props.technologies}</p>
            <img src={openIcon} alt='open project' onClick={() => { window.open(props.url, '_blank') }}></img>
            <img src={githubIcon} alt='github icon' onClick={() => { window.open(props.github_url, '_blank') }}></img>
        </div>
    );
}

export default PortfolioWork;