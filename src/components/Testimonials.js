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
        }).then(data => {
            console.log(data);
        })
    }






    return (
        <section className="tContainer">
            <div>Test</div>
        </section>
    )
}