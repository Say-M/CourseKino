import React from "react";

const Box = ({ icon, title, text, iconColor, bg_icon }) => {
    return (
        <>
            <div className="col s6">
                <div className="box">
                    <div className={bg_icon}><i style={{ color: iconColor }} className={icon}></i></div>
                    <h5>{title}</h5>
                    <p>{text}</p>
                </div>
            </div>
        </>
    )
}

export default Box;