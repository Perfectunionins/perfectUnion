import React, {FC} from 'react';
import logo from '../../common/images/AboutUs.png';
import thumb from '../../common/images/photo1697914653.jpeg';

interface AboutUsProps {
}

const AboutUs: FC<AboutUsProps> = (props) => (
    <div>
        <img src={logo} alt="BigCo Inc. logo" style={{width: "100%", height: "450px"}}/>
        <br/>
        <br/>
        <div className="d-flex">
            <div className="w-50 py-3">
                <div>
                    Welcome to Perfect Union Insurance Agency LLC, your trusted partner in the world of commercial truck
                    insurance.<br/><br/>
                    Our goal is to provide you with the insurance coverage you want at the lowest possible price, while
                    providing you with the highest level of customer service. We can furnish you with an assessment of
                    your insurance
                    needs and a choice of which package fits best. With a deep-rooted commitment to safeguarding your
                    business and
                    assets. <br/> <br/>
                    We are here to provide you with comprehensive insurance solutions tailored to meet the unique needs
                    of the
                    commercial trucking industry. Let one of our licensed professional insurance agents help you with
                    insurance
                    needs.
                </div>
            </div>
            <div className="w-50 py-3 px-5 d-flex flex-column">
                <h5 style={{color: "#324681"}}>PERFECT UNION INSURANCE AGENCY LLC</h5>
                <div className="d-flex py-2">
                    <div>
                        <img src={thumb} alt="BigCo Inc. logo"/>
                    </div>
                    <div className="px-2">
                        <div>
                            <h5>5+ years experience of customer relationship</h5>
                        </div>
                        <div>
                            Our vision is to set the standard of excellence among insurance providers by being
                            innovative, being financially strong, providing the right support and service for our
                            customers, exceeding their expectations. Our team has 5 + years of Experience in managing
                            policies and handling claims.
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default AboutUs;
