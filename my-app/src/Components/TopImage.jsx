import './TopImage.css';

const TopImage = () => {
    return (
        <div className='Top_Img_parent' style={{border:'1px solid green'}}>
           <div>
            <h1 style={{color:'white', fontSize:'38px'}}>India's Largest Community of Travellers</h1>
            <input type="text" placeholder='Search for itineraries, destinations, hotels or activities' className='input' />
           </div>
            
        </div>
    );
}
export default TopImage;