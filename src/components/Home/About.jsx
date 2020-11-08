import React from "react";
import Box from "./Box";

const About = () => {
    const boxDatas = [
        {
            id: 1,
            icon: "fas fa-hands-helping",
            title: "Quick Service",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis similique, facere quasi praesentium recusandae neque."
        },
        {
            id: 2,
            icon: "far fa-clipboard",
            title: "Easy and Convenient",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis similique, facere quasi praesentium recusandae neque."
        },
        {
            id: 3,
            icon: "fas fa-shield-alt",
            title: "Secured",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis similique, facere quasi praesentium recusandae neque."
        },
    ]
    return (
        <>
            <div className="container">
                <h1 className="text-center">Imagine Features</h1>
                <p className="text-center col-md-8 col-lg-6 offset-lg-3 offset-md-2 feature">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dolorem laboriosam odit quae exercitationem enim aspernatur, itaque qui temporibus deserunt.</p>
                <div className="row about mt-4">
                    {boxDatas.map(boxData => <Box key={boxData.id} icon={boxData.icon} text={boxData.text} title={boxData.title} />)}
                </div>
            </div>
        </>
    )
}
export default About;