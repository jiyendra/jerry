import React, { useEffect } from 'react';
import Header from '../components/Header';
import Breadcrumb from '../components/Breadcrumb';
import Footer from '../components/Footer';

const TermCondition = () => {
    useEffect(() => {
        let scripts = [
            { src: "js/jquery-3.2.1.min.js" },
            { src: "vendors/wow/wow.min.js" },
            { src: "vendors/owl-carousel/js/owl.carousel.min.js" },
            { src: "js/main.js" }
        ]
        //Append the script element on each iteration
        // eslint-disable-next-line array-callback-return
        scripts.map(item => {
            const script = document.createElement("script");
            script.src = item.src;
            script.async = true;
            document.body.appendChild(script);
        })
    }, [])
    return (
        <>
            <Header />
            <Breadcrumb 
            breadcrumb="Term & Conditions"
            tagOne="This website belongs to BIODOYEN HEALTHTECH PRIVATE LIMITED, if you are viewing or navigating through this website, you are agreeing with the HECOD Terms of Use."
             />
            <section className="agency_featured_area agency_featured_area_two  bg_color">
                <div className="container">
                    <div className="details_content">
                        <div className="sec_title mb_70">
                            <p className="f_400 f_size_15">HECODis a comprehensive healthcare product suite of 4 products : Practice Management, EHR, Home Health and HCRM and integrates with plenty of other softwares and platforms for the seamless operation of the hospital. HECOD is key market player for Healthcare CRM.</p>
                        </div>
                        <div className="job_deatails_content">
                            <h3 className="f_p f_size_22 f_500 t_color3 mb_20">Agreement Terms:</h3>
                            <p className="f_400 f_size_15 mb_50">HECOD is a dedicated team which is not just a technology solution for any Healthcare organization, but rather a technology partner for your organization. HECOD vision is to assist your organization growth with our CRM product. In continuation of the same, we follow some agreement terms which assist both parties to work in collaboration & continuation.</p>
                        </div>
                        <div className="job_deatails_content">
                            <h3 className="f_p f_size_22 f_500 t_color3 mb_20">Licensing Terms</h3>
                            <p className="f_400 f_size_15 mb_50">HECOD has defined licensing terms. The license varied on the basis of the subscription model. The Customer can choose from the license model as per their requirement & need.</p>
                        </div>
                        <div className="details_content">
                            <div className="sec_title mb_70">
                                <h3 className="f_p f_size_22 f_500 t_color3 mb_20">Payment Terms</h3>
                                <p className="f_400 f_size_15">HECOD works as a growth partner and follows very clear payment terms. With this engagement, Customer agrees to various payments related to subscription, customization & support.</p>
                            </div>
                            <div className="job_deatails_content">
                                <h3 className="f_p f_size_22 f_500 t_color3 mb_20">Refund Policy</h3>
                                <p className="f_400 f_size_15 mb_50">Our refund policy is as follows: Given the nature of digital content, we do not offer refunds or credits. You may cancel your HECOD subscription at any time by providing us written notice five days prior to the start of your next billing cycle</p>
                            </div>
                            <div className="job_deatails_content">
                                <h3 className="f_p f_size_22 f_500 t_color3 mb_20">Customization Terms</h3>
                                <p className="f_400 f_size_15 mb_50">HECOD is multispecialty software, which is customized for specialty based practice. DocEngage, very perfectly customized for GPs, Dentists, & Aesthetic Clinics. Beyond the features, HECOD having customization requests from Customers can be supported based on requirement validation by Customer.</p>
                            </div>
                        </div>
                        <div className="details_content">
                            <div className="sec_title mb_70">
                                <h3 className="f_p f_size_22 f_500 t_color3 mb_20">Support Terms</h3>
                                <p className="f_400 f_size_15">HECOD Support is quick & responsive. Our support policy helps us to assist our Customer instantly & resolve their doubts & queries timely. HECOD follows regressive support policies by providing support to customers with mails, calls & skype. We are always connected with our Customers.
Proprietary Rights</p>
                                <p className="f_400 f_size_15">All the proprietary and confidential information including trademarks, are under protection of Intellectual property laws. Our content may not be sold, reproduced, or distributed without our written permission. Any third-party trademarks, service marks and logos are the property of their respective owners. Any further rights not specifically granted herein are reserved.</p>
                            </div>
                            <div className="job_deatails_content">
                                <h3 className="f_p f_size_22 f_500 t_color3 mb_20">Third Party Integration Terms</h3>
                                <p className="f_400 f_size_15 mb_50">HECOD is a holistic software with EHR & CRM support, but sometime it might require third party software integration to keep your organization functions going. HECOD has a team who is expert in software integration, all the integration will go through rounds of analysis & Customer will be involved in all decision making process for integration & associated functioning.</p>
                            </div>
                            <div className="job_deatails_content">
                                <h3 className="f_p f_size_22 f_500 t_color3 mb_20">Customer Liability Terms:</h3>
                                <p className="f_400 f_size_15 mb_50">The customer is liable to maintain the confidentiality of DocEngage, and agrees not to share the software related information to any third party. Customers have to ensure that they are following the agreement & subscription policies.</p>
                            </div>
                        </div>
                        <div className="details_content">
                            <div className="sec_title mb_70">
                                <h3 className="f_p f_size_22 f_500 t_color3 mb_20">Cancellation & Termination</h3>
                                <p className="f_400 f_size_15">This is a two way process. Either the customer can terminate their account by requesting for the same. The policies will be taken into consideration before termination & cancellation of account. HECOD can also terminate the account, based on agreement terms.</p>
                             </div>
                            <div className="job_deatails_content">
                                <h3 className="f_p f_size_22 f_500 t_color3 mb_20">Export Compliance:</h3>
                                <p className="f_400 f_size_15 mb_50">The users of HECOD have access to their account data. The HECOD gives them authority to export their data. HECOD will provide user based access but the responsibility is on the user. They have to comply with policies and laws related to privacy & confidentiality.</p>
                            </div>
                            <div className="job_deatails_content">
                                <h3 className="f_p f_size_22 f_500 t_color3 mb_20">General Terms:</h3>
                                <p className="f_400 f_size_15 mb_50">Each party shall hold the other's Confidential Information in confidence and, unless required by law, not make the other's Confidential Information available to any third party, or use the other's Confidential Information for any purpose other than the implementation of this agreement.</p>
                            </div>
                        </div>
                        <div className="details_content">
                            <div className="sec_title mb_70">
                                <h3 className="f_p f_size_22 f_500 t_color3 mb_20">Service Terms</h3>
                                <p className="f_400 f_size_15">HECOD provides Customer access to the HECOD application on a twenty-four hour, seven days a week (24x7) basis at a rate of 99.9 % ("SaaS Services Uptime Metric").</p>
                             </div>
                            <div className="job_deatails_content">
                                <h3 className="f_p f_size_22 f_500 t_color3 mb_20">Contact Terms</h3>
                                <p className="f_400 f_size_15 mb_50">For any query or doubts, Customers can contact the HECOD support team. They can send mail directly to team@hecod.com or call us at +918595120986.</p>
                            </div>
                            <div className="job_deatails_content">
                                <h3 className="f_p f_size_22 f_500 t_color3 mb_20">Intellectual Property Terms</h3>
                                <p className="f_400 f_size_15 mb_50">The Customer acknowledges and agrees that the Supplier and/or its licensors own all intellectual property rights in the Services. The engagement does not grant the Customer any rights to, or in, patents, copyrights, database rights, trade secrets, trade names, trade marks (whether registered or unregistered), or any other rights or licenses in respect of the Services.</p>
                            </div>
                            <div className="job_deatails_content">
                                <h3 className="f_p f_size_22 f_500 t_color3 mb_20">Indemnity</h3>
                                <p className="f_400 f_size_15 mb_50">HECOD will defend Customer against any claims made by a third party that any Product or Service deliverable that is made available by HECODfor a fee infringes that party's patent, copyright, or trademark or makes intentional unlawful use of its Trade Secret and shall be solely responsible for the same. If the Software is found to infringe a valid Indian Patent or copyright, etc., Supplier's obligations will include the best feasible option among the following as decided by Customer:
A. Obtaining for Customer a right to continue to use the Software; or
B. Modifying the Software so that it does not infringe</p>
                            </div>
                            <div className="job_deatails_content">
                                <h3 className="f_p f_size_22 f_500 t_color3 mb_20">Third party providers</h3>
                                <p className="f_400 f_size_15 mb_50">The Customer acknowledges that the Services may enable or assist it to access other services providers and that it does so solely at its own risk. The Supplier makes no representation or commitment and shall have no liability or obligation whatsoever in relation to the services provided by such third-party service providers, or any transactions completed, and any contract entered into by the Customer, with any such third party.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default TermCondition;
