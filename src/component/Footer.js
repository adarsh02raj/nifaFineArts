import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { AiFillTwitterCircle } from "react-icons/ai";
import '../util/Footer.css'
import { contact1, contact2, email } from '../util/text';
import gps from '../../assets/bgc/gplay.png'
import aps from '../../assets/bgc/appstore.png'

const Footer = ()=>{
    return(
        <div className="footer">
            <div className='upper'>
                <div className="company">
                    < h4>Company</ h4>
                    <p>About</p>
                    <p>Facilities</p>
                    <p>Career</p>
                    <p>Contact Us</p>
                    <p>Terms & Conditions</p>
                    <p>Refund Policy</p>
                    <p>Privacy Policy</p>
                </div>
                <div className="activities">
                    < h4>Activities</ h4>
                    <p>Art Gallary</p>
                    <p>Workshops</p>
                    <p>Outdoor Activities</p>
                    <p>Media Coverage</p>
                    <p>Art Events</p>
                    <p>Exhibition</p>
                    <p>Daily Activities</p>
                </div>
                <div className="popular">
                    < h4>popular Cources</ h4>
                    <p>Diploma In Fine Art</p>
                    <p>Certificate Hobby Cources</p>
                    <p>Entrance Preparation</p>
                    <p>BFA</p>
                    <p>Animation Sketching</p>
                    <p>Kids Diploma</p>
                </div>
                <div className="locations">
                    < h4>Our Locations</ h4>
                    <p>
                        Gurgaon (Dlf Phase - 4)<br/>
                        Mumbai (Andheri West)<br/>
                        South Delhi (Kailash Colony)<br/>
                    </p>
                    <br/>
                    < h4>
                        International Branches
                    </ h4>
                    <p>
                        London <br/>
                        USA <br/>
                        Dubai, UAE <br/>
                    </p>
                </div>
            </div>
            <div className='lower'>
                <div className='left'>
                    <h3>NIFA Is A Unit Of Nifaedutech Pvt Ltd.</h3>
                    <h3>Connect With Us</h3>
                    <p>{contact1}, {contact2}</p>
                    <p>{email}</p>
                    <div className='social'>
                        <FaFacebook className='fb'/>
                        <AiFillTwitterCircle  className='tw'/>
                        <FaInstagram className='in'/>
                        <FaYoutube className='yt'/>
                    </div>
                </div>
                <div className='right'>
                    <h1>Download The App</h1>
                    <div>
                        <li><a href=""><img className='playstore-image' src={gps} alt="Play Store" /></a></li>
                        <li><a href=""><img className='playstore-image' src={aps} alt="Play Store" /></a></li>
                    </div>
                    <p>© Copyright 2021 NIFA Fine Arts. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    )
}
export default Footer;


