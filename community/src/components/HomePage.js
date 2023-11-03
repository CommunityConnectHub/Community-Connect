import HomePgImg1 from "../assests/img2.jpg";
import HomePgImg2 from "../assests/img6.jpg";
import HomePgImg3 from "../assests/img3.jpg";
import HomePgImg4 from "../assests/img4.jpg";
import HPData from "./HPData";
import "./HPgstyles.css"


const HomePage = () => {
    return (
        <div className="HomePage">
            <h1>Join Us in Making a Difference</h1> 
            <HPData 
            className = "first-page"
                heading="Be a part of something greater."
                
                text="Our NGO is driven by a profound commitment to improve the lives of vulnerable communities. Through education, healthcare, and essential resources, we work to break the cycle of poverty. Your support, whether small or substantial, is instrumental in this mission. Join us in creating a world where everyone has a chance to thrive. Together, we can make a lasting difference. Thank you for being a part of our journey towards a brighter and more equitable future."
                img1={HomePgImg1}
                img2={HomePgImg2}
            />
            <HPData 
            className="first-page-reverse"
                heading="Empowering Lives, Building Hope"
                
                text="Through dedication and collaboration, we've transformed countless lives. Our work extends beyond providing basic necessities; it's about giving hope and fostering a sense of community. Our impact stories serve as a testament to the change we've ignited. By supporting us, you become an essential part of this transformative journey. Join us in making a lasting impact and together, let's build a world where every individual has the opportunity to thrive and fulfill their potential."
                img1={HomePgImg3}
                img2={HomePgImg4}
            />
        </div>
    )
}

export default HomePage;