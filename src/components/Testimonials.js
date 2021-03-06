import { useState, useEffect } from "react";
import Review from "./SubComp/Review";
import { TransitionGroup, CSSTransition, Transition } from "react-transition-group";
import { data } from "../data/Reviews";


export default function Testimonials() {

    const [review, setReview] = useState(data[0]);

    function changeReview() {
        let i = 1;
        setInterval(() => {
            setReview(data[i]);
            i++;
            console.log(i);
            if (i === 3) {
                i = 0;
            }
        }, 3000)
    }

    useEffect(() => {
        changeReview();
    }, [])

    return (
        <section className="testMainContainer">
            <Review review={review} />
            <div id="angleDivBeigeContact"></div>
            <div id="angleDivBlueContact"></div>
        </section>
    )
}