import React from 'react';

const JobListing = (props) => {
    return (
        <>
            <section className="job_listing_area bg_color sec_pad">
                <div className="container">
                    <div className="sec_title mb_70">
                        <h2 className="f_p f_size_24 l_height28 f_700 t_color3 mb_20">Job Requirements</h2>
                        <p className="f_400 f_size_15">Tickety-boo Elizabeth plastered matie boy I bugger up the duff such a fibber, cheers at public school cup of char don't get shirty with me wellies up the kyver, codswallop cack mush happy days me old mucker bleeder. Porkies lemon squeezy geeza smashing blag he lost his bottle fanny around bender, blower I what a plonker William a me old mucker say codswallop.</p>
                    </div>
                    <div className="row app_service_info">
                        <div className="col-lg-4">
                            <div className="app_service_item">
                                <i className="ti-settings app_icon one" />
                                <h5 className="f_p f_size_18 f_600 t_color3 mt_40 mb-30">Premium plugins</h5>
                                <p className="f_400 f_size_15 mb-30">Oxford jolly good cras bugger down the pub blow off well arse tinkety tonk old fruit William bite your arm off haggle, old it's all gone to pot daft no biggie bog.!</p>
                                <a href="#" className="learn_btn_two c_violet">Learn More <i className="ti-arrow-right" /></a>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="app_service_item">
                                <i className="ti-heart-broken app_icon two" />
                                <h5 className="f_p f_size_18 f_600 t_color3 mt_40 mb-30">Unique elements</h5>
                                <p className="f_400 f_size_15 mb-30">Oxford jolly good cras bugger down the pub blow off well arse tinkety tonk old fruit William bite your arm off haggle, old it's all gone to pot daft no biggie bog.!</p>
                                <a href="#" className="learn_btn_two c_violet">Learn More <i className="ti-arrow-right" /></a>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="app_service_item">
                                <i className="ti-target app_icon three" />
                                <h5 className="f_p f_size_18 f_600 t_color3 mt_40 mb-30">Live page builder</h5>
                                <p className="f_400 f_size_15 mb-30">Oxford jolly good cras bugger down the pub blow off well arse tinkety tonk old fruit William bite your arm off haggle, old it's all gone to pot daft no biggie bog.!</p>
                                <a href="#" className="learn_btn_two c_violet">Learn More <i className="ti-arrow-right" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="job_listing">
                        <h3 className="f_p f_size_24 l_height28 f_500 t_color3 mb-30">Open Job Positions</h3>
                        <div id="job_filter" className="job_list_tab">
                            <div data-filter="*" className="list_item_tab active">All</div>
                            <div data-filter=".lon" className="list_item_tab">London</div>
                            <div data-filter=".av" className="list_item_tab">Avenue Nine</div>
                            <div data-filter=".new" className="list_item_tab">NewYork</div>
                        </div>
                        <div className="listing_tab" id="tab_filter">
                            <div className="item lon new">
                                <div className="list_item">
                                    <figure><a href="#"><img src="img/process/Avast_Antivirus.png" alt /></a></figure>
                                    <div className="joblisting_text">
                                        <div className="job_list_table">
                                            <div className="jobsearch-table-cell">
                                                <h4><a href="#" className="f_500 t_color3">Cashier For Bank Desk Urgent Required</a></h4>
                                                <ul className="list-unstyled">
                                                    <li className="p_color">Full Time</li>
                                                    <li>London, United Kingdom</li>
                                                    <li>Published 4 months ago</li>
                                                </ul>
                                            </div>
                                            <div className="jobsearch-table-cell">
                                                <div className="jobsearch-job-userlist">
                                                    <a href="#" className="apply_btn">Apply Now</a>
                                                    <div className="like-btn">
                                                        <a href="javascript:void(0);" className="shortlist"> <i className="ti-heart" /> </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item av lon">
                                <div className="list_item">
                                    <figure><a href="#"><img src="img/process/png-logo-design.png" alt /></a></figure>
                                    <div className="joblisting_text">
                                        <div className="job_list_table">
                                            <div className="jobsearch-table-cell">
                                                <h4><a href="#" className="f_500 t_color3">Final year Accounts Checking Agent</a></h4>
                                                <ul className="list-unstyled">
                                                    <li className="g_color">Full Time</li>
                                                    <li>London, United Kingdom</li>
                                                    <li>Published 4 months ago</li>
                                                </ul>
                                            </div>
                                            <div className="jobsearch-table-cell">
                                                <div className="jobsearch-job-userlist">
                                                    <a href="#" className="apply_btn">Apply Now</a>
                                                    <div className="like-btn">
                                                        <a href="javascript:void(0);" className="shortlist"> <i className="ti-heart" /> </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item new">
                                <div className="list_item">
                                    <figure><a href="#"><img src="img/process/UTorrent_(logo).png" alt /></a></figure>
                                    <div className="joblisting_text">
                                        <div className="job_list_table">
                                            <div className="jobsearch-table-cell">
                                                <h4><a href="#" className="f_500 t_color3">Charity Organization agent Required</a></h4>
                                                <ul className="list-unstyled">
                                                    <li className="gold_color">Full Time</li>
                                                    <li>London, United Kingdom</li>
                                                    <li>Published 4 months ago</li>
                                                </ul>
                                            </div>
                                            <div className="jobsearch-table-cell">
                                                <div className="jobsearch-job-userlist">
                                                    <a href="#" className="apply_btn">Apply Now</a>
                                                    <div className="like-btn">
                                                        <a href="javascript:void(0);" className="shortlist"> <i className="ti-heart" /> </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item lon">
                                <div className="list_item">
                                    <figure><a href="#"><img src="img/process/btFMmsoh.png" alt /></a></figure>
                                    <div className="joblisting_text">
                                        <div className="job_list_table">
                                            <div className="jobsearch-table-cell">
                                                <h4><a href="#" className="f_500 t_color3">Property Finder in are Agent Required</a></h4>
                                                <ul className="list-unstyled">
                                                    <li className="g_color">Full Time</li>
                                                    <li>London, United Kingdom</li>
                                                    <li>Published 4 months ago</li>
                                                </ul>
                                            </div>
                                            <div className="jobsearch-table-cell">
                                                <div className="jobsearch-job-userlist">
                                                    <a href="#" className="apply_btn">Apply Now</a>
                                                    <div className="like-btn">
                                                        <a href="javascript:void(0);" className="shortlist"> <i className="ti-heart" /> </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item av">
                                <div className="list_item">
                                    <figure><a href="#"><img src="img/process/ASAN-logo-icon.png" alt /></a></figure>
                                    <div className="joblisting_text">
                                        <div className="job_list_table">
                                            <div className="jobsearch-table-cell">
                                                <h4><a href="#" className="f_500 t_color3">Senior Web Designer Team Lead</a></h4>
                                                <ul className="list-unstyled">
                                                    <li className="gold_color">Full Time</li>
                                                    <li>London, United Kingdom</li>
                                                    <li>Published 4 months ago</li>
                                                </ul>
                                            </div>
                                            <div className="jobsearch-table-cell">
                                                <div className="jobsearch-job-userlist">
                                                    <a href="#" className="apply_btn">Apply Now</a>
                                                    <div className="like-btn">
                                                        <a href="javascript:void(0);" className="shortlist"> <i className="ti-heart" /> </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item lon">
                                <div className="list_item">
                                    <figure><a href="#"><img src="img/process/logo-slack.png" alt /></a></figure>
                                    <div className="joblisting_text">
                                        <div className="job_list_table">
                                            <div className="jobsearch-table-cell">
                                                <h4><a href="#" className="f_500 t_color3">Property Agent For UK Office Required</a></h4>
                                                <ul className="list-unstyled">
                                                    <li className="gold_color">Full Time</li>
                                                    <li>London, United Kingdom</li>
                                                    <li>Published 4 months ago</li>
                                                </ul>
                                            </div>
                                            <div className="jobsearch-table-cell">
                                                <div className="jobsearch-job-userlist">
                                                    <a href="#" className="apply_btn">Apply Now</a>
                                                    <div className="like-btn">
                                                        <a href="javascript:void(0);" className="shortlist"> <i className="ti-heart" /> </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <nav className="navigation pagination text-center mt_60" role="navigation">
                            <div className="nav-links"><span aria-current="page" className="page-numbers current">1</span>
                                <a className="page-numbers" href="#">2</a>
                                <a className="next page-numbers" href="#"><i className="ti-arrow-right" /></a></div>
                        </nav>
                    </div>
                </div>
            </section>

        </>
    );
}

export default JobListing;
