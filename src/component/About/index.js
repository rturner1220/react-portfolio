import React from 'react';
import profileImage from "../../assets/profile pic.jpg";


function About() {
    return (
        <section className="my-5">
            <h1 id="about">About me
            </h1>
            <img src={profileImage} className="my-2" style={{ width: "15%" }} alt="cover" />
        </section>
    )
}

export default About