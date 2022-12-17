import './Navbar.css'


const Navbar = () =>{
    return(
        <div className="main">
            <div className='logo'>
                <img src='https://i.ibb.co/b6WNg8y/TRAVEL.png' alt='logo' className='logo1'/>
            </div>
            
            <div className="sub1">
                <input placeholder='Search for itineraries, destinations, hotels or activities'></input>
            </div>
            <div className="sub2">
            <h3>Inspirations</h3>
            <h3>Forum</h3>
            <h3>Packages</h3>
            <h3>Publish</h3>
            <h3>Sign in</h3>
            </div>
            
        </div>
    );
}
export default Navbar;