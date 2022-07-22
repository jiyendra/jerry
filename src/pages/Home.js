import React,{useEffect} from 'react';
import Header from '../components/Header';
import Slider from '../components/Slider';
import AgencyFeatured from '../components/AgencyFeatured';
import FunFactArea from '../components/FunFactArea';
// import AgencyTestimonial from '../components/AgencyTestimonial';
import Footer from '../components/Footer';
import SeoService from '../components/SeoService';
import Fact from '../components/Fact';

const Home = () => {
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
            <div className="body_wrapper">
                <Header/>
                <Slider/>
                <AgencyFeatured/>
                <SeoService/>
                <FunFactArea/>
                <Fact/>
                {/* <AgencyTestimonial/> */}
                <Footer/> 
            </div>

        </>
    );
}

export default Home;
