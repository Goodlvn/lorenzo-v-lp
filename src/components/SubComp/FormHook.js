
export default function FormHook({ status, invalidFNAME, invalidLNAME, invalidEMAIL, invalidPHONE, handleChange, buttonState, checkForm }) {
    return (
        <div id="mc_embed_signup" className="contactForm">
            <form action="https://world.us1.list-manage.com/subscribe/post?u=b931a098fad1826a4bfa44074&amp;id=886f33c92d" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate autoComplete="chrome-off">
                <div id="mc_embed_signup_scroll">
                    <div className="mc-field-group">
                        <input type="text" name="FNAME" className={invalidFNAME ? "error" : ""} id="mce-FNAME" placeholder="FIRST NAME" onChange={handleChange} />
                    </div>
                    <div className="mc-field-group">
                        <input type="text" name="LNAME" className={invalidLNAME ? "error" : ""} id="mce-LNAME" placeholder="LAST NAME" onChange={handleChange} />
                    </div>
                    <div className="mc-field-group">
                        <input type="phone" name="PHONE" className={invalidPHONE ? "error required phone" : "required phone"} id="mce-PHONE" placeholder="PHONE #" onChange={handleChange} />
                    </div>
                    <div className="mc-field-group">
                        <input type="email" name="EMAIL" className={invalidEMAIL ? "error required email" : "required email"} id="mce-EMAIL" placeholder="EMAIL" onChange={handleChange} />
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
                    <div className="clear contactSubmitBtn">
                        <button className="contactSubmitBtnInner" type={buttonState} name="subscribe" id="mc-embedded-subscribe" className="button contactSubmitBtnInner" onClick={checkForm}>Subscribe</button>
                    </div>
                </div>
            </form>
        </div >
    )
}


// readOnly onFocus={(e) => { console.log(e.target.removeAttribute("readonly")); }}