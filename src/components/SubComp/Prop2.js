import { useState, useEffect } from "react";

export default function Prop2({ data, changeImg }) {

    const [opac, setOpac] = useState("img1");


    const img1 = data[1].imgs[0];
    const img2 = data[1].imgs[1];
    const img3 = data[1].imgs[2];

    useEffect(() => {

        changeImg(setOpac, 0);

    }, [])

    return (
        <>
            {data &&
                <div className="propImageContainer">
                    <a href={data[1].url}>
                        <div className="propImageContainerTest"
                            style={{
                                backgroundImage: `url(${img3}`,
                                backgroundPosition: "center",
                                backrgoundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                opacity: opac === "img3" ? "1" : "0"
                            }}
                        ></div>
                        <div className="propImageContainerTest"
                            style={{
                                backgroundImage: `url(${img2}`,
                                backgroundPosition: "center",
                                backrgoundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                opacity: opac === "img2" ? "1" : "0"
                            }}
                        ></div>
                        <div className="propImageContainerTest"
                            style={{
                                backgroundImage: `url(${img1}`,
                                backgroundPosition: "center",
                                backrgoundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                opacity: opac === "img1" ? "1" : "0"
                            }}
                        ></div>
                        <div className="propInfo">
                            <p>{data[1].city}</p>
                            <span>
                                <div><i className="fas fa-bed"></i> <p>{`${data[1].rooms} Beds`}</p></div>
                                <div><i className="fas fa-bath"></i><p>{`${data[1].baths} Baths`}</p></div>
                                <div> <i className="fas fa-th-large"></i><p>{`${data[1].sqft} SqFt`}</p></div>
                            </span>
                        </div>
                    </a>
                </div>
            }

        </>
    )
}
