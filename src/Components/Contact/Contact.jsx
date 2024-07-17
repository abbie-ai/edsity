import React from 'react'
import './Contact.css'
import msg_icon from '../../Assets/msg-icon.png'
import mail_icon from '../../Assets/mail-icon.png'
import phone_icon from '../../Assets/phone-icon.png'
import location_icon from '../../Assets/location-icon.png'
import white_arrow from'../../Assets/white-arrow.png'
const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "77c3fbc9-ba00-4212-9e9d-f16304dea64f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact'>
        <div className="contact-col">
         <h3>Send us a message <img src={msg_icon} alt="" /></h3>
         <p>Feel free to reach us through the contaact form or find our contact information below.
            Your feedback, questions and suggestions are important to us as we striveto provide exceptional
            service to our university community.
         </p>
         <ul>
            <li><img src={mail_icon} alt="" />Contact@Edusity.com</li>
            <li><img src={phone_icon} alt="" />+1 110-282-336</li>
            <li><img src={location_icon} alt="" />77 Massachusetts Ave <br /> MA 02193, United States</li>
         </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your name</label>
                <input type="text" name='name' placeholder='Enter your name ' required />
                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter your mobile number ' required />
                <label>Write your message here</label>
                <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>

                <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>

    </div>
  )
}

export default Contact