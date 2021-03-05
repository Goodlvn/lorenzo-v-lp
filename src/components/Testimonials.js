import { useState, useEffect } from "react";
import Review from "../components/SubComp/Review";


export default function Testimonials() {

    const [data, setData] = useState(null);

    function changeReview(setState) {
        let i = 1;
        setInterval(() => {
            setState(data[i]);
            i++;
            if (i === 3) {
                i = 0;
            }
        }, 3000)
    }

    const getData = () => {
        fetch("testimonials.json", {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        }).then(res => {
            return res.json();
        }).then(({ testimonials }) => {
            setData(testimonials);
        })
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <section className="testMainContainer">
            {data && <Review data={data} changeReview={changeReview} />}

            <div id="angleDivBeigeContact"></div>
            <div id="angleDivBlueContact"></div>
        </section>
    )
}