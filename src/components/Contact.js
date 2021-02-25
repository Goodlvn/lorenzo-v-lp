import FormHook from "../components/SubComp/FormHook";
import { useState } from "react"
import { CSSTransition } from "react-transition-group";

export default function Contact() {

    const [contactState, setContactState] = useState({
        status: "",
        FNAME: "",
        LNAME: "",
        PHONE: "",
        EMAIL: "",
    })

    const [buttonState, setButtonState] = useState("button")

    const [invalidFNAME, setFNAME] = useState(false);
    const [invalidLNAME, setLNAME] = useState(false);
    const [invalidEMAIL, setEMAIL] = useState(false);
    const [invalidPHONE, setPHONE] = useState(false);

    const regexNumber = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
    const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    const [formState, setFormState] = useState(true);
    const [messageState, setMessageState] = useState(false);

    const { FNAME, LNAME, PHONE, EMAIL, status } = contactState;

    const handleChange = e => {
        const { value, name } = e.target;
        setContactState({ ...contactState, [name]: value });

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

        subForm();


    }

    const subForm = () => {


        if (regexEmail.test(EMAIL) && regexNumber.test(PHONE) && LNAME !== "" && FNAME !== "") {
            setButtonState("submit");
            console.log("test")
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

    return (
        <section className="contactContainer">
            {formState && <div className="contactWrapper">
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
                    buttonState={buttonState}
                    checkForm={checkForm}
                />
            </div>}
            <CSSTransition
                in={messageState}
                timeout={1000}
                classNames="alert"
                unmountOnExit
                onEnter={() => setFormState(false)}
            >
                <div className="messageSent">
                    <img src="/images/sent.png" alt="message sent" />
                    <p>Thanks for reaching out!</p>
                </div>
            </CSSTransition>
        </section>

    )
}