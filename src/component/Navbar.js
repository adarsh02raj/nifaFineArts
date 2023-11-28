import logo from '../../assets/logo.png'
const Navbar = () => {
    return(
        <div className="navbar">
            <div className="nav-left">
                <img id='nav-logo' src={logo} alt="logo" />
            </div>
            <div className="nav-right">
                <div className='ui-nav'>

                </div>
                <div className='gen-nav'>
                    <div className='nav-menu'>
                        <ul id='menu'>
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;