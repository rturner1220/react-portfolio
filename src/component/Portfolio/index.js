import React from 'react';
import { GitHub } from '@material-ui/icons';

function Portfolio({ image, name, web, link }) {
    console.log(image, name, web, link)
    return (
        <div className='portfolio'>
            <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
            <div className="portfolio-box-caption">
                <div className="portfolio-box-caption-content">
                    <br />
                    <div className='icons'>
                        <a href={link}>
                            <GitHub /></a>
                        <a href={web}>Web
                        </a>
                    </div>
                    <h2> {name} </h2>
                </div >
            </div>
        </div>
    )
}

export default Portfolio;