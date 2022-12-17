
import './App.css';


import Navbar from './Components/Navbar';
import Body from './Components/Body';
import Footer from './Components/Footer';
import TopImage from './Components/TopImage';

function App() {

  let arr = [
    {
      imgUrl:'https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669369572_1656771413_arnold_antoo_yp6fohzfdvs_unsplash.jpg',
      desc: 'Around Kerala In 15 Dishes! Must Eat Food When In Kerala.',
      id: 1
    },
   
    {
      imgUrl:'https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669368370_1650865492_nature_photographer_29ezcwtmtnm_unsplash.jpg',
      desc: 'Top 10 Resorts In Munnar For Your Next Holiday.',
      id: 3
    },
    {
      imgUrl:'https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669368469_1562007949_suna_hai_uske_labon_se_gulab_jalte_hai5_62.png',
      desc: 'Save The Date: 5th Edition Of Kochi Muziris-Biennale',
      id: 4
    },
    {
      imgUrl:'https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669368402_1656747258_dream_holidays_c8mz8fp_zvc_unsplash.jpg',
      desc: 'These Luxury Properties In Kerala For Your Honeymoon',
      id: 2
    },
    {
      imgUrl:'https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669369584_1668695824_abhishek_prasad_n3vzlebhovk_unsplash.jpg',
      desc: 'Around Kerala In 15 Dishes! Must Eat Food When In Kerala.',
      id: 1
    },
    {
      imgUrl:'https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669615182_1669300591_snip20220609_1_1024x573.png',
      desc: '10 Events You Can not Miss This Winter In Delhi.',
      id: 2
    },
    {
      imgUrl:'https://static2.tripoto.com/media/filter/tst/img/388225/TripDocument/1508499780_106187671.jpg',
      desc: 'This Luxury Cruise In Kerala For Your Next Family Vacay',
      id: 3
    },
    {
      imgUrl:'https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1651046452_1545558276_erdap_2129568_1280.jpg',
      desc: 'Around Kerala In 15 Dishes! Must Eat Food When In Kerala.',
      id: 4
    },
    {
      imgUrl:'https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669369542_1639536937_adobestock_198014696_scaled.jpeg',
      desc: 'Around Kerala In 15 Dishes! Must Eat Food When In Kerala.',
      id: 1
    },
   
    {
      imgUrl:'https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1666949736_1635179153_pahalgam_gulmarg.jpeg',
      desc: 'Around Kerala In 15 Dishes! Must Eat Food When In Kerala.',
      id: 3
    },
    {
      imgUrl:'https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669621772_1479799117_19594481674_73bfdd5e4a_z.jpg',
      desc: 'Around Kerala In 15 Dishes! Must Eat Food When In Kerala.',
      id: 4
    },
    {
      imgUrl:'https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669368402_1656747258_dream_holidays_c8mz8fp_zvc_unsplash.jpg',
      desc: 'Around Kerala In 15 Dishes! Must Eat Food When In Kerala.',
      id: 2
    },
    {
      imgUrl:'https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669369572_1656771413_arnold_antoo_yp6fohzfdvs_unsplash.jpg',
      desc: 'Around Kerala In 15 Dishes! Must Eat Food When In Kerala.',
      id: 1
    },
    {
      imgUrl:'https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669615182_1669300591_snip20220609_1_1024x573.png',
      desc: 'Around Kerala In 15 Dishes! Must Eat Food When In Kerala.',
      id: 2
    },
    {
      imgUrl:'https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669368370_1650865492_nature_photographer_29ezcwtmtnm_unsplash.jpg',
      desc: 'Around Kerala In 15 Dishes! Must Eat Food When In Kerala.',
      id: 3
    },
    {
      imgUrl:'https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669620259_1564126081_manta_1639965_640.jpg',
      desc: 'Around Kerala In 15 Dishes! Must Eat Food When In Kerala.',
      id: 4
    },
    {
      imgUrl:'https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669368469_1562007949_suna_hai_uske_labon_se_gulab_jalte_hai5_62.png',
      desc: 'Around Kerala In 15 Dishes! Must Eat Food When In Kerala.',
      id: 4
    },
    {
      imgUrl:'https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669368402_1656747258_dream_holidays_c8mz8fp_zvc_unsplash.jpg',
      desc: 'Around Kerala In 15 Dishes! Must Eat Food When In Kerala.',
      id: 2
    },
    {
      imgUrl:'https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669369572_1656771413_arnold_antoo_yp6fohzfdvs_unsplash.jpg',
      desc: 'Around Kerala In 15 Dishes! Must Eat Food When In Kerala.',
      id: 1
    }

  ]

  return (
    <div className="App">
      <Navbar />
      <TopImage />
      <div className='Main_div'>
        {
          arr.map((el) => {
            return <Body key={el.id} imgUrl={el.imgUrl} desc={el.desc} />
          })
        }
      </div>
      <Footer />
    </div>
  );
}

export default App;
