import { useState, useEffect } from "react";


export default function Testimonials() {

    const getData = () => {
        fetch("testimonials.json", {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        }).then(res => {
            return res.json();
        }).then(({ testimonials }) => {
            console.log(testimonials);
        })
    }

    useEffect(() => {
        getData();
    }, [])




    return (
        <section className="testMainContainer">
            <div className="testContainer">
                <div className="quoteBox">
                    <img src="./images/quotation-mark.svg" alt="quotation" />
                </div>
                <p>"Lorenzo Vasquez handled the sale of our mother's home. Everything went very smoothly and in a timely manner. Lorenzo was always in contact and keeping us updated on everything during the process.  I highly recommend his services."</p>
                <div className="stars">
                    <img src="./images/star.svg" alt="star rating" />
                    <img src="./images/star.svg" alt="star rating" />
                    <img src="./images/star.svg" alt="star rating" />
                    <img src="./images/star.svg" alt="star rating" />
                    <img src="./images/star.svg" alt="star rating" />
                </div>
                <h4>Corey Wilder</h4>
            </div>

            <div id="angleDivBeigeContact"></div>
            <div id="angleDivBlueContact"></div>
        </section>
    )
}