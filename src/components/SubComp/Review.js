import { Transition } from "react-transition-group";


export default function Review({ review }) {

    return (
        <div className="transitionReview">
            <p>{review.body}</p>
            <a href={review.url} target="_blank" className="stars">
                <img src="./images/star.svg" alt="star rating" />
                <img src="./images/star.svg" alt="star rating" />
                <img src="./images/star.svg" alt="star rating" />
                <img src="./images/star.svg" alt="star rating" />
                <img src="./images/star.svg" alt="star rating" />
            </a>
            <h4>{review.name}</h4>
        </div>
    )
}
