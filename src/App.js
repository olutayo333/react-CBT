import logo from './logo.svg';
import './App.css';
// import Cbt from '../components/Cbt'
// import { Route, Routes } from 'react-router-dom'
// import Admin from '../components/Admin'
// import Home from '../components/Home'
// import Intro from '../components/Intro'
import Cbt from './components/Cbt';
import Admin from './components/Admin';
import Home from './components/Home';
import Intro from './components/Intro';
import Timer from './components/Timer';
import { Route, Routes } from 'react-router-dom';
import Topbutton from './components/Topbutton';
import Timer2 from './components/Timer2';
import Timer3 from './components/Timer3';
function App() {
  
  return (
    <>
      
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='cbt' element={<Cbt duration={10 * 60 * 1000} />} />
          <Route path='admin' element={<Admin/>}/>
          
          <Route path='home' element={<Home/>} />
          <Route path="intro" element={<Intro/>} />
          <Route path='timer' element={<Timer/>} />
          <Route path="top" element={<Topbutton/>}/>
          <Route path='timer2' element={<Timer2/>} />
          {/* <Route path='timer5' element={<Timer5 duration={2 * 24 * 60 * 60 * 1000} />}/> */}
          <Route path='timer3' element={<Timer3  />}/>
          <Route path="/*" element={<Home/>} />
          
        </Routes>
    </>
  );
}

export default App;
