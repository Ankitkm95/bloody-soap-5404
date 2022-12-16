
import './App.css';


import Navbar from './Components/Navbar';
import Body from './Components/Body';
import Footer from './Components/Footer';

function App() {

  let arr = [
    {
      imgUrl:'https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669369572_1656771413_arnold_antoo_yp6fohzfdvs_unsplash.jpg',
      desc: 'Around Kerala In 15 Dishes! Must Eat Food When In Kerala.',
      id: 1
    },
   
    {
      imgUrl:'https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669368370_1650865492_nature_photographer_29ezcwtmtnm_unsplash.jpg',
      desc: 'Around Kerala In 15 Dishes! Must Eat Food When In Kerala.',
      id: 3
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
      imgUrl:'https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669368469_1562007949_suna_hai_uske_labon_se_gulab_jalte_hai5_62.png',
      desc: 'Around Kerala In 15 Dishes! Must Eat Food When In Kerala.',
      id: 4
    },
    {
      imgUrl:'https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669369572_1656771413_arnold_antoo_yp6fohzfdvs_unsplash.jpg',
      desc: 'Around Kerala In 15 Dishes! Must Eat Food When In Kerala.',
      id: 1
    },
   
    {
      imgUrl:'https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669368370_1650865492_nature_photographer_29ezcwtmtnm_unsplash.jpg',
      desc: 'Around Kerala In 15 Dishes! Must Eat Food When In Kerala.',
      id: 3
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
      imgUrl:'https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669368469_1562007949_suna_hai_uske_labon_se_gulab_jalte_hai5_62.png',
      desc: 'Around Kerala In 15 Dishes! Must Eat Food When In Kerala.',
      id: 4
    }

  ]

  return (
    <div className="App">
      <Navbar />
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
