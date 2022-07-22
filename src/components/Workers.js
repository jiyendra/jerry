import React from 'react';

const Workers = (props) => {
    return (
        <>
          <div className="col-lg-3 col-sm-6">
                            <div className="ex_team_item">
                                {/* <img src="img/home7/team_01.jpg" alt /> */}
                                <img src={props.teamImg} alt="team" />
                                <div className="team_content">
                                    <a href="d">
                                        <h3 className="f_p f_size_16 f_600 t_color3">{props.teamName}</h3>
                                    </a>
                                    <h5>{props.teamDesignation}</h5>
                                </div>
                                <div className="hover_content">
                                    <div className="n_hover_content">
                                        <ul className="list-unstyled">
                                            <li><a href="j"><i className="fab fa-facebook-f" /></a></li>
                                            <li><a href="j"><i className="fab fa-twitter" /></a></li>
                                            <li><a href="j"><i className="fab fa-vimeo-v" /></a></li>
                                            <li><a href="j"><i className="fab fa-linkedin-in" /></a></li>
                                        </ul>
                                        <div className="br" />
                                        <a href="h">
                                            <h3 className="f_p f_size_16 f_600 w_color">{props.teamName}</h3>
                                        </a>
                                        <h5>{props.teamDesignation}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                          
        </>
    );
}

export default Workers;
