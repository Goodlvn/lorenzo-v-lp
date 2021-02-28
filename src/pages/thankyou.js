import { useRouter } from "next/router";
import Link from "next/link";


export default function ThankYou() {

    const router = useRouter();
    const modernBroker = "https://lorenzovasquez.modernbroker.com/featured-listing?mode=grid&page=1&sort=RELEVANCE&listingSource=0%2BFeatured%20Listings&zoom=10&threshold=10&timezone=GMT-0800";

    return (
        <section className="tyContainer">
            <div className="tyLogoWrapper">
                <img id="tyLogo" src="/images/lv-logo.png" alt="lorenzo-v logo" />
            </div>
            <h3 className="tyTagline">Thanks for reaching out! </h3>
            <div className="tyBtnsContainer">
                <button className="tyBtn" onClick={() => router.push("/")}>BACK</button>
                <button className="tyBtn" onClick={() => (window.location.href = modernBroker)}>MORE PROPERTIES</button>
            </div>
        </section >
    )
}