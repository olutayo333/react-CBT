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
function App() {
  return (
    <>
      
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='cbt' element={<Cbt/>} />
          <Route path='admin' element={<Admin/>}/>
          
          <Route path='home' element={<Home/>} />
          <Route path="intro" element={<Intro/>} />
          <Route path='timer' element={<Timer/>} />
          <Route path="/*" element={<Home/>} />
          
        </Routes>
    </>
  );
}

export default App;
