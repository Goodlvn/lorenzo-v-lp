import { useState } from "react";

export default function Prop1({ prop1, data }) {

    const [img, setImg] = useState(prop1);

    // data && setImg(data[0].imgs[0]);

    data && setTimeout(() => {
        setImg(data[0].imgs[1]);
        console.log(img);
    }, 1000)

    return (
        <>
            {data &&
                <div className="propImage"
                    style={{
                        backgroundImage: `url(${img}`,
                        backgroundPosition: "center",
                        backrgoundRepeat: "no-repeat",
                        backgroundSize: "cover"
                    }}
                >
                    <div className="propInfo">
                        <p>Lorem House</p>
                        <p>Lorem ipsum dolor sit amet elit.</p>
                    </div>
                </div>
            }

        </>
    )
}