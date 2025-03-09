import React from 'react';

const AboutMe = () => {
    return (
        <section className="about section">
            <div className="section-inner shadow-sm rounded">
                <h2 className="heading">About Me</h2>
                <div className="content">
                    <p>
                        Hi, I'm a 1st-year PhD student at the University of Hong Kong and working under the supervision of 
                        <a href="https://scholar.google.com/citations?user=_0DuC1sAAAAJ&hl=zh-CN&oi=ao">Prof. HU, Xiao</a>. 
                        My research focuses on <b>Technology-enhanced Learning, Museum Education, and Human-Computer Interaction</b>. 
                        Feel free to explore this website to learn more about my research, publications, and other projects I'm excited about. 
                        Thanks for stopping by.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;