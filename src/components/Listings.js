import { useState, useEffect } from "react";
import Prop1 from "./SubComp/Prop1";
import Prop2 from "./SubComp/Prop2";
import Prop3 from "./SubComp/Prop3";
import Prop4 from "./SubComp/Prop4";


export default function Listings() {

    const [data, setData] = useState(null);

    function changeImg(setState, timeout) {
        setTimeout(() => {
            let i = 0;
            setInterval(() => {

                if (i === 0) {
                    setState("img2");
                    i++;
                } else if (i === 1) {
                    setState("img3");
                    i++;
                } else if (i === 2) {
                    setState("img1");
                    i = 0;
                }

            }, 10000)

        }, timeout)
    }


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

    return (

        <section className="listingsContainer">
            {data != null
                ?
                <>
                    <h3 className="listingType">FEATURED PROPERTIES</h3>
                    <div className="forSale listings">
                        <Prop1 data={data} changeImg={changeImg} />
                        <Prop2 data={data} changeImg={changeImg} />
                    </div>
                    <div className="recentlySold listings">
                        <Prop3 data={data} changeImg={changeImg} />
                        <Prop4 data={data} changeImg={changeImg} />
                    </div>
                </>
                : ""
            }
        </section >
    )
}