import { useState, useEffect } from "react";

export default function Listings() {

    const [data, setData] = useState();

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

    console.log(data);

    return (
        <section className="listingsContainer">
            <h3 className="listingType">FEATURED PROPERTIES</h3>
            <div className="forSale listings">
                <div id="prop1" className="propImage">
                    <div className="propInfo">
                        <p>Lorem House</p>
                        <p>Lorem ipsum dolor sit amet elit.</p>
                    </div>
                </div>
                <div id="prop2" className="propImage">
                    <div className="propInfo">
                        <p>Lorem House</p>
                        <p>Lorem ipsum dolor sit amet elit.</p>
                    </div>
                </div>
            </div>
            <div className="recentlySold listings">
                <div id="prop3" className="propImage">
                    <div className="propInfo">
                        <p>Lorem House</p>
                        <p>Lorem ipsum dolor sit amet elit.</p>
                    </div>
                </div>
                <div id="prop4" className="propImage">
                    <div className="propInfo">
                        <p>Lorem House</p>
                        <p>Lorem ipsum dolor sit amet elit.</p>
                    </div>
                </div>
            </div>
            <div id="angleDivBeigeContact"></div>
            <div id="angleDivBlueContact"></div>
        </section>
    )
}