import React from 'react';

const publicationsData = [
    {
        title: "Wesee: Digital Cultural Heritage Interpretation for Blind and Low Vision People",
        authors: "Yalan Luo, Weiyue Lin, Yuhan Liu, Xiaomei Nie, Xiang Qian, Hanyu Guo.",
        conference: "INTERACT 2023",
        link: "https://link.springer.com/chapter/10.1007/978-3-031-42280-5_8",
        image: "assets/images/projects/p2.png",
        pdf: "assets/pdf/Wesee.pdf"
    },
    {
        title: "A Portable Method for Making Existing Touchscreens Accessible to Blind and Low Vision People in Self-Service Terminals",
        authors: "Weiyue Lin, Ting Li, Liu Liu, and Qian Zhu.",
        conference: "CHI 2023 LBW",
        link: "https://dl.acm.org/doi/10.1145/3544549.3585819",
        image: "assets/images/projects/p1.png",
        pdf: "assets/pdf/unfold.pdf"
    },
    {
        title: "Evergreen: A Mixed Reality Transformation for Experiencing Plant Dyeing",
        authors: "Haoran Hong, Weiyue Lin, Genshen Li, Hiroki Kobayashi, Yingying She, Yiran Chen, Pintong Xiao, Yinan Fu, Jiayi Lei",
        conference: "AHFE 2023",
        link: "assets/pdf/Hong_Haoran_91.pdf",
        image: "assets/images/projects/p4.png"
    },
    {
        title: "Landscape Rippling: Context-based Water-mediated Interaction",
        authors: "Weiyue Lin, Haoran Hong, Yingying She, Baorong Yang.",
        conference: "CAVW 2022",
        link: "https://onlinelibrary.wiley.com/doi/abs/10.1002/cav.2064",
        image: "assets/images/projects/p3.png",
        pdf: "assets/pdf/landscape.pdf"
    },
    {
        title: "An Approach of Short Advertising Video Generation Using Mobile Phone Assisted by Robotic Arm",
        authors: "Jiefeng Li, Yingying She, Lin Lin, Yalan Luo, Hao He, Weiyue Lin, Shengjing Hou.",
        conference: "CGI 2020",
        link: "https://link.springer.com/chapter/10.1007/978-3-030-61864-3_14",
        image: "assets/images/projects/p5.png",
        pdf: "assets/pdf/AIAD.pdf"
    }
];

const Publications = () => {
    return (
        <section className="latest section">
            <div className="section-inner shadow-sm rounded">
                <h2 className="heading">Publications</h2>
                <div className="content">
                    <hr className="divider" />
                    {publicationsData.map((publication, index) => (
                        <div className="item row" key={index}>
                            <a className="col-md-4 col-12" href={publication.pdf} target="_blank" rel="noopener noreferrer">
                                <img className="img-fluid project-image rounded shadow-sm" src={publication.image} alt={publication.title} />
                            </a>
                            <div className="desc col-md-8 col-12">
                                <h3 className="title">
                                    <a href={publication.link} target="_blank" rel="noopener noreferrer">{publication.title}</a>
                                </h3>
                                <p className="mb-2">{publication.authors}</p>
                                <h4 className="title">{publication.conference}</h4>
                                <p>
                                    <a className="more-link" href={publication.link} target="_blank" rel="noopener noreferrer">
                                        <i className="fas fa-external-link-alt"></i>Find out more
                                    </a>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Publications;