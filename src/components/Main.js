import { CSSTransition } from "react-transition-group";

export default function Main() {
    return (

        <main className="mainContainer">
            <div id="angleDivBeige">
                <CSSTransition
                    in={true}
                    appear={true}
                    timeout={2000}
                    classNames="fade"
                >
                    <img id="logoHeader" className="fade-in" src="/images/lv-logo.png" alt="lorenzo-v logo" />
                </CSSTransition>
            </div>


            <CSSTransition
                in={true}
                appear={true}
                timeout={2000}
                classNames="fade"
            >
                <div className="infoContainer">
                    <div className="infoMain">
                        <div className="infoWrapper">
                            <h3>LORENZO VASQUEZ</h3>
                            <p>DRE#   212504941</p>

                            <div className="info emailInfo">
                                <span className="infoDesktop">E</span>
                                <p>LorenzoVasquezL@gmail.com</p>
                            </div>

                            <div className="info phoneInfo">
                                <span className="infoDesktop">P</span>
                                <p>559.667.7612</p>
                            </div>

                            <p className="infoBody">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vulputate eros enim, varius tempor lorem vehicula consequat. Mauris lacus ipsum.
                            </p>
                        </div>
                    </div>
                    <div className="lorenzoImage">
                        <img id="lorenzo" src="/images/lv-shot.jpg" alt=" Lorenzo Vasquez" />
                    </div>
                </div>
            </CSSTransition>
            <div id="angleDivWhite"></div>
        </main>
    )
}