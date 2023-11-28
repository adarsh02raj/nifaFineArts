import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import cr1 from "../../assets/home-banner1.jpg";
import cr2 from "../../assets/home-banner2.jpg";
import cr3 from "../../assets/home-banner3.jpg";
import cr4 from "../../assets/home-banner4.jpg";
import cr5 from "../../assets/home-banner5.jpg";

const Carousels = () => {
  return (
    
    <div className="carousel">
        <Carousel 
          autoPlay={true} 
          showThumbs={false}
          infiniteLoop
          showStatus={false} 
          stopOnHover={false}
        >
        <div>
            <img src={cr1} alt="img1"/>
        </div>
        <div>
            <img src={cr2} alt="img1"/>
        </div>
        <div>
            <img src={cr3} alt="img1"/>
        </div>
        <div>
            <img src={cr4} alt="img1"/>
        </div>
        <div>
            <img src={cr5} alt="img1"/>
        </div>
        
        </Carousel>
    </div>
  );
};
export default Carousels;
