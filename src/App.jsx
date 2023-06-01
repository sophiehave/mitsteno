import {useState} from 'react'
import './App.css';
import Header from './Components/molecules/Header';
import Navbar from './Components/molecules/Navbar';
import Overblik from './Components/molecules/Overblik';
import Provesvar from './Components/molecules/Provesvar';
import Kommendetider from './Components/molecules/Kommendetider';
import Recept from './Components/molecules/Recept';
import Beskeder from './Components/molecules/Beskeder';
import Minebeskeder from './Components/molecules/Minebeskeder';
import Historik from './Components/molecules/Historik';
import Besogsnotat from './Components/molecules/Besogsnotat';
import Sporgeskema from './Components/molecules/Sporgeskema';
import Uploadinformation from './Components/molecules/Uploadinformation';
import Kontakt from './Components/molecules/Kontakt';
import Findvej from './Components/molecules/Findvej';
import Mineinformationer from './Components/molecules/Mineinformationer';
import Skrivbesked from './Components/molecules/Skrivbesked';
import { Route, Routes } from 'react-router-dom';
// import{ Dna } from 'react-loader-spinner';

function App() {
  // let [loading, setLoading] = useState(false);

  // const toggleLoading = () => {
  //   setLoading((prevState) => !prevState);
  // };

  return (
    <div className="App">
      {
        <div>
        <Header />
        <Navbar />
        {/* {loading &&<Dna
          visible={true}
          height="100"
          width="100%"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />} */}
          <Routes>
            <Route path='/' element={<Overblik />}/>
            <Route path='/beskeder' element={<Beskeder/>}/>
            <Route path='/kommendetider' element={<Kommendetider />}/>
            <Route path='/provesvar' element={<Provesvar />}/>
            <Route path='/recept' element={<Recept />}/>
            <Route path='/minebeskeder' element={<Minebeskeder />}/>
            <Route path='/historik' element={<Historik />}/>
            <Route path='/besogsnotat' element={<Besogsnotat />}/>
            <Route path='/sporgeskema' element={<Sporgeskema/>}/>
            <Route path='/uploadinformation' element={<Uploadinformation/>}/>
            <Route path='/kontakt' element={<Kontakt/>}/>
            <Route path='/findvej' element={<Findvej/>}/>
            <Route path='/mineinformationer' element={<Mineinformationer/>}/>
            <Route path='/skrivbesked' element={<Skrivbesked/>}/>
          </Routes>

        </div>
    }
    </div>
  );
}

export default App;
