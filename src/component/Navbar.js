import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const windowSizeHandler = () => {
    if (parseInt(window.screen.width) < 700) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", windowSizeHandler);
    return () => window.removeEventListener("resize", windowSizeHandler);
  }, []);
  return (
    <div className="navbar">
      <div className="nav-left">
        <img id="nav-logo" src={logo} alt="logo" />
      </div>
      <div className="nav-right">
        <div className="ui-nav"></div>
        <div className="gen-nav">
          <div className="nav-menu">
            {isMobile === false && (
              <ul id="menu">
                <li>Home</li>
                <li>About</li>
                <li>Cources</li>
                <li>Activities</li>
                <li>Admission</li>
                <li>Art Gallary</li>
                <li>Franchise</li>
                <li>Online Classes</li>
                <li>Videos</li>
                <li>Pay Fee</li>
                <li>Contact</li>
              </ul>
            )}
            {isMobile && (
              <select
                name="home"
                id="cars"
                value="Home"
                style={{
                  width: "100%",
                  height: "30px",
                  background: "blue",
                  color: "#FFF",
                }}
              >
                <option value="volvo">Home</option>
                <option value="saab">About</option>
                <option value="opel">Cources</option>
                <option value="audi">Activities</option>
                <option value="volvo">Admission</option>
                <option value="saab">Art Gallary</option>
                <option value="opel">Online Classes</option>
                <option value="audi">Videos</option>
                <option value="opel">Pay Fee</option>
                <option value="audi">Contact</option>
              </select>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;