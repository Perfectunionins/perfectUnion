import React, {FC} from 'react';
import './Footer.css';
interface FooterProps {
    setPage: (page: string) => void;
}

const Footer: FC<FooterProps> = (props) => {
    const setPage = (page: string) => {
        props.setPage(page)
    };

    return (
        <div className="d-flex footer-item-font border-top">
            <div className="p-3 w-50">
                <div className="w-75 pb-3">
                    <h3>Quick Links</h3>
                    <div className="d-flex justify-content-between py-2">
                        <div onClick={() => setPage("AboutUs")}>
                            About us
                        </div>
                        <div onClick={() => setPage("ContactUs")}>
                            Contact us
                        </div>
                        <div onClick={() => setPage("OurProducts")}>
                            Our products
                        </div>
                    </div>
                </div>
                <div>
                    <p>@ 2023 Perfect Union Insurance Agency LLC </p>
                </div>

            </div>
            <div className="p-3 px-5 w-50 border-start">
                <h3>Contact Information</h3>
                <div className="w-75 pb-2 d-flex justify-content-between py-2">
                    <div>
                        821 Milbrodt Drive <br/>
                        Whiteland,IN <br/>
                        46184 <br/><br/>
                    </div>
                    <div>
                        Phone: (463) 245-6061 <br/>
                        E-mail: contact@perfectunionins.com
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Footer;
