import React from "react";
import emailjs from "emailjs-com";

export default function Contact() {
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm("service_0j9ctmx", "template_rcrmmdr", e.target, "user_Jhf473QBsymPnicTrMVk1")
            .then(
                (data) => {window.location.reload()},
                error => console.log(error.text)
            );
        e.target.reset();
        alert("Message Sent!");
    }
    return (
        <div className="formContainer">
            <br/><br/><br/><br/><br/><br/>
            <div className="contactForm">
                <h1>Appointment Request Form</h1>
                <p>Please enter your request information, including date and time, and we will get back to you as soon as possible.</p>
                <form onSubmit={sendEmail}>
                    <input className="contactInput" type="hidden" name="contact_number" /><br/>
                    <input className="contactInput" type="text" name="from_name" placeholder="Your name" required/><br/>   
                    <input className="contactInput" type="email" name="from_email" placeholder="Email address" required/><br/>
                    <textarea  className="contactInput" name="html_message"placeholder="Message" required/><br/><br/><br/><br/><br/><br/>
                    <input type="submit" value="Send" className="contactButton"/>
                </form>
            </div>
        </div>
    )
}