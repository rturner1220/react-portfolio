import React from 'react'
import { GitHub } from '@material-ui/icons';
import { LinkedIn } from '@material-ui/icons';
import { stackOverFlow } from '@material-ui/icons';



function Footer() {
    return (
        <container>
            <div className="footer">
                <div className="socialMedia">
                    <a href='https://github.com/rturner1220'>
                        <GitHub />
                    </a>
                    <a href='https://www.linkedin.com/in/rosaturner/'>
                        <LinkedIn />
                    </a>
                    <a href='https://stackoverflow.com/users/19164626/rmmc2022'>
                        <stackOverFlow />
                    </a>
                </div>
                <p>&copy; 2022 Rosa Turner</p>

            </div>
        </container>
    )
}

export default Footer