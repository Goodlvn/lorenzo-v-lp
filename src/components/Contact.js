import Form from "../components/SubComp/Form";
import FormHook from "../components/SubComp/FormHook";
import { useState } from "react"

export default function Contact() {

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

    const { name, phone, email, status } = contactState;
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
        <section className="contactContainer">
            <div className="contactWrapper">
                {status === "" && <div className="contactText">
                    <h2>LET'S CONNECT!</h2>
                    <p>Complete this form and I'll be in touch with you soon.</p>
                </div>}
                <FormHook
                    status={status}
                    invalidName={invalidName}
                    invalidEmail={invalidEmail}
                    invalidNumber={invalidNumber}
                    handleChange={handleChange}
                    submitForm={submitForm}
                />
            </div>
        </section>
    )
}