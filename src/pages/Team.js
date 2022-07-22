import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import ExpertTeam from '../components/ExpertTeam';

const Team = () => {
    return (
        <div>
             <div className="body_wrapper">
                <Header/>
                <Breadcrumb 
                breadcrumb="Team"
                />
                <ExpertTeam/>
                <Footer/>
            </div>
        </div>
    );
}

export default Team;