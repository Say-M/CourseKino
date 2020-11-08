import React from "react"

const FooterAbout = () => {
    return <>
        <div className="container mt-5">
            {/* <h1 className="text-center mb-4">About Us</h1> */}
            <div className="row footer-about">
                <div className="col-md-6">
                    <img width="100%" src="https://preview.colorlib.com/theme/imagine/images/undraw_bookmarks_r6up.svg" alt="" />
                </div>
                <div className="col-md-6">
                    <h3 className="mt-5">Any Course to Buy?</h3>
                    <p className="mt-3">Eos cumque optio dolores excepturi rerum temporibus magni recusandae eveniet, totam omnis consectetur maxime quibusdam expedita dolorem dolor nobis dicta labore quaerat esse magnam unde, aperiam delectus! At maiores, itaque.</p>
                    <ul>
                        <li>Laborum enim quasi at modi</li>
                        <li>Laborum enim quasi at modi</li>
                        <li>Laborum enim quasi at modi</li>
                    </ul>
                    <button style={{ borderRadius: "20px" }} className="mt-4 btn-lg btn btn-theme text-white">Buy Now</button>
                </div>
            </div>
        </div>
    </>
}

export default FooterAbout