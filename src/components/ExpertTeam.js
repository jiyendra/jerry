import React from 'react';
import Workers from './Workers';

const ExpertTeam = () => {
    const EmployeeData = [{
        teamImg: require('../assets/img/team/team-img1.png'),
        teamName: "Anand Mishra",
        teamDesignation: "Co-Founder & CEO"
    },
    {
        teamImg: require('../assets/img/team/team-img2.png'),
        teamName: "Vamshi Bodla",
        teamDesignation: "Co-Founder & COO"
    },
    {
        teamImg: require('../assets/img/team/team-img3.png'),
        teamName: "Rishabh Gupta",
        teamDesignation: "Co-Founder & CBDO"
    },
    {
        teamImg: require('../assets/img/team/team-img4.png'),
        teamName: "Anshul Jain",
        teamDesignation: "Co-Founder & CMO"
    },
    {
        teamImg: require('../assets/img/team/team-img5.png'),
        teamName: "Aquiv Hasan",
        teamDesignation: "Full Stack Developer"
    },
    {
        teamImg: require('../assets/img/team/team-img6.png'),
        teamName: "Rajan Sharma",
        teamDesignation: "Visual Designer"
    },
    {
        teamImg: require('../assets/img/team/team-img7.png'),
        teamName: "Jyotika Sharma",
        teamDesignation: "Finance & Accounting"
    }
    ]
    return (
        <>
            <section className="experts_team_area sec_pad">
                <div className="container">
                    <div className="sec_title text-center mb_70">
                        <h2 className="f_p f_size_30 l_height30 f_700 t_color3 mb_20">The Experts Team</h2>
                        <p className="f_400 f_size_16">Why I say old chap that is spiffing barney, nancy boy bleeder chimney<br /> pot richard cheers the little rotter.!</p>
                    </div>
                    <div className="row">
                        {
                            EmployeeData.map((val, index) => {
                                return (
                                    <Workers
                                        teamImg={val.teamImg}
                                        teamName={val.teamName}
                                        teamDesignation={val.teamDesignation}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </section>

        </>
    );
}

export default ExpertTeam;
