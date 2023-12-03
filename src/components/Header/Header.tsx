import React, {FC, useEffect, useState} from 'react';
import './Header.css';
import logo from "../../common/images/logo.jpeg";

interface HeaderProps {
  setPage: (page: string) => void;
  page: string
}

export const Header: FC<HeaderProps> = (props) => {
  const [selectedPage, setSelectedPage] = useState<string | null>("Home");
  const setPage = (page: string) => {
    props.setPage(page);
    setSelectedPage(page);
  };

  useEffect(()=> {
    setSelectedPage(props.page);
  }, [props.page]);

  return (
      <div className="d-flex justify-content-between">
        <div>
          <a className="navbar-brand"
             style={{
               height: "120px",
               overflow: "hidden",
               top: "0px",
               left: "0px",
               position: "relative"
             }}
          >
            <img src={logo} alt="BigCo Inc. logo" style={{width: "100%", height: "140px"}}/>
          </a>
        </div>
        <div>
          <div className="d-flex contact-info-font px-2 justify-content-end">
            <div className="py-3"><i className="fa fa-phone fa-2x" aria-hidden="true"
                                     style={{fontWeight: "bold"}}></i></div>
            <div className="mx-2">
              <span style={{fontWeight: "bold", color: "#D7000F"}}>Call us</span>
              <p style={{fontWeight: "bold"}}>(463) 245-6061</p>
            </div>
          </div>
          <div>
            <div className="navbar navbar-expand-lg px-2" style={{borderTop: "5px solid black"}}>
              <ul className="header-item-font navbar-nav">
                <li className="nav-item">
                  <button
                      className={`nav-link btn btn-link ${selectedPage === 'Home' ? 'text-danger' : 'text-dark'}`}
                      type="button"
                      style={{fontWeight: "bold"}}
                      onClick={() => setPage("Home")}>Home
                  </button>
                </li>
                <li className="nav-item">
                  <button
                      className={`nav-link btn btn-link ${selectedPage === 'AboutUs' ? 'text-danger' : 'text-dark'}`}
                      style={{fontWeight: "bold"}}
                      onClick={() => setPage("AboutUs")}>About us
                  </button>
                </li>
                <li className="nav-item">
                  <button
                      className={`nav-link btn btn-link ${selectedPage === 'OurProducts' ? 'text-danger' : 'text-dark'}`}
                      style={{fontWeight: "bold"}}
                      onClick={() => setPage("OurProducts")}>Our Products
                  </button>
                </li>
                <li className="nav-item">
                  <button
                      className={`nav-link btn btn-link ${selectedPage === 'ContactUs' ? 'text-danger' : 'text-dark'}`}
                      style={{fontWeight: "bold"}}
                      onClick={() => setPage("ContactUs")}>Contact us
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  )
};
