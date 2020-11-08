import React from "react";
import background from "../../images/4419000.png"; //source https://colorlib.com/preview/#crafted
import Typewriter from 'typewriter-effect';

const Header = () => {
    return (
        <>
            <div className="container">
                <div className="header-wrapper">
                    <div className="header-content">
                        <h3>Buy Udemy Course with</h3>
                        <h1 style={{ margin: "0.5rem 0", fontWeight: 600 }}>
                            <Typewriter
                                options={{
                                    strings: ['Bkash', 'Rocket', 'Nagad'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h1>
                        <div className="buttons my-3">
                            <button className="btn-lg btn btn-theme text-white">Buy now</button>
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
                    <div className="background"><img src={background} alt="" /></div>
                </div>
            </div>
        </>
    )
}

export default Header;