import Hero from "../components/Hero";
import Navbar from "../components/Navbar"
import AboutImg from "../assests/img1.jpg"
import Footer from "../components/Footer";
import AboutUsPage from "../components/AboutUsPage";

function About(){
    return(
        <>
        <Navbar /> 
        <Hero 
        cName="hero-mid"
        heroImg = {AboutImg}
        title = "About"
        btnClass="hide"/>
        <AboutUsPage />
        <Footer />
        </>
    )
}

export default About;