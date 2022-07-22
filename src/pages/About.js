import React,{useEffect} from 'react';
import Header from '../components/Header';
import AgencyAbout from '../components/AgencyAbout';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import AgencyService from '../components/AgencyService';

const About = () => {
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
        <div>
             <div className="body_wrapper">
                <Header/>
                <Breadcrumb 
                breadcrumb="About"
                tagOne="We are building for the future of Healthcare IT."
                tagTwo="HECOD if focusing on the pain points of the doctors to ensure that they have an easy-to-use,<br/>highly customizable software solution for smooth function of their medical practice."
                />
                <AgencyService/>
                <AgencyAbout/>
                <Footer/>
            </div>
        </div>
    );
}

export default About;