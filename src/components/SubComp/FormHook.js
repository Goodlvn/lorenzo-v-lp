import React, { useState, useRef } from "react";

export default function FormHook() {

    const [contactState, setContactState] = useState({
        status: "",
        name: "",
        phone: "",
        email: "",
        nameErr: false,
        emailErr: false,
        phoneErr: false
    })


    const { name, phone, email, nameErr, phoneErr, emailErr } = contactState;

    const handleChange = e => {
        const { value, name } = e.target;
        setContactState({ ...contactState, [name]: value });
    }

    const submitForm = (ev) => {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest()

        if (name === "" || phone === "" || email === "") {
            if (name === "") {
                console.log("you're missing the name field");
                setContactState({ ...contactState, nameErr: true })
            }

            if (phone === "") {
                console.log("you're missing the phone field");
                setContactState({ ...contactState, phoneErr: true })
            }

            if (email === "") {
                console.log("you're missing the email field");
                setContactState({ ...contactState, emailErr: true })
            }

            return

        } else {
            console.log("sent");
            // xhr.open(form.method, form.action);
            // xhr.setRequestHeader("Accept", "application/json");
            // xhr.onreadystatechange = () => {
            //     if (xhr.readyState !== XMLHttpRequest.DONE) return;
            //     if (xhr.status === 200) {
            //         form.reset();
            //         setContactState({ status: "SUCCESS" });
            //     } else {
            //         setContactState({ status: "ERROR" });
            //     }
            // };
            // xhr.send(data);
        }
    }

    return (
        <>
            {contactState.status === "" ? <form
                className="contactForm"
                onSubmit={submitForm}
                action="https://formspree.io/f/xgepbega"
                method="POST"
            >

                <input type="text" name="name" placeholder="NAME" onChange={handleChange} className={nameErr ? "error" : ""} />

                <input id="phone" type="phone" name="phone" placeholder="PHONE #" onChange={handleChange} className={phoneErr ? "error" : ""} />

                <input id="email" type="email" name="email" placeholder="EMAIL" onChange={handleChange} className={emailErr ? "error" : ""} />

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

                {contactState.status === "SUCCESS" ? <p>Thanks!</p> : <button className="contactSubmitBtn">SUBMIT</button>}
                {contactState.status === "ERROR" && <p>Ooops! There was an error.</p>}
            </form>

                :
                <div className="messageSent">
                    <img src="/images/sent.png" alt="message sent" />
                    <p>Thanks for reaching out!</p>
                </div>}
        </>
    )
}