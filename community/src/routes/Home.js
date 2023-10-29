import HomePage from "../components/HomePage";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const loadScript = (src) => {
    return new Promise((resolve) =>{
      const script = document.createElement('script')
      script.src = src
  
      script.onload = () => {
        resolve(true)
      }
  
      script.onerror = () => {
        resolve(false)
      }
  
      document.body.appendChild(script)
    })
  }
  
  const displayRazorpay = async (amount) => {
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')
  
    if (!res){
      alert("You are offline... Failed to load Razorpay SDK")
      return
    }
  
    const options = {
      key:'rzp_test_OlgK0vFCXKjoRp',
      currency: "INR",
      amount:amount * 100,
      name: "Community Connect Hub",
      description: "Thanks For Donating",
      handler: function(response){
        alert(response.razorpay_payment_id)
        alert("Payment Successfull")
      },
      prefill: {
        name: "Community Connect Hub"
      }
    };
  
    const paymentObject = new window.Razorpay(options)
    paymentObject.open()
  }

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