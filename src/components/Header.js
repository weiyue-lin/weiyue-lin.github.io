import React from 'react';
import profileImage from '../assets/images/profile.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faLinkedinIn, faGithubAlt } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col">
                        <img className="profile-image img-fluid float-start rounded-circle" src={profileImage} alt="profile" />
                        <div className="profile-content">
                            <h1 className="name">Weiyue LIN</h1>
                            <p className="desc">Technology-enhanced Learning · Human-Computer Interaction</p>
                            <ul className="social list-inline">
                                <li className="list-inline-item">
                                    <a href="https://scholar.google.com/citations?user=ijxMmAMAAAAJ&hl=zh-CN&oi=ao">
                                        <FontAwesomeIcon icon={faGoogle} />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="https://www.linkedin.com/in/weiyue-lin-84196327b/">
                                        <FontAwesomeIcon icon={faLinkedinIn} />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#">
                                        <FontAwesomeIcon icon={faGithubAlt} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-md-auto">
                        <div className="dark-mode-switch d-flex">
                            <div className="form-check form-switch mx-auto mx-md-0">
                                <input type="checkbox" className="form-check-input me-2" id="darkSwitch" />
                                <label className="custom-control-label" htmlFor="darkSwitch">Dark Mode</label>
                            </div>
                        </div>
                        <a className="btn btn-cta-primary btn-download" href="pdf/CV.pdf" target="_blank" rel="noopener noreferrer">
                            <i className="fas fa-download"></i> Download My CV
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;