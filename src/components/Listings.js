import { useState, useEffect } from "react";
import Prop1 from "./SubComp/Prop1"

export default function Listings() {

    const [data, setData] = useState(null);

    // const [prop1, setProp1] = useState(null);

    // data && setProp1(data[0].imgs[0]);
    let prop1 = data && data[0].imgs[0];
    let prop2 = data ? data[1].imgs[0] : "";
    let prop3 = data ? data[2].imgs[0] : "";
    let prop4 = data ? data[3].imgs[0] : "";

    const getData = () => {
        fetch("listings.json", {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        }).then(res => {
            return res.json();
        }).then(({ listings }) => {
            const pageListings = [];
            let count = 0;

            do {
                let ranNum = Math.floor(Math.random() * (10 - count));
                pageListings.push(listings[ranNum]);
                listings.splice(ranNum, 1);
                count++;
            } while (count < 4);

            setData(pageListings);
        })
    }

    useEffect(() => {
        getData();


    }, [])

    data && console.log(data);



    return (

        <section className="listingsContainer">
            {data != null
                ?
                <>
                    <h3 className="listingType">FEATURED PROPERTIES</h3>
                    <div className="forSale listings">
                        <Prop1 prop1={prop1} data={data} />
                        <div className="propImage"
                            style={{
                                backgroundImage: `url(${prop2}`,
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
                    </div>
                    <div className="recentlySold listings">
                        <div className="propImage"
                            style={{
                                backgroundImage: `url(${prop3}`,
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
                        <div className="propImage"
                            style={{
                                backgroundImage: `url(${prop4}`,
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
                    </div>
                    <div id="angleDivBeigeContact"></div>
                    <div id="angleDivBlueContact"></div>
                </>
                : ""
            }
        </section >
    )
}