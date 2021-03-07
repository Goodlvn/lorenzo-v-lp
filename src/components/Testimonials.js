import Review from "./SubComp/Review";
import { data } from "../data/Reviews";

export default function Testimonials() {

    return (
        <section className="testMainContainer">
            <div className="testContainer">
                <div className="quoteBox">
                    <a target="_blank">
                        <img src="./images/quotation-mark.svg" alt="quotation" />
                    </a>
                </div>
                <Review data={data[0]} />
                <Review data={data[1]} />
                <Review data={data[2]} />
            </div>

            <div id="angleDivBeigeContact"></div>
            <div id="angleDivBlueContact"></div>
        </section>
    )
}