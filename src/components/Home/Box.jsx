import React from "react";

const Box = ({ icon, title, text }) => {
    return (
        <>
            <div className="col-md-4 col-sm-6">
                <div className="box">
                    <div className="icon"><i className={icon}></i></div>
                    <h5>{title}</h5>
                    <p>{text}</p>
                </div>
            </div>
        </>
    )
}

export default Box;