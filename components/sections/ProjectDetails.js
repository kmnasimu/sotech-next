import Link from 'next/link';
import React from 'react';
import ProjectSliderOne from '../slider/ProjectSliderOne';
const ProjectDetails = ({ alternate }) => {
	return (
		<>

			<section className="project-details">
				<div className="container">
					<div className="row">
						<div className="col-xl-12">
							<div className="project-details__top">
								<div className="project-details__img"><img src="images/resource/project-details.jpg" alt /></div>
							</div>
						</div>
					</div>
					<div className="row justify-content-center">
						<div className="col-xl-10">
							<div className="project-details__content-right">
								<div className="project-details__details-box">
									<div className="row">
										<div className="col">
											<p className="project-details__client">Date</p>
											<h4 className="project-details__name">10 January, 2023</h4>
										</div>
										<div className="col">
											<p className="project-details__client">Client</p>
											<h4 className="project-details__name">Kodesolution Ltd</h4>
										</div>
										<div className="col">
											<p className="project-details__client">Website</p>
											<h4 className="project-details__name">www.domain.com</h4>
										</div>
										<div className="col">
											<p className="project-details__client">Location</p>
											<h4 className="project-details__name">New York, USA</h4>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="project-details__content">
						<div className="row">
							<div className="col-xl-12">
								<div className="project-details__content-left">
									<h3 className="mb-4 mt-5">Here to Know About This Project</h3>
									<p className="">Lorem ipsum, dolor sit amet consectetur, adipisicing elit. Asperiores, repellat aliquid. Est corrupti officiis dignissimos deserunt sunt minima iusto quia saepe tempora consectetur dolor deleniti voluptatum et, eos vitae pariatur molestiae odit quos enim voluptas nobis ullam voluptatem cum iste. Dolore modi, animi optio, dignissimos delectus pariatur similique harum eos. </p>
									<p className="mb-5">Beyond more stoic this along goodness hey this this
										wow manatee mongoose one as since a far flustered impressive manifest Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum illo ea ad, nam quisquam optio vel tempora, minus placeat, ut nisi quam quos laboriosam eos quibusdam cum atque suscipit quod dignissimos magni doloribus facere eius soluta possimus. Officiis, autem similique sequi labore aliquid corporis illo omnis voluptate optio possimus doloremque, error reiciendis delectus ex tempore, architecto eaque, inventore nihil pariatur quibusdam facere reprehenderit? Doloribus deleniti sapiente, dicta, dolorem unde deserunt quisquam. Dolore consequuntur reiciendis corporis perspiciatis quam fuga magnam molestiae minima culpa ab beatae vel itaque cumque et adipisci autem nisi qui esse in, deserunt numquam hic? Et, eligendi, assumen daEst corrupti officiis dignissimos.</p>
									<ul className="list-style-two mb-0">
										<li><i className="fa fa-check-circle" /> Lorem ipsum dolor amet consectetur adipisicing elit</li>
										<li><i className="fa fa-check-circle" /> Vitae pariatur molestiae odit quos enim</li>
										<li><i className="fa fa-check-circle" /> Beyond more stoic this along goodness hey this</li>
										<li><i className="fa fa-check-circle" /> Officiis autem similique sequi labore</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-xl-12">
							<div className="project-details__pagination-box">
								<ul className="project-details__pagination list-unstyled clearfix">
									<li className="next">
										<div className="icon"> <Link href="/" aria-label="Previous"><i className="lnr lnr-icon-arrow-left" /></Link> </div>
										<div className="content">Previous</div>
									</li>
									<li className="count"><Link href="/"></Link></li>
									<li className="count"><Link href="/"></Link></li>
									<li className="count"><Link href="/"></Link></li>
									<li className="count"><Link href="/"></Link></li>
									<li className="previous">
										<div className="content">Next</div>
										<div className="icon"> <Link href="/" aria-label="Previous"><i className="lnr lnr-icon-arrow-right" /></Link></div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="project-section pt-0">
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <span className="sub-title">OUR PORTFOLIO</span>
                        <h2>We delivered results for <br />industry leaders</h2>
                    </div>
                </div>
                <div className="outer-box">
                    <ProjectSliderOne /> 
                </div>
            </section>

		</>
	);
};

export default ProjectDetails;