import React, {FC} from 'react';
import logo from "../../common/images/Get-in-touch.jpg";

interface ContactUsProps {
}

const ContactUs: FC<ContactUsProps> = () => (
    <div className="d-flex" style={{width: "100%"}}>
        <div className="w-50 p-5">
            <p style={{fontWeight: "bold"}}>Working hours: </p>
            <p>Mon-Fri 9:00 am - 5:30 pm <br/>
                Sat-Sun Closed
            </p>

            <br/>
            <p>
                <h5>Perfect Union Insurance Agency LLC</h5>
                821 Milbrodt Drive <br/>
                Whiteland,IN <br/>
                46148 <br/><br/>
            </p>

            <div className="d-flex">
                <i className="fa fa-phone py-1 px-2"></i>
                <p>Phone: (463) 245-6061</p>
            </div>
            <div className="d-flex">
                <i className="fa fa-envelope py-1 px-2"></i>
                <p>contact@perfectunionins.com</p>
            </div>
        </div>
        <div className="w-50 p-5">
            <img style={{borderRadius: "20%", width: "inherit"}} src={logo}/>
            <form className="py-3">
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Name</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                           placeholder="Enter Name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Email</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"
                           placeholder="Enter Email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Phone</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"
                           placeholder="Enter Phone"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Message</label>
                    <textarea className="form-control" placeholder="Write your message"></textarea>
                </div>
                <div className="py-2">
                    <button type="submit" className="btn btn-primary" style={{backgroundColor: "#324681"}}>Submit
                    </button>
                </div>
            </form>
        </div>
    </div>
);

export default ContactUs;
