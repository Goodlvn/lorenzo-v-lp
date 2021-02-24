import { useState, useEffect } from "react";

export default function Prop1({ prop1, data }) {

    const [opac, setOpac] = useState("img1");


    const img1 = data[0].imgs[0];
    const img2 = data[0].imgs[1];
    const img3 = data[0].imgs[2];

    useEffect(() => {
        setTimeout(() => {
            let i = 0;
            setInterval(() => {



                if (i === 0) {
                    setOpac("img2");
                    console.log(opac);
                    i++;
                } else if (i === 1) {
                    setOpac("img3");
                    console.log(opac);
                    i++;
                } else if (i === 2) {
                    setOpac("img1");
                    console.log(opac);
                    i = 0;
                }

                console.log(i);

            }, 10000)

        }, 1000)

    }, [])

    return (
        <>
            {data &&
                <div className="propImageContainer">
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
                        <p>Lorem House</p>
                        <p>Lorem ipsum dolor sit amet elit.</p>
                    </div>
                </div>
            }

        </>
    )
}







    // data && setTimeout(() => {


    // }, 3000)
