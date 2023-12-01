import React, {FC} from 'react';
import logo from "../../common/images/ourProducts.jpeg";
import fleetLogo from "../../common/images/fleet-insurance.jpeg";
import ownerOpLogo from "../../common/images/owner-oper.jpeg";
import comLogo from "../../common/images/commerical-insurance.jpeg";

interface OurProductsProps {
}

const OurProducts: FC<OurProductsProps> = () => (
    <div>
        <img src={logo} alt="BigCo Inc. logo" style={{width: "100%", height: "300px"}}/>
        <div className="py-4 d-flex">
            <img src={comLogo} alt="BigCo Inc. logo" style={{width: "200px", height: "120px"}}/>
            <div className="px-4">
                <h4>COMMERCIAL TRUCK INSURANCE</h4>
                <p style={{fontSize: "18px"}}>
                    We offer a wide range of coverage options, including liability insurance,
                    physical
                    damage coverage, cargo insurance, and more. Our policies are designed to protect you and your assets
                    in
                    every
                    aspect of your trucking operations.
                </p>
            </div>
        </div>

        <div className="py-3 d-flex">
            <img src={fleetLogo} alt="BigCo Inc. logo" style={{width: "200px", height: "120px"}}/>
            <div className="px-4">
                <h4>FLEET INSURANCE</h4>
                <p style={{fontSize: "18px"}}>
                    If you manage a fleet of trucks, our fleet insurance programs are tailored to meet your
                    specific requirements. We simplify the insurance process so you can focus on running your business
                    efficiently.
                </p>
            </div>
        </div>

        <div className="py-3 d-flex">
            <img src={ownerOpLogo} alt="BigCo Inc. logo" style={{width: "186px", height: "120px"}}/>
            <div className="px-4">
                <h4>OWNER-OPERATOR INSURANCE</h4>
                <p style={{fontSize: "18px"}}>
                    We provide insurance solutions for owner-operators, ensuring that you receive
                    the
                    protection you need to run your independent trucking business with confidence.
                </p>
            </div>
        </div>
    </div>
);

export default OurProducts;
