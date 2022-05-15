import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import { publicRoute } from './Route/publicRoutes';


import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function App() {
  return (
    <>
      <Navbar>
        <Routes>
          {/* <Route path='/' element={<Home/>}></Route>
          <Route path='/services' element={<Services/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<Login/>}></Route> */}

          {
            publicRoute.map(({path, Component}, index) => <Route key={index} path={path} element={<Component/>}></Route>)
          }
        </Routes>
      </Navbar>
      
    </>
  );
}

export default App;
