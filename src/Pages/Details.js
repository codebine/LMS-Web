import React from 'react'
import '../css/style.css'
import "bootstrap/dist/css/bootstrap.min.css";
import course1 from '../img/course-1.jpg';
import course2 from '../img/course-2.jpg';
import course3 from '../img/course-3.jpg';

const Details = () => {
    return (
        <div>
            {/* <!-- Header Start --> */}
            <div className="container-fluid bg-main py-5 mb-5 page-header">
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 text-center">
                            <h1 className="display-3 text-white animated slideInDown">Courses Details</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center">
                                    <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                                    <li className="breadcrumb-item text-white active" aria-current="page">Courses Details</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Header End --> */}
            {/* <!-- Courses Start --> */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    </div>
                    <div className="row g-4 justify-content-center">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="course-item bg-light">
                                <div className="position-relative overflow-hidden">
                                    <img className="img-fluid" src={course1} alt="" />
                                    <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                                        <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: "30px 0 0 30px" }}>Read More</a>
                                        <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-3" style={{ borderRadius: "0 30px 30px 0" }}>Join Now</a>
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
                                        <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: "30px 0 0 30px" }}>Read More</a>
                                        <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-3" style={{ borderRadius: "0 30px 30px 0" }}>Join Now</a>
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
                                        <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: "30px 0 0 30px" }}>Read More</a>
                                        <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-3" style={{ borderRadius: "0 30px 30px 0" }}>Join Now</a>
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
        </div>
    )
}

export default Details
