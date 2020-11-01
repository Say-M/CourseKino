import React from "react";

const Course = () => {
    return <>
        <div className="course">
            <div className="card z-depth-0">
                <div className="card-image">
                    <img src="https://img-a.udemycdn.com/course/240x135/2395488_bd78_2.jpg?YNlzaPmlc6w0W-fwwoeCp2c8aqCqq766ZZ_IPf4YcUIU_-5dRAeiChJR2kFMvAxxTeWnm1CVdakV7vB9T8EQKCwuf0zgHPbYdJDWZdK0yL89KHgugGy1rslIUfhW77cX" alt="" />
                </div>
                <div className="card-content">
                    <span className="blue lighten-4 type">Development</span>
                    <h6><a href="#l">Lorem ipsum dolor sit amet consectetur adipisicing</a></h6>
                </div>
                <div className="card-action">
                    <div className="short-details">
                        <span><i class="material-icons">library_books</i><span>9x Lesson</span></span>
                        <span><i class="material-icons">access_time</i><span>2 hours</span></span>
                    </div>
                    <div className="stars">
                        <div className="review">
                            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half"></i><span style={{ color: "#323232" }}>455 votes</span>
                        </div>
                        <button className="btn-floating btn-small pulse waves-effect waves-light"><i class="material-icons">arrow_forward</i></button>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Course;