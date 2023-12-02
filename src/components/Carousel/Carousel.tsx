import React, {FC} from 'react';
import logo from '../../common/images/slide-01.jpeg';

interface CarouselProps {
  setPage: (page: string) => void;
}

export const Carousel: FC<CarouselProps> = (props) => {
  const setPage = (page: string) => {
    props.setPage(page)
  };

  return (
      <div style={{position: "relative", textAlign: "center"}}>
        <img src={logo} alt="BigCo Inc. logo" style={{width: "100%", height: "600px"}}/>
        <button className="btn btn-light"
                style={{position: "absolute", bottom: "8px", left: "16px", fontSize: "20px"}}
                onClick={() => setPage("ContactUs")}>Get Quote
        </button>
      </div>
  )
};

