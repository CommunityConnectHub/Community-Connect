import React, { useState } from 'react'
import './form.css'
const Form = () => {
    const [user, setUser] = useState(
        {
            Name: '', Email: '', Contact: '', message: ''
        }
    )
    let name, value
    console.log(user)
    const data = (e) =>
    {
        name = e.target.name;
        value = e.target.value;
        setUser({...user, [name]: value});
    }

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
          name: "Durgesh",
          description: "Thanks For Donating",
          handler: function(response){
            alert(response.razorpay_payment_id)
            alert("Payment Successfull")
          },
          prefill: {
            name: "Durgesh"
          }
        };
      
        const paymentObject = new window.Razorpay(options)
        paymentObject.open()
      }

    const getdata = async (e) =>
    {
        const {Name, Email, Contact, message} = user;
        e.preventDefault();
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Name, Email, Contact, message
            })
        }
        const res = await fetch(
            'https://community-connect-hub-default-rtdb.firebaseio.com/UserData.json',
            options
            )
            console.log(res)
            if(res)
            {
                alert("Message Sent")
            }
            else
            {
                alert("Error Occured")
            }
    }

    return (
    <>
    < div className='form'>
        <div className='container'>
            <form method='POST'>
                <input type='text' name='Name' placeholder='Your Name' value={user.Name} autoComplete='off' required onChange={data}></input>
                <input type='email' name='Email' placeholder='Email-id' value={user.Email} autoComplete='off' required onChange={data}></input>
                <input type='text' name='Contact' placeholder='Contact no.' value={user.Contact} autoComplete='off' required onChange={data}></input>
                <textarea name='message' placeholder='Enter Your Message' value={user.message} autoComplete='off' required onChange={data}></textarea>
                <div class="button-container">
                <button onClick={getdata}>Submit</button>
                <button onClick={() => displayRazorpay(1000)}>Donate</button>
                </div>
                
            </form>
        </div>
    </div>
    </>
  )
}

export default Form
