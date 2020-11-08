import React from "react";
import background from "../../images/4419000.png"; //source https://colorlib.com/preview/#crafted
import Typewriter from 'typewriter-effect';

const Header = () => {
    return (
        <>
            <div className="container">
                <div className="header-wrapper row">
                    <div className="background"><img src={background} alt="" /></div>
                    <div className="header-content col-md-6">
                        <h5>Buy Udemy Course with</h5>
                        <h3 style={{ margin: "1rem 0", }}>
                            <Typewriter
                                options={{
                                    strings: ['Bkash', 'Rocket', 'Nagad'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h3>
                        <div className="buttons">
                            <button style={{ margin: ".5rem 0" }} className="btn-lg btn btn-theme text-white">Buy now</button>
                        </div>
                        <div className="details">
                            <div className="detail-item">
                                <span className="icon"><i className="fas fa-caret-up"></i></span>
                                <p>
                                    <span>Choose</span>
                                    <span>your destination</span>
                                </p>
                            </div>
                            <div className="detail-item">
                                <span className="icon"><i className="fas fa-caret-down"></i></span>
                                <p>
                                    <span>Choose</span>
                                    <span>your destination</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;