import Main from "../components/Main";
import Listings from "../components/Listings";
import Contact from "../components/Contact";
import Footer from "../components/Footer";


export default function Index() {
  return (
    <div className="originContainer">
      <Main />
      <Listings />
      <Contact />
      <Footer />
    </div>
  )
}
