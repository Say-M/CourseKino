import React from "react"
import CartItem from "./CartItem"
import M from 'materialize-css/dist/js/materialize.min.js'
import PaymentOption from "./PaymentOption"
import { Link } from "react-router-dom"

const Checkout = () => {
    const paymentOptions = [
        {
            image: "https://seeklogo.com/images/B/bkash-logo-250D6142D9-seeklogo.com.png",
            name: "Bkash"
        },
        {
            image: "https://seeklogo.com/images/D/dutch-bangla-rocket-logo-B4D1CC458D-seeklogo.com.png",
            name: "Rocket"
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Nagad_Logo_2019.svg/1200px-Nagad_Logo_2019.svg.png",
            name: "Nagad"
        }
    ]

    M.updateTextFields()
    return <>
        {/* <Navbar /> */}
        <div className="{/*grey lighten-4*/}" style={{ height: "100%" }}>
            <div className="container">
                <div className="row" style={{ marginBottom: 0, paddingBottom: "2rem" }}>
                    <div className="col-lg-7">
                        <h4>Payment Information</h4>
                        <div className="payment-section z-depth-1">
                            <h6>Choose a payment method</h6>
                            <div className="payment-opt row">
                                {paymentOptions.map((paymentOpt, i) => <PaymentOption key={i} image={paymentOpt.image} name={paymentOpt.name} />)}
                                <div className="input-field col-sm-12">
                                    <label htmlFor="promo">Promo Code</label>
                                    <input id="promo" type="text" className="form-control" />
                                </div>
                                <p className="col-sm-12">
                                    <label>
                                        <input type="checkbox" className="form-control" />
                                        <span>I accept all the <Link to="#">Terms and Conditions</Link></span>
                                    </label>
                                </p>
                                <div className="col-sm-5">
                                    <Link to="#" class="waves-effect waves-teal teal-text white btn" style={{ width: "100%" }}><i class="material-icons left">arrow_back</i>Back</Link>
                                </div>
                                <div className="col-sm-7">
                                    <Link to="#" class="waves-effect waves-light btn" style={{ width: "100%" }}> <i class="material-icons right">send</i>Confirm</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <h4>1 course in cart</h4>
                        <div className="shopping-cart z-depth-1">
                            <ul>
                                <CartItem />
                                <CartItem />
                                <CartItem />
                                <CartItem />
                            </ul>
                            <div className="total">
                                <p>Total Price<strong className="right">$100</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Checkout