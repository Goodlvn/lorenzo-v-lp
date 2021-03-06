

export default function Review({ review }) {

    return (
        <div className="testContainer">
            <div className="quoteBox">
                <a href={review.url} target="_blank">
                    <img src="./images/quotation-mark.svg" alt="quotation" />
                </a>
            </div>

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
