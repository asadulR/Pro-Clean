import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import { publicRoute } from './Route/publicRoutes';
import Services from './pages/Services';


import AOS from 'aos';
import 'aos/dist/aos.css';
import PrivateRoute from './auth/PrivateRoute';
import { privateRoute } from './Route/privateRoutes';
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
            publicRoute.map(({ path, Component }, index) => <Route key={index} path={path} element={<Component />}></Route>)
          }

          {/* <Route path= "/services" element={
          <PrivateRoute><Services/></PrivateRoute>
          }></Route> */}

          <Route element={<PrivateRoute />}>
            {
              privateRoute.map(({ path, Component }, index) => <Route key={index} path={path} element={<Component />}></Route>)
            }
          </Route>
        </Routes>
      </Navbar>

    </>
  );
}

export default App;
