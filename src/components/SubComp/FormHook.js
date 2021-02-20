import React, { useState } from "react";


export default function FormHook({ status, invalidName, invalidEmail, invalidNumber, submitForm, handleChange }) {

    return (
        <>
            <form
                className="contactForm"
                onSubmit={submitForm}
                action="https://formspree.io/f/xgepbega"
                method="POST"
            >
                {invalidName && <span className="errorName">please enter a name</span>}
                <input type="text" name="name" placeholder="NAME" onChange={handleChange} className={invalidName ? "error" : ""} />

                {invalidNumber && <span className="errorNumber">please enter a valid Number</span>}
                <input id="phone" type="phone" name="phone" placeholder="PHONE #" onChange={handleChange} className={invalidNumber ? "error" : ""} />

                {invalidEmail && <span className="errorEmail">please enter a valid email</span>}
                <input id="email" type="email" name="email" placeholder="EMAIL" onChange={handleChange} className={invalidEmail ? "error" : ""} />

                <div className="contactTypeBtns">
                    <div className="typeContainer">
                        <input type="radio" id="Buyer" name="contact-type" value="buyer"
                        />
                        <label htmlFor="Buyer">BUYING</label>
                    </div>

                    <div className="typeContainer">
                        <input type="radio" id="Seller" name="contact-type" value="seller"
                        />
                        <label htmlFor="Seller">SELLING</label>
                    </div>
                </div>

                {status === "SUCCESS" ? <p>Thanks!</p> : <button className="contactSubmitBtn" >SUBMIT</button>}
                {status === "ERROR" && <p>Ooops! There was an error.</p>}
            </form>
        </>
    )
}