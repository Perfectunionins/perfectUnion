import React, {FC} from 'react';
import {Carousel} from "../Carousel/Carousel";
import logo from "../../common/images/page1-img1.jpeg";


interface HomeProps {
    setPage: (page: string) => void;
}

const Home: FC<HomeProps> = (props) => {
    const setPage = (page: string) => {
        props.setPage(page)
    };

    return (
        <div>
            <Carousel setPage={setPage}/>
            <div className="py-5 px-2">
                <h3>We Work for You!</h3>
                <div className="d-flex">
                    <div className="w-50 py-3">
                        <div>
                            Our goal is to provide you with the insurance coverage you want at the lowest possible
                            price,
                            while providing you with the highest level of customer service. We can furnish you with an
                            assessment of your insurance needs and a choice of which package fits best.
                            <br/><br/>
                            It helps to find an agency that you know and can trust. Our staff has the knowledge and
                            experience of our insurance products to provide maximum benefit and protection to our
                            clients.
                            Let one of our licensed professional insurance agents help you with any of your personal or
                            business insurance needs.
                        </div>
                    </div>
                    <div className="w-50 py-3 px-5 d-flex">
                        <img src={logo} alt="BigCo Inc. logo" style={{width: "200px", height: "120px"}}/>
                        <div className="px-4">
                            <h4>TRUCKING INSURANCE</h4>
                            <p>
                                Offering the knowledge and experience to provide customized trucking packages that meet
                                your
                                specific needs.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Home;
