import gps from '../../assets/bgc/gplay.png'
import aps from '../../assets/bgc/appstore.png'

const OnlineClass = () => {
  return (
    <div className="onlineClass">
        <div className="onlineClass-left">
            <div className="oc-heading">
                <h1>Online Classes</h1>
            </div>
            <div className="oc-para">
                <p>
                Dear Students/Parents, Nifa presents its Learning App for your regular
                art practice in which we have added many amazing features Like:
                Step-by-step recorded demo videos prepared by your faculty members.
                Regular assessment of your practise through assignment section. Live
                class section from same app. Attendance, payment invoice, art news,
                announcements, important information and direct connect with the
                management team are some more features. So hurry up n join now to
                experience personalised coaching by experts sitting at your home.
                </p>
                <p>We wish u Happy Learning. Stay Safe n Healthy.</p>
            </div>
            <div className="oc-btn">
                <button className="commonBtn">Read More</button>
            </div>
            <div className="oc-download">
                <h1>Download The App</h1>
                <div>
                    <li><a href=""><img className='playstore-image' src={gps} alt="Play Store" /></a></li>
                    <li><a href=""><img className='playstore-image' src={aps} alt="Play Store" /></a></li>
                </div>
            </div>
        </div>
        <div className='onlineClass-right'>
            <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/-9cJjaLXKqE?rel=0" frameborder="0" allowfullscreen=""></iframe>
        </div>
    </div>
  );
};

export default OnlineClass;
