import FormHook from "../components/SubComp/FormHook";
import { useState } from "react"

export default function Contact() {

    const [contactState, setContactState] = useState({
        status: "",
        FNAME: "",
        LNAME: "",
        PHONE: "",
        EMAIL: "",
    })

    const [invalidFNAME, setFNAME] = useState(false);
    const [invalidLNAME, setLNAME] = useState(false);
    const [invalidEMAIL, setEMAIL] = useState(false);
    const [invalidPHONE, setPHONE] = useState(false);

    const regexNumber = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
    const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    const { FNAME, LNAME, PHONE, EMAIL, status } = contactState;

    const handleChange = e => {
        const { value, name } = e.target;
        setContactState({ ...contactState, [name]: value });

        console.log(value);

        if (name === "FNAME") {
            setFNAME(false)
        }

        if (name === "LNAME") {
            setLNAME(false);
        }

        if (name === "PHONE" && regexNumber.test(value)) {
            setPHONE(false);
        }

        if (name === "EMAIL" && regexEmail.test(value)) {
            setEMAIL(false);
        }

    }

    const checkForm = () => {
        if (FNAME === "") {
            setFNAME(true);
        }

        if (LNAME === "") {
            setLNAME(true);
        }

        if (EMAIL === "" || !regexEmail.test(EMAIL)) {
            setEMAIL(true);
        }

        if (PHONE === "" || !regexNumber.test(PHONE)) {
            setPHONE(true);
        }
    }

    console.log(contactState);
    return (
        <section className="contactContainer">
            <div className="contactWrapper">
                <div className="contactText">
                    <h2>LET'S CONNECT!</h2>
                    <p>Complete this form and I'll be in touch with you soon.</p>
                </div>
                <FormHook
                    status={status}
                    invalidFNAME={invalidFNAME}
                    invalidLNAME={invalidLNAME}
                    invalidEMAIL={invalidEMAIL}
                    invalidPHONE={invalidPHONE}
                    handleChange={handleChange}
                    checkForm={checkForm}
                    buttonState={(regexEmail.test(EMAIL) && regexNumber.test(PHONE) && LNAME !== "" && FNAME !== "") ? "submit" : "button"}
                />
            </div>
        </section>

    )
}