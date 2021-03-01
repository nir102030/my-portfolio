import React, { Component } from 'react';

export default class About extends Component {
	render() {
		return (
			<div>
				<section className="colorlib-about" data-section="about">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-12">
								<div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
									<div className="col-md-12">
										<div className="about-desc">
											<span className="heading-meta">About Us</span>
											<h2 className="colorlib-heading">Who Am I?</h2>
											<p>
												I am a fullstack developer. I studied Industrial Engeineering at
												Ben-Gurion University with IS as my major. Soon I've relized my future
												is in coding, and started to explore the programming world, especially
												mobile and web development. I've started to build my own projects, and I
												was part of a BGU Hackathon winner project, developing a smart system
												for exam checking using react and node.js.
											</p>
											<p>
												In addition, I work as an application engineer at Quality Forward, and I
												recently initiated a small business for web and mobile development,
												currently making its first steps.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="colorlib-about">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div
								className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
								data-animate-effect="fadeInLeft"
							>
								<span className="heading-meta">What I do?</span>
								<h2 className="colorlib-heading">Here are some of my expertise</h2>
							</div>
						</div>
						<div className="row row-pt-md">
							<div className="col-md-4 text-center animate-box">
								<div className="services color-1">
									<span className="icon">
										<i className="icon-bulb" />
									</span>
									<div className="desc">
										<h3>Web Development </h3>
										<p>
											I have experience building web applications using JavaScript,React,HTML,CSS
										</p>
									</div>
								</div>
							</div>
							<div className="col-md-4 text-center animate-box">
								<div className="services color-3">
									<span className="icon">
										<i className="icon-phone3" />
									</span>
									<div className="desc">
										<h3>Mobile Development</h3>
										<p>
											I have experience bulding mobile applications using React-Native for the
											front-end and node.js for the backend
										</p>
									</div>
								</div>
							</div>
							<div className="col-md-4 text-center animate-box">
								<div className="services color-5">
									<span className="icon">
										<i className="icon-data" />
									</span>
									<div className="desc">
										<h3>Data Bases</h3>
										<p>
											As coming from the IE background, I have good grasp over fundamental
											concepts of DB. I have experience using SQL and no-SQL framworks like
											SQL-Server and Mongo
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}
