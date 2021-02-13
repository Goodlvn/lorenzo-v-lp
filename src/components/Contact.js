import Form from "../components/SubComp/Form";

export default function Contact() {
    return (
        <section className="contactContainer">
            <div className="contactWrapper">
                <div className="partingText">
                    <h2>LET'S CONNECT!</h2>
                    <p>Complete this form and I'll be in touch with you soon.</p>
                </div>
                <Form />
            </div>
        </section>
    )
}