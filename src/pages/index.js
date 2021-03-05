import Main from "../components/Main";
import Listings from "../components/Listings";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";


export default function Index() {
  return (
    <div className="originContainer">
      <Main />
      <Listings />
      <Contact />
      <Testimonials />
      <Footer />
    </div>
  )
}
