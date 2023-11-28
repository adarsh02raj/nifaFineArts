import Heading from "./Heading";
import Navbar from "./Navbar";
import '../util/header.css'

const Header = () => {
    return(
        <div className="header">
            <Heading />
            <Navbar />
        </div>
    )
}
export default Header;