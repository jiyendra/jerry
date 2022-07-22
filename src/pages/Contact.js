import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import ContactInfo from '../components/ContactInfo';

const Contact = () => {
    return (
        <div>
             <div className="body_wrapper">
                <Header/>
                <Breadcrumb breadcrumb="Contact"/>
                <ContactInfo/>
                <Footer/>
            </div>
        </div>
    );
}

export default Contact;