import React from "react";
import background from "../../images/header-img.png"; //source https://colorlib.com/preview/#crafted
import Typewriter from 'typewriter-effect';

const Header = () => {
    return (
        <>
            <div className="header-wrapper row container">
                <div className="background"><img src={background} alt="" /></div>
                <div className="header-content col l6">
                    <h5>Buy Udemy Course with</h5>
                    <h3 style={{ marginTop: "0.5rem",  }}>
                        <Typewriter
                            options={{
                                strings: ['Bkash', 'Rocket', 'Nagad'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h3>
                    <div className="buttons">
                        <button style={{ margin: 0 }} className="btn-large flat btn-theme waves-effect waves-light">Buy now</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;