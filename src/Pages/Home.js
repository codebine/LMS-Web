/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
// import 'owl.carousel/dist/assets/owl.carousel.css';
import '../css/style.css'
import "bootstrap/dist/css/bootstrap.min.css";
import about from '../img/about.png';
import cat1 from '../img/cat-1.jpg';
import cat2 from '../img/cat-2.jpg';
import cat3 from '../img/cat-3.jpg';
import cat4 from '../img/cat-4.jpg';
import course1 from '../img/course-1.jpg';
import course2 from '../img/course-2.jpg';
import course3 from '../img/course-3.jpg';
import team1 from '../img/team-1.jpg';
import team2 from '../img/team-2.jpg';
import team3 from '../img/team-3.jpg';
import team4 from '../img/team-4.jpg';

const Home = () => {
	return (
		<div>
			
			{/* Home  */}
			<div id="home" class="hero-area">
				<div class="bg-image bg-parallax overlay" id='hero-img'></div>
				<div class="home-wrapper">
					<div class="container">
						<div class="row">
							<div class="col-md-8">
								<h1 class="white-text">Edusite Free Online Training Courses</h1>
								<p class="lead white-text">Libris vivendo eloquentiam ex ius, nec id splendide abhorreant, eu pro alii error homero.</p>
								<a class="main-button icon-button">Get Started!</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Home  */}
			{/* About  */}
			<div id="about" class="section">
				<div class="container">
					<div class="row">
						<div class="col-md-6">
							<div class="section-header">
								<h2>Welcome to Edusite</h2>
								<p class="lead">Libris vivendo eloquentiam ex ius, nec id splendide abhorreant.</p>
							</div>
							<div class="feature">
								<i class="feature-icon fa fa-flask"></i>
								<div class="feature-content">
									<h4>Online Courses </h4>
									<p>Ceteros fuisset mei no, soleat epicurei adipiscing ne vis. Et his suas veniam nominati.</p>
								</div>
							</div>
							<div class="feature">
								<i class="feature-icon fa fa-users"></i>
								<div class="feature-content">
									<h4>Expert Teachers</h4>
									<p>Ceteros fuisset mei no, soleat epicurei adipiscing ne vis. Et his suas veniam nominati.</p>
								</div>
							</div>
							<div class="feature">
								<i class="feature-icon fa fa-comments"></i>
								<div class="feature-content">
									<h4>Community</h4>
									<p>Ceteros fuisset mei no, soleat epicurei adipiscing ne vis. Et his suas veniam nominati.</p>
								</div>
							</div>
						</div>
						<div class="col-md-6">
							<div class="about-img">
								<img src={about} alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* About  */}
			{/* <!-- Service Start --> */}
			<div className="container-xxl py-5">
				<div className="container">
					<div className="row g-4">
						<div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
							<div className="service-item text-center pt-3">
								<div className="p-4">
									<i className="fa fa-3x fa-graduation-cap main mb-4"></i>
									<h5 className="mb-3">Skilled Instructors</h5>
									<p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
							<div className="service-item text-center pt-3">
								<div className="p-4">
									<i className="fa fa-3x fa-globe main mb-4"></i>
									<h5 className="mb-3">Online Classes</h5>
									<p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
							<div className="service-item text-center pt-3">
								<div className="p-4">
									<i className="fa fa-3x fa-home main mb-4"></i>
									<h5 className="mb-3">Home Projects</h5>
									<p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
							<div className="service-item text-center pt-3">
								<div className="p-4">
									<i className="fa fa-3x fa-book-open main mb-4"></i>
									<h5 className="mb-3">Book Library</h5>
									<p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- Service End --> */}
			{/* course  */}
			<div id="courses" class="section">
				<div class="container">
					<div class="row">
						<div class="section-header text-center">
							<h2>Explore Courses</h2>
							<p class="lead">Libris vivendo eloquentiam ex ius, nec id splendide abhorreant.</p>
						</div>
					</div>
					<div id="courses-wrapper">
						<div class="row">
							<div class="col-md-3 col-sm-6 col-xs-6">
								<div class="course">
									<a class="course-img">
										<img src={course1} alt="" />
										<i class="course-link-icon fa fa-link"></i>
									</a>
									<a class="course-title">Beginner to Pro in Excel: Financial Modeling and Valuation</a>
									<div class="course-details">
										<span class="course-category">Business</span>
										<span class="course-price course-free">Free</span>
									</div>
								</div>
							</div>
							<div class="col-md-3 col-sm-6 col-xs-6">
								<div class="course">
									<a class="course-img">
										<img src={course2} alt="" />
										<i class="course-link-icon fa fa-link"></i>
									</a>
									<a class="course-title">Introduction to CSS </a>
									<div class="course-details">
										<span class="course-category">Web Design</span>
										<span class="course-price course-premium">Premium</span>
									</div>
								</div>
							</div>
							<div class="col-md-3 col-sm-6 col-xs-6">
								<div class="course">
									<a class="course-img">
										<img src={course3} alt="" />
										<i class="course-link-icon fa fa-link"></i>
									</a>
									<a class="course-title">The Ultimate Drawing Course | From Beginner To Advanced</a>
									<div class="course-details">
										<span class="course-category">Drawing</span>
										<span class="course-price course-premium">Premium</span>
									</div>
								</div>
							</div>
							<div class="col-md-3 col-sm-6 col-xs-6">
								<div class="course">
									<a class="course-img">
										<img src={course3} alt="" />
										<i class="course-link-icon fa fa-link"></i>
									</a>
									<a class="course-title">The Complete Web Development Course</a>
									<div class="course-details">
										<span class="course-category">Web Development</span>
										<span class="course-price course-free">Free</span>
									</div>
								</div>
							</div>
						</div>


						<div class="row">
							<div class="col-md-3 col-sm-6 col-xs-6">
								<div class="course">
									<a class="course-img">
										<img src={course2} alt="" />
										<i class="course-link-icon fa fa-link"></i>
									</a>
									<a class="course-title">PHP Tips, Tricks, and Techniques</a>
									<div class="course-details">
										<span class="course-category">Web Development</span>
										<span class="course-price course-free">Free</span>
									</div>
								</div>
							</div>
							<div class="col-md-3 col-sm-6 col-xs-6">
								<div class="course">
									<a class="course-img">
										<img src={course1} alt="" />
										<i class="course-link-icon fa fa-link"></i>
									</a>
									<a class="course-title">All You Need To Know About Web Design</a>
									<div class="course-details">
										<span class="course-category">Web Design</span>
										<span class="course-price course-free">Free</span>
									</div>
								</div>
							</div>
							<div class="col-md-3 col-sm-6 col-xs-6">
								<div class="course">
									<a class="course-img">
										<img src={course3} alt="" />
										<i class="course-link-icon fa fa-link"></i>
									</a>
									<a class="course-title">How to Get Started in Photography</a>
									<div class="course-details">
										<span class="course-category">Photography</span>
										<span class="course-price course-free">Free</span>
									</div>
								</div>
							</div>
							<div class="col-md-3 col-sm-6 col-xs-6">
								<div class="course">
									<a class="course-img">
										<img src={course2} alt="" />
										<i class="course-link-icon fa fa-link"></i>
									</a>
									<a class="course-title">Typography From A to Z</a>
									<div class="course-details">
										<span class="course-category">Typography</span>
										<span class="course-price course-free">Free</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="center-btn">
							<a class="main-button icon-button">More Courses</a>
						</div>
					</div>
				</div>
			</div>
			{/* course  */}
			{/* <!-- About Start --> */}
			<div className="container-xxl py-5">
				<div className="container">
					<div className="row g-5">
						<div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" style={{ minHeight: "400px" }}>
							<div className="position-relative h-100">
								<img className="img-fluid position-absolute w-100 h-100" src={about} alt="" style={{ objectFit: "cover" }} />
							</div>
						</div>
						<div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
							<h6 className="navbar-light  bg-white text-start main pe-3">About Us</h6>
							<h1 className="mb-4">Welcome to eLEARNING</h1>
							<p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
							<p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
							<div className="row gy-2 gx-4 mb-4">
								<div className="col-sm-6">
									<p className="mb-0"><i className="fa fa-arrow-right main me-2"></i>Skilled Instructors</p>
								</div>
								<div className="col-sm-6">
									<p className="mb-0"><i className="fa fa-arrow-right main me-2"></i>Online Classes</p>
								</div>
								<div className="col-sm-6">
									<p className="mb-0"><i className="fa fa-arrow-right main me-2"></i>International Certificate</p>
								</div>
								<div className="col-sm-6">
									<p className="mb-0"><i className="fa fa-arrow-right main me-2"></i>Skilled Instructors</p>
								</div>
								<div className="col-sm-6">
									<p className="mb-0"><i className="fa fa-arrow-right main me-2"></i>Online Classes</p>
								</div>
								<div className="col-sm-6">
									<p className="mb-0"><i className="fa fa-arrow-right main me-2"></i>International Certificate</p>
								</div>
							</div>
							<a className="main-button icon-button py-3 px-5 mt-2" href="">Read More</a>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- About End --> */}
			{/* <!-- Categories Start --> */}
			<div className="container-xxl py-5 category">
				<div className="container">
					<div className="text-center wow fadeInUp" data-wow-delay="0.1s">
						<h1 className="mb-5">Courses Categories</h1>
					</div>
					<div className="row g-3">
						<div className="col-lg-7 col-md-6">
							<div className="row g-3">
								<div className="col-lg-12 col-md-12 wow zoomIn" data-wow-delay="0.1s">
									<a className="position-relative d-block overflow-hidden" >
										<img className="img-fluid" src={cat1} alt="" />
										<div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{ margin: "1px" }}>
											<h5 className="m-0">Web Design</h5>
											<small className="main">49 Courses</small>
										</div>
									</a>
								</div>
								<div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.3s">
									<a className="position-relative d-block overflow-hidden" href="">
										<img className="img-fluid" src={cat2} alt="" />
										<div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{ margin: "1px" }}>
											<h5 className="m-0">Graphic Design</h5>
											<small className="main">49 Courses</small>
										</div>
									</a>
								</div>
								<div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.5s">
									<a className="position-relative d-block overflow-hidden" href="">
										<img className="img-fluid" src={cat3} alt="" />
										<div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{ margin: "1px" }}>
											<h5 className="m-0">Video Editing</h5>
											<small className="main">49 Courses</small>
										</div>
									</a>
								</div>
							</div>
						</div>
						<div className="col-lg-5 col-md-6 wow zoomIn" data-wow-delay="0.7s" style={{ minHeight: "350px" }}>
							<a className="position-relative d-block h-100 overflow-hidden" href="">
								<img className="img-fluid position-absolute w-100 h-100" src={cat4} alt="" style={{ objectFit: "cover" }} />
								<div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{ margin: "1px" }}>
									<h5 className="m-0">Online Marketing</h5>
									<small className="main">49 Courses</small>
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- Categories End --> */}
			{/* <!-- Courses Start --> */}
			<div className="container-xxl py-5">
				<div className="container">
					<div className="text-center wow fadeInUp" data-wow-delay="0.1s">
						<h1 className="mb-5">Popular Courses</h1>
					</div>
					<div className="row g-4 justify-content-center">
						<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
							<div className="course-item bg-light">
								<div className="position-relative overflow-hidden">
									<img className="img-fluid" src={course1} alt="" />
									<div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
										<a className="flex-shrink-0 btn btn-sm btn-primary  px-3 border-end" style={{ borderRadius: "30px 0 0 30px" }}>Read More</a>
										<a className="flex-shrink-0 btn btn-sm btn-primary px-3" style={{ borderRadius: "0 30px 30px 0" }}>Join Now</a>
									</div>
								</div>
								<div className="text-center p-4 pb-0">
									<h3 className="mb-0">$149.00</h3>
									<div className="mb-3">
										<small className="fa fa-star main"></small>
										<small className="fa fa-star main"></small>
										<small className="fa fa-star main"></small>
										<small className="fa fa-star main"></small>
										<small className="fa fa-star main"></small>
										<small>(123)</small>
									</div>
									<h5 className="mb-4">Web Design & Development Course for Beginners</h5>
								</div>
								<div className="d-flex border-top">
									<small className="flex-fill text-center border-end py-2"><i className="fa fa-user-tie main me-2"></i>John Doe</small>
									<small className="flex-fill text-center border-end py-2"><i className="fa fa-clock main me-2"></i>1.49 Hrs</small>
									<small className="flex-fill text-center py-2"><i className="fa fa-user main me-2"></i>30 Students</small>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
							<div className="course-item bg-light">
								<div className="position-relative overflow-hidden">
									<img className="img-fluid" src={course2} alt="" />
									<div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
										<a className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: "30px 0 0 30px" }}>Read More</a>
										<a className="flex-shrink-0 btn btn-sm btn-primary px-3" style={{ borderRadius: "0 30px 30px 0" }}>Join Now</a>
									</div>
								</div>
								<div className="text-center p-4 pb-0">
									<h3 className="mb-0">$149.00</h3>
									<div className="mb-3">
										<small className="fa fa-star main"></small>
										<small className="fa fa-star main"></small>
										<small className="fa fa-star main"></small>
										<small className="fa fa-star main"></small>
										<small className="fa fa-star main"></small>
										<small>(123)</small>
									</div>
									<h5 className="mb-4">Web Design & Development Course for Beginners</h5>
								</div>
								<div className="d-flex border-top">
									<small className="flex-fill text-center border-end py-2"><i className="fa fa-user-tie main me-2"></i>John Doe</small>
									<small className="flex-fill text-center border-end py-2"><i className="fa fa-clock main me-2"></i>1.49 Hrs</small>
									<small className="flex-fill text-center py-2"><i className="fa fa-user main me-2"></i>30 Students</small>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
							<div className="course-item bg-light">
								<div className="position-relative overflow-hidden">
									<img className="img-fluid" src={course3} alt="" />
									<div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
										<a className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: "30px 0 0 30px" }}>Read More</a>
										<a className="flex-shrink-0 btn btn-sm btn-primary px-3" style={{ borderRadius: "0 30px 30px 0" }}>Join Now</a>
									</div>
								</div>
								<div className="text-center p-4 pb-0">
									<h3 className="mb-0">$149.00</h3>
									<div className="mb-3">
										<small className="fa fa-star main"></small>
										<small className="fa fa-star main"></small>
										<small className="fa fa-star main"></small>
										<small className="fa fa-star main"></small>
										<small className="fa fa-star main"></small>
										<small>(123)</small>
									</div>
									<h5 className="mb-4">Web Design & Development Course for Beginners</h5>
								</div>
								<div className="d-flex border-top">
									<small className="flex-fill text-center border-end py-2"><i className="fa fa-user-tie main me-2"></i>John Doe</small>
									<small className="flex-fill text-center border-end py-2"><i className="fa fa-clock main me-2"></i>1.49 Hrs</small>
									<small className="flex-fill text-center py-2"><i className="fa fa-user main me-2"></i>30 Students</small>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- Courses End --> */}
			{/* <!-- Team Start --> */}
			<div className="container-xxl py-5">
				<div className="container">
					<div className="text-center wow fadeInUp" data-wow-delay="0.1s">
						<h1 className="mb-5">Expert Instructors</h1>
					</div>
					<div className="row g-4">
						<div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
							<div className="team-item bg-light">
								<div className="overflow-hidden">
									<img className="img-fluid" src={team1} alt="" />
								</div>
								<div className="position-relative d-flex justify-content-center" style={{ marginTop: "-23px" }}>
									<div className="bg-light d-flex justify-content-center pt-2 px-1">
										<a className="btn btn-sm-square btn-primary mx-1" ><i className="fab fa-facebook-f"></i></a>
										<a className="btn btn-sm-square btn-primary mx-1" ><i className="fab fa-twitter"></i></a>
										<a className="btn btn-sm-square btn-primary mx-1" ><i className="fab fa-instagram"></i></a>
									</div>
								</div>
								<div className="text-center p-4">
									<h5 className="mb-0">Instructor Name</h5>
									<small>Designation</small>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
							<div className="team-item bg-light">
								<div className="overflow-hidden">
									<img className="img-fluid" src={team2} alt="" />
								</div>
								<div className="position-relative d-flex justify-content-center" style={{ marginTop: "-23px" }}>
									<div className="bg-light d-flex justify-content-center pt-2 px-1">
										<a className="btn btn-sm-square btn-primary mx-1" ><i className="fab fa-facebook-f"></i></a>
										<a className="btn btn-sm-square btn-primary mx-1" ><i className="fab fa-twitter"></i></a>
										<a className="btn btn-sm-square btn-primary mx-1" ><i className="fab fa-instagram"></i></a>
									</div>
								</div>
								<div className="text-center p-4">
									<h5 className="mb-0">Instructor Name</h5>
									<small>Designation</small>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
							<div className="team-item bg-light">
								<div className="overflow-hidden">
									<img className="img-fluid" src={team3} alt="" />
								</div>
								<div className="position-relative d-flex justify-content-center" style={{ marginTop: "-23px" }}>
									<div className="bg-light d-flex justify-content-center pt-2 px-1">
										<a className="btn btn-sm-square btn-primary mx-1" ><i className="fab fa-facebook-f"></i></a>
										<a className="btn btn-sm-square btn-primary mx-1" ><i className="fab fa-twitter"></i></a>
										<a className="btn btn-sm-square btn-primary mx-1" ><i className="fab fa-instagram"></i></a>
									</div>
								</div>
								<div className="text-center p-4">
									<h5 className="mb-0">Instructor Name</h5>
									<small>Designation</small>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
							<div className="team-item bg-light">
								<div className="overflow-hidden">
									<img className="img-fluid" src={team4} alt="" />
								</div>
								<div className="position-relative d-flex justify-content-center" style={{ marginTop: "-23px" }}>
									<div className="bg-light d-flex justify-content-center pt-2 px-1">
										<a className="btn btn-sm-square btn-primary mx-1" ><i className="fab fa-facebook-f"></i></a>
										<a className="btn btn-sm-square btn-primary mx-1" ><i className="fab fa-twitter"></i></a>
										<a className="btn btn-sm-square btn-primary mx-1" ><i className="fab fa-instagram"></i></a>
									</div>
								</div>
								<div className="text-center p-4">
									<h5 className="mb-0">Instructor Name</h5>
									<small>Designation</small>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- Team End --> */}

		</div>
	)
}

export default Home
