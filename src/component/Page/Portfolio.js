import React from 'react';
import Portfolio from '../../component/Portfolio';
import { PortfolioList } from '../../utils/PortfolioList';

function index() {
    return (
        <div className='projects'>
            <h1>Portfolio</h1>
            <div className='portfolioList'>
                {PortfolioList.map((project) => {
                    return <Portfolio key={project.name} name={project.name} image={project.image} link={project.link} web={project.web} />
                })}
            </div>
        </div>
    )
}


export default index