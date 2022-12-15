import './Body.css';

const Body = ({imgUrl, desc}) => {
    return (
        <div className='Cardss'>
            <img src={imgUrl} className='images' alt='image_Url not found' />
            <h3>{desc}</h3>
        </div>
    );
}

export default Body;