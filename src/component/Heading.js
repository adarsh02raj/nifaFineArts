import { contact1, contact2, email, facebook, headerTxt, instagram, twitter, youtube } from "../util/text";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { IoMail, IoCall } from "react-icons/io5";

const Heading = () =>{
    return(
        <div className="heading">
            <div className="heading-left">
                {headerTxt}
            </div>
            <div className="heading-right">
                <div className="right-left">
                    <ul>
                        <li> <IoCall /> {contact1}</li>
                        <li> <IoCall /> {contact2}</li>
                    </ul>
                </div>
                <div className="right-right">
                    <ul>
                        <li className="right-right-mail"><IoMail />{email}</li>
                        <li><a href={facebook}><FaFacebookF /></a></li>
                        <li><a href={twitter}></a><FaTwitter /></li>
                        <li><a href={instagram}></a><FaInstagram /></li>
                        <li><a href={youtube}></a><FaYoutube /></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Heading;