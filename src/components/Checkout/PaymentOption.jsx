import React, { useState } from "react"

const PaymentOption = ({ image, name }) => {
    return <>
        <div className="image" onClick={(e) => {
            if (e.target.parentElement.classList[0] === "image") {
                document.querySelectorAll(".image").forEach(img => {
                    img.classList.remove("active")
                })
                e.target.parentElement.classList += (" active")
            }

        }}>
            <img src={image} alt={name} />
        </div>
    </>
}

export default PaymentOption