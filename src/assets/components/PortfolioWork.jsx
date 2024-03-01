import React from 'react'
import githubIcon from '../icons/github.svg'
import openIcon from '../icons/open.svg'
import './PortfolioWork.css'

function PortfolioWork(props) {
    return (
        <div className='portfolio-card'>

            <div className='row'>
                <div className='left-col'>
                    {
                        props.wip ? (
                        <div className='wip'>
                            <p>WIP</p>
                            <h4>{props.title}</h4>
                        </div>
                        ) : (<h4>{props.title}</h4>)
                    }
                    <p>{props.description}</p>
                </div>
                <img className='preview' src={props.preview} alt='preview image'></img>
            </div>

            <span className='divider-line'></span>

            <div className='row'>
                <p className='technologies'>{props.technologies}</p>
                <div className='icons'>
                    {props.url != null && <img className='icon' src={openIcon} alt='open project' onClick={() => { window.open(props.url, '_blank') }}></img>}
                    {props.github_url != null && <img className='icon' src={githubIcon} alt='github icon' onClick={() => { window.open(props.github_url, '_blank') }}></img>}
                </div>
            </div>

        </div>
    );
}

export default PortfolioWork;