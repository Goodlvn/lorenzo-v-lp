
export default function FormHook({ status, invalidName, invalidEmail, invalidNumber, submitForm, handleChange }) {

    return (
        // <>
        //     <form
        //         className="contactForm"
        //         onSubmit={submitForm}
        //         action="https://formspree.io/f/xgepbega"
        //         method="POST"
        //     >
        //         {invalidName && <span className="errorName">please enter a name</span>}
        //         <input type="text" name="name" placeholder="NAME" onChange={handleChange} className={invalidName ? "error" : ""} />

        //         {invalidNumber && <span className="errorNumber">please enter a valid Number</span>}
        //         <input id="phone" type="phone" name="phone" placeholder="PHONE #" onChange={handleChange} className={invalidNumber ? "error" : ""} />

        //         {invalidEmail && <span className="errorEmail">please enter a valid email</span>}
        //         <input id="email" type="email" name="email" placeholder="EMAIL" onChange={handleChange} className={invalidEmail ? "error" : ""} />

        //         <div className="contactTypeBtns">
        //             <div className="typeContainer">
        //                 <input type="radio" id="Buyer" name="contact-type" value="buyer"
        //                 />
        //                 <label htmlFor="Buyer">BUYING</label>
        //             </div>

        //             <div className="typeContainer">
        //                 <input type="radio" id="Seller" name="contact-type" value="seller"
        //                 />
        //                 <label htmlFor="Seller">SELLING</label>
        //             </div>
        //         </div>

        //         {status === "SUCCESS" ? <p>Thanks!</p> : <button className="contactSubmitBtn" >SUBMIT</button>}
        //         {status === "ERROR" && <p>Ooops! There was an error.</p>}
        //     </form>
        // </>

        <div id="mc_embed_signup" className="contactForm">
            <form action="https://world.us1.list-manage.com/subscribe/post?u=b931a098fad1826a4bfa44074&amp;id=886f33c92d" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                <div id="mc_embed_signup_scroll">
                    <div className="mc-field-group">
                        {/* <label htmlFor="mce-FNAME">First Name </label> */}
                        <input type="text" name="FNAME" className="" id="mce-FNAME" placeholder="test" />
                    </div>
                    <div className="mc-field-group">
                        {/* <label htmlFor="mce-LNAME">Last Name </label> */}
                        <input type="text" name="LNAME" className="" id="mce-LNAME" />
                    </div>
                    <div className="mc-field-group">
                        {/* <label htmlFor="mce-EMAIL">Email Address  <span className="asterisk"></span>
                        </label> */}
                        <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" />
                    </div>
                    <div className="mc-field-group">
                        {/* <label htmlFor="mce-PHONE">Phone #  <span className="asterisk"></span>
                        </label> */}
                        <input type="phone" name="PHONE" className="required phone" id="mce-PHONE" />
                    </div>
                    <div className="mc-field-group input-group contactTypeBtns">
                        <ul><li><input type="radio" value="Buying" name="MMERGE6" id="mce-MMERGE6-0" /><label htmlFor="mce-MMERGE6-0">BUYING</label></li>
                            <li><input type="radio" value="Selling" name="MMERGE6" id="mce-MMERGE6-1" /><label htmlFor="mce-MMERGE6-1">SELLING</label></li>
                        </ul>
                    </div>
                    <div id="mce-responses" className="clear">
                        <div className="response" id="mce-error-response" style={{ display: "none" }}></div>
                        <div className="response" id="mce-success-response" style={{ display: "none" }}></div>
                    </div>
                    <div aria-hidden="true"><input type="text" name="b_0bf1fbd4e855f6b3e48df6e8e_623900f9d2" tabIndex="-1" style={{ visibility: "hidden" }} /></div>
                    <div className="clear contactSubmitBtn"><input type="submit" name="subscribe" id="mc-embedded-subscribe" className="button contactSubmitBtnInner" /></div>
                </div>
            </form>
        </div >
    )
}