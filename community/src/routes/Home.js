import HomePage from "../components/HomePage";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home(){
    return(
        <>
        <Navbar /> 
        <Hero 
        cName="hero"
        heroImg = "https://images.unsplash.com/photo-1542627088-6603b66e5c54?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZG9uYXRpb258ZW58MHx8MHx8fDA%3D"
        title = "Don't wait for a better world; make it."
        text = "Be a part of something greater"
        />
        <HomePage/>
        <Footer />
        </>
    )
}

export default Home;