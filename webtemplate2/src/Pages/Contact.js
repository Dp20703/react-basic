import { useState } from "react";
import Banner from "../Common/Banner";
import Footer from "../Common/Footer";
import Header from "../Common/Header";

export default function Contact(props) {
    return (
        <>
            <Header />
            <Banner title='Get in touch' pageName='Contact' />
            <ContactCompo />
            <Footer />
        </>
    );
}

function ContactCompo() {
    const [contactInfo, setContactInfo] = useState({
        w3lName: '',
        w3lSender: '',
        w3lPhone: '',
        w3lSubject: '',
        w3lMessage: '',
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setContactInfo((data) => (
            {
                ...data,
                [name]: value

            }
        ))
    }

    console.log(contactInfo)
    return (
        <>
            <section class="w3l-contact-7 pt-5" id="contact">
                <div class="contacts-9 pt-lg-5 pt-md-4">
                    <div class="container">
                        <div class="top-map">
                            <div class="row map-content-9">
                                <div class="col-lg-8">
                                    <p class="mb-4">Your email address will not be published. Required fields are marked *</p>
                                    <form action="https://sendmail.w3layouts.com/submitForm" method="post" class="text-right">
                                        <div class="form-grid">
                                            <input type="text" name="w3lName" id="w3lName" placeholder="Name*" required="" value={contactInfo.w3lName} onChange={handleChange} />
                                            <input type="email" name="w3lSender" id="w3lSender" placeholder="Email*" required="" value={contactInfo.w3lSender} onChange={handleChange} />
                                            <input type="text" name="w3lPhone" id="w3lPhone" placeholder="Phone number*"
                                                required="" value={contactInfo.w3lPhone} onChange={handleChange} />
                                            <input type="text" name="w3lSubject" id="w3lSubject" placeholder="Subject" value={contactInfo.w3lSubject} onChange={handleChange} />
                                        </div>
                                        <textarea name="w3lMessage" id="w3lMessage" placeholder="Message" value={contactInfo.w3lMessage} onChange={handleChange}></textarea>
                                        <button type="submit" class="btn btn-primary btn-style mt-3">Submit</button>
                                    </form>
                                </div>
                                <div class="col-lg-4 cont-details">
                                    <address>
                                        <h5 class="">Our Office Address</h5>
                                        <p><span class="fa fa-map-marker"></span>Style web design studio, 208 Trainer Avenue street,
                                            Corner Market, NY - 62617 </p>
                                        <p><span class="fa fa-phone"></span><a href="tel:+1(12) 366 411 4999"> +1(12) 366 411
                                            4999</a></p>
                                        <p> <a href="mailto:mail@example.com"><span
                                            class="fa fa-envelope"></span>mail@example.com</a></p>
                                        <p> <a href="mailto:support@example.com"><span
                                            class="fa fa-support"></span>support@example.com</a></p>

                                        <h5 class="mt-4 mb-3">Follow us on social media</h5>
                                        <div class="main-social-footer-29">
                                            <a href="#facebook" class="facebook"><span class="fa fa-facebook m-0"></span></a>
                                            <a href="#twitter" class="twitter"><span class="fa fa-twitter m-0"></span></a>
                                            <a href="#instagram" class="instagram"><span class="fa fa-instagram m-0"></span></a>
                                            <a href="#linkedin" class="linkedin"><span class="fa fa-linkedin m-0"></span></a>
                                        </div>
                                    </address>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="map mt-5">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2895687731!2d-74.26055986835598!3d40.697668402590374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sin!4v1562582305883!5m2!1sen!2sin"
                            frameborder="0" style={{ border: "0" }} allowfullscreen=""></iframe>
                    </div>
                </div>
            </section>
        </>
    );
}