

export default function Listings() {
    return (
        <section className="listingsContainer">
            <div className="forSale listings">
                <h3>FOR SALE</h3>
                <div id="prop1" className="propImage">
                    <div className="propInfo">
                        <h3>House #1</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div id="prop2" className="propImage">
                    <div className="propInfo">
                        <h3>House #3</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </div>
            <div className="recentlySold listings">
                <h3>RECENTLY SOLD</h3>
                <div id="prop3" className="propImage">
                    <div className="propInfo">
                        <h3>House #2</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div id="prop4" className="propImage">
                    <div className="propInfo">
                        <h3>House #4</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}