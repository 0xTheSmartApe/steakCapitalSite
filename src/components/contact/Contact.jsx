import { useState, useRef } from "react";
import "./contact.scss"
import emailjs from '@emailjs/browser';


const Contact = () => {
    const formRef = useRef();
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_78acn1m', 'template_m5i5818', formRef.current, 'TvwdsML8Q3d-kUkO1')
          .then((result) => {
              setSuccess(true);
          }, (error) => {
            setError(true);
          });
      };
    return (
        <div className="contact">
            <h1>Contact us</h1>
            <div className="contact1">
                {/* <div className="textContainer">
                    <h1 className="titre">Let's collaborate!</h1>
                </div> */}
                <div className="formContainer">
                    <form ref={formRef} onSubmit={sendEmail} className="form">
                        <input type="text" required placeholder="Name" name = "Name"/>
                        <input type="text" required placeholder="Email" name = "Email"/>
                        <textarea rows={8} placeholder="Message" name = "Message"/>
                        <button>Submit</button>
                        {error && (<p style={{ fontWeight: 'bold', color: 'red' }}>Error</p> )}
                        {success && (<p style={{ fontWeight: 'bold', color: 'green' }}>Success</p> )}
                    </form>
                </div>
                <div className="vertical-bar"> . </div>
                <div className="button2">
                    <a href="https://t.me/SteakCapital">
                        <button className="buttonTG">
                            Telegram
                        </button>
                    </a>
                </div>
            </div>
            {/* <div className="contact2">
                <div className="textContainer2">
                    <h1 className="titre2">DM us on Telegram</h1>
                </div>
                <div className="button2">
                    <a href="https://t.me/SteakCapital">
                        <button className="buttonTG">
                            Telegram
                        </button>
                    </a>
                </div>
            </div> */}
        </div>
        
    )
}

export default Contact