import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import JobListing from '../components/JobListing';

export default function Jobs() {
    useEffect(() => {
        let scripts = [
            { src: "js/jquery-3.2.1.min.js" },
            { src: "vendors/wow/wow.min.js" },
            { src: "vendors/owl-carousel/js/owl.carousel.min.js" },
            { src: "js/main.js" }
        ]
        //Append the script element on each iteration
        scripts.map(item => {
            const script = document.createElement("script")
            script.src = item.src
            script.async = true
            document.body.appendChild(script)
        })
    }, [])
    return (
        <>
            <Header />
            <Breadcrumb breadcrumb="Jobs" />
            <JobListing/>
            <Footer />
        </>
    )
}
