import React from "react";
import Box from "./Box";

const About = () => {
    const boxDatas = [
        {
            id: 1,
            icon: "fas fa-user",
            bg_icon: "icon teal lighten-5",
            iconColor: "teal",
            title: "Learn with experts",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            id: 2,
            icon: "far fa-clipboard",
            bg_icon: "icon pink lighten-5",
            iconColor: "pink",
            title: "Learn anything",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            id: 3,
            icon: "fas fa-hourglass-half",
            bg_icon: "icon blue lighten-5",
            iconColor: "blue",
            title: "Flexible learning",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            id: 4,
            icon: "fas fa-school",
            bg_icon: "icon orange lighten-5",
            iconColor: "orange",
            title: "Update course",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
    ]
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col m5">
                        <div className="left-about">
                            <h4>Find out more about us co-learning Experiance</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quia saepe molestias, veniam necessitatibus aut numquam. Voluptatibus explicabo voluptas </p>
                            <div className="image">
                                <img src="https://image.freepik.com/free-photo/young-business-typing-netbook-keyboard-listening-music_8353-5973.jpg" alt="e-learning" />
                            </div>
                            {/* image url https://www.freepik.com/free-photo/young-business-typing-netbook-keyboard-listening-music_2455312.htm#page=1&query=e%20learning&position=8 */}
                        </div>
                    </div>
                    <div className="col m7">
                        <div className="row right-about">
                            {boxDatas.map(boxData => <Box key={boxData.id} icon={boxData.icon} bg_icon={boxData.bg_icon} text={boxData.text} title={boxData.title} iconColor={boxData.iconColor} />)}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default About;