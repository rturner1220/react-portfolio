import React from 'react'
import { GitHub } from '@material-ui/icons';
import { LinkedIn } from '@material-ui/icons';
import { Twitter } from '@material-ui/icons';



function Footer() {
    return (
        <div>
            <div className="footer">
                <div className="socialMedia">
                    <a href='https://github.com/rturner1220'>
                        <GitHub />
                    </a>
                    <a href='https://www.linkedin.com/in/rosaturner/'>
                        <LinkedIn />
                    </a>
                    <a href='https://twitter.com/rturner3770825'>
                        <Twitter />
                    </a>
                </div>
                <p className='copy'>&copy; 2022 Rosa Turner</p>

            </div>
        </div>
    )
}

export default Footer