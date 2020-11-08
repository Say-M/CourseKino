import React from "react"
import { Link } from "react-router-dom";
import hurtleBeeLogo from "../../images/03.png"

const Footer = () => {
    return <>
        <div className="bg-light py-4 mt-5">
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <p className="mt-5 pt-3">
                                CourseKino site is made with by <i className="fas fa-heart text-danger"></i> <a href="#home">HurtleBee Designer</a>
                            </p>
                        </div>
                        <div className="col-6 text-right">
                            <img style={{ width: "10rem" }} className="mb-1 mt-4" src={hurtleBeeLogo} alt="" />
                            <ul className="footer-contact">
                                <li><a href="mailto:hello@hurtleBee.com">hello@hurtlebee.com</a></li>
                                <li className="social-links">
                                    <a href="https://facebook.com/hurtlebee"><i className="fab fa-facebook-f"></i></a>
                                    <a href="https://instagram.com/hurtlebee"><i className="fab fa-instagram"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="border-top">
                    <div className="container mt-4">
                        <p>Copyright &copy; 2020 All rights reserved<span className="float-right"><Link to="/privacy">Privacy & Policy</Link></span>
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    </>
}

export default Footer;