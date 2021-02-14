

export default function Listings() {
    return (
        <section className="listingsContainer">
            <div className="forSale listings">
                <h3 className="listingType">FOR SALE</h3>
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
                <h3 className="listingType">RECENTLY SOLD</h3>
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