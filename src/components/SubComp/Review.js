import { Transition } from "react-transition-group";


export default function Review({ data }) {

    return (
        <div className="transitionReview">
            <p>{data.body}</p>
            <a href={data.url} target="_blank" className="stars">
                <img src="./images/star.svg" alt="star rating" />
                <img src="./images/star.svg" alt="star rating" />
                <img src="./images/star.svg" alt="star rating" />
                <img src="./images/star.svg" alt="star rating" />
                <img src="./images/star.svg" alt="star rating" />
            </a>
            <h4>{data.name}</h4>
        </div>
    )
}
