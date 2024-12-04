import "./Contact.css";
import Footer from '../componentes/Footer';

function Contact() {
    return (
        <>
        <section className="contactInfo">
            <h2>Contact Us</h2>
            <p>If you have questions, comments, or just want to say hello, reach out to us!</p>

            <section>
                <form className="contactForm" action="#" method="post">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="Enter your name" required />

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" required />

                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows="5" placeholder="Your message here..." required></textarea>

                    <button type="submit">Submit</button>
                </form>
            </section>
        </section>
    
        </>
    );
}

export default Contact;

