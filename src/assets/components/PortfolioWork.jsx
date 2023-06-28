import React from 'react'
import githubIcon from '../icons/github.svg'
import openIcon from '../icons/open.svg'

function PortfolioWork(props) {
    return (
        <div className='portfolio-card'>
            <h4>{props.title}</h4>
            <p>{props.description}</p>
            <img src={props.preview} alt='preview image'></img>
            <span className='divider-line'></span>
            <p>{props.technologies}</p>
            <img src={openIcon} alt='open project' onClick={() => { window.open(props.url, '_blank') }}></img>
            <img src={githubIcon} alt='github icon' onClick={() => { window.open(props.github_url, '_blank') }}></img>
        </div>
    );
}

export default PortfolioWork;