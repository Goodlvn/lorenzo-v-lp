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
        }, 8000)
    }

    useEffect(() => {
        changeReview();
    }, [])

    return (
        <section className="testMainContainer">
            <div className="testContainer">
                <div className="quoteBox">
                    <a href={review.url} target="_blank">
                        <img src="./images/quotation-mark.svg" alt="quotation" />
                    </a>
                </div>
                <TransitionGroup className="transitionContainer">
                    <CSSTransition
                        key={review.id}
                        timeout={400}
                        classNames="review"
                    >
                        <Review review={review} />
                    </CSSTransition>
                </TransitionGroup>
            </div>

            <div id="angleDivBeigeContact"></div>
            <div id="angleDivBlueContact"></div>
        </section>
    )
}