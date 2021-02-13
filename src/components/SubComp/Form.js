import React from "react";

export default class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            status: ""
        };
    }

    render() {
        const { status } = this.state;
        return (
            <form
                className="contactForm"
                onSubmit={this.submitForm}
                action="https://formspree.io/f/xgepbega"
                method="POST"
            >

                <input type="text" name="name" placeholder="NAME" />

                <input type="phone" name="phone" placeholder="PHONE #" />

                <input type="email" name="email" placeholder="EMAIL" />

                <div className="contactTypeBtns">
                    <input type="radio" id="Buyer" name="contact-type" value="buyer"
                    />
                    <label for="Buyer">BUYING</label>

                    <input type="radio" id="Seller" name="contact-type" value="seller"
                    />
                    <label for="Seller">SELLING</label>
                </div>


                {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
                {status === "ERROR" && <p>Ooops! There was an error.</p>}
            </form>
        );
    }

    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                this.setState({ status: "SUCCESS" });
            } else {
                this.setState({ status: "ERROR" });
            }
        };
        xhr.send(data);
    }
}