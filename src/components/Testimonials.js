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
        <section className="tContainer">
            <div>Test</div>
        </section>
    )
}