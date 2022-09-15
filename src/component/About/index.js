import React from 'react';
import profileImage from "../../assets/profile pic.jpg";


function About() {
    return (
        <section className="my-5">
            <h1 id="about">About me
            </h1>
            <img src={profileImage} className="my-2" style={{ width: "15%" }} alt="" />
            <div className="my-2">
                <p>
                    Front-end web developer leveraging background in psychology to provide unique perspectives on how end-users interact with websites and software platforms. Earned a certificate in Full Stack Web Development from the University Coding Boot Camp. Innovative problem-solver who is passionate about developing apps with a focus on mobile-first design and development. Strengths in creativity, teamwork, and building projects from ideation to execution.
                </p>
            </div>
        </section>
    )
}

export default About