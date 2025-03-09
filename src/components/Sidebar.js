import React from 'react';

const Sidebar = () => {
    return (
        <div className="secondary col-lg-4 col-12">
            <aside className="info aside section">
                <div className="section-inner shadow-sm rounded">
                    <h2 className="heading sr-only">Basic Information</h2>
                    <div className="content">
                        <ul className="list-unstyled">
                            <li><i className="fas fa-map-marker-alt"></i><span className="sr-only">Location:</span>No.5 Yiheyuan Road Haidian District, Beijing 100871 P.R. China</li>
                            <li><i className="fas fa-envelope"></i><span className="sr-only">Email:</span><a href="mailto:linweiyue@stu.pku.edu.cn">linweiyue@stu.pku.edu.cn</a></li>
                            <li><i className="fas fa-link"></i><span className="sr-only">Phone:</span><a href="tel:+8618960110978">+86-18960110978</a></li>
                        </ul>
                    </div>
                </div>
            </aside>

            <aside className="testimonials aside section">
                <div className="section-inner shadow-sm rounded">
                    <h2 className="heading">News</h2>
                    <div className="content">
                        <div className="item">
                            <blockquote className="quote">
                                <p>Jul. 2024: Graduated from Peking University in one piece! So grateful for all the support I've received along the way.</p>
                            </blockquote>
                            <blockquote className="quote">
                                <p>Apr. 2024: Received a Hong Kong PhD Fellowship Scheme in the 2024/25 academic year.</p>
                            </blockquote>
                            <blockquote className="quote">
                                <p>Jul. 2023: Started internship in Prof. Fan's APEX Group as a RA in Computational Media and Arts (CMA) Thrust, HKUST(GZ).</p>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </aside>

            <aside className="education aside section">
                <div className="section-inner shadow-sm rounded">
                    <h2 className="heading">Education</h2>
                    <div className="content">
                        <div className="item">
                            <h3 className="title"><i className="fas fa-graduation-cap"></i> MSc Digital Arts and Technology</h3>
                            <h4 className="university">Peking University <span className="year">(2021-2024)</span></h4>
                        </div>
                        <div className="item">
                            <h3 className="title"><i className="fas fa-graduation-cap"></i> BSc Digital Media Technology</h3>
                            <h4 className="university">Xiamen University <span className="year">(2017-2021)</span></h4>
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    );
};

export default Sidebar;