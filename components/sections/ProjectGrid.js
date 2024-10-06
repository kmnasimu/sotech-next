import Link from 'next/link';
import React from 'react';

const ProjectGrid = ({ addClass }) => {
    const data = [
        {
            img: "project6-1.jpg",
            category: "CARPENTER",
            title: "Wood Carpenter"
        },
        {
            img: "project6-2.jpg",
            category: "CRAFTING",
            title: "Home Remodel"
        },
        {
            img: "project6-3.jpg",
            category: "WOOD CUTTER",
            title: "Kitchen Remodel"
        },
        {
            img: "project6-4.jpg",
            category: "CARPENTER",
            title: "Office Building"
        }
    ];
    return (
        <>
            <section className="project-section pb-90">
                <div className="large-container">
                    {/* Prject Carousel */}
                    <div className="row wow fadeInUp">
                        {data.map((item, i) => (
                            <div className="col-xl-3 col-sm-6 mb-30">
                                {/* Project Block */}
                                <div className="project-block-six">
                                    <div className="inner-box">
                                        <figure className="image"><Link href="/page-project-details"><img src={`images/resource/${item.img}`} alt="" priority /></Link></figure>
                                        <div className="content-box">
                                        <div className="shape-3" />
                                            <div className="inner">
                                                <span className="cat">{item.category}</span> <Link href="/page-project-details" className="theme-btn read-more"><i className="fa fa-plus"></i></Link>
                                                <h4 className="title"><Link href="/page-project-details">{item.title}</Link></h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>
        </>
    );
};

export default ProjectGrid;