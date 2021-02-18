import React, { useState } from "react";

export default function FormHook() {

    const [contactState, setContactState] = useState({
        status: "",
        name: "",
        phone: "",
        email: "",
    })

    const [errorState, setErrorState] = useState({
        invalidName: false,
        invalidEmail: false,
        invalidNumber: false
    })

    const { name, phone, email } = contactState;
    const { invalidName, invalidEmail, invalidNumber } = errorState;

    const handleChange = e => {
        const { value, name } = e.target;
        const regexNumber = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
        const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

        setContactState({ ...contactState, [name]: value });

        if (name === "name") {
            setErrorState({ ...errorState, invalidName: false });
        }

        if (name === "phone" && regexNumber.test(value)) {

            setErrorState({ ...errorState, invalidNumber: false });
        }

        if (name === "email" && regexEmail.test(value)) {
            setErrorState({ ...errorState, invalidEmail: false });
        }
    }

    const submitForm = (ev) => {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();


        if (name === "" && phone === "" && email === "") {

            setErrorState({ invalidName: true, invalidEmail: true, invalidNumber: true });

            return

        } else if (name === "" && phone !== "" && email !== "") {

            setErrorState({ invalidName: true, invalidNumber: false, invalidEmail: false });
            return
        } else if (name === "" && phone === "" && email !== "") {

            setErrorState({ invalidName: true, invalidNumber: true, invalidEmail: false });
            return
        } else if (name !== "" && phone === "" && email !== "") {

            setErrorState({ invalidName: false, invalidNumber: true, invalidEmail: false });
            return
        } else if (name !== "" && phone === "" && email === "") {

            setErrorState({ invalidName: false, invalidNumber: true, invalidEmail: true });
            return
        } else if (name !== "" && phone !== "" && email === "") {

            setErrorState({ invalidName: false, invalidNumber: false, invalidEmail: true });
            return
        } else if (name === "" && phone !== "" && email === "") {

            setErrorState({ invalidName: true, invalidNumber: false, invalidEmail: true });
            return
        } else {
            xhr.open(form.method, form.action);
            xhr.setRequestHeader("Accept", "application/json");
            xhr.onreadystatechange = () => {
                if (xhr.readyState !== XMLHttpRequest.DONE) return;
                if (xhr.status === 200) {
                    form.reset();
                    setContactState({ status: "SUCCESS" });
                } else {
                    setContactState({ status: "ERROR" });
                }
            };
            xhr.send(data);
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

                {contactState.status === "SUCCESS" ? <p>Thanks!</p> : <button className="contactSubmitBtn" >SUBMIT</button>}
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