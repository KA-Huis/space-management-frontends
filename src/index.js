import React from 'react';
import './index.css';

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Profile from './Pages/Profile';
import Agenda from './Pages/Agenda';
import Home from './Pages/Home';
import Reparaties from './Pages/Reparaties';
import Beheerder from './Pages/Beheerder';
import Camera from './Pages/Camera';
import News from './Pages/News';

import Login from './Pages/Login';
import Newspage from './Pages/Newspage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/profile' element={<Profile/>}/>
          <Route exact path='/reparaties' element={<Reparaties/>}/>
          <Route exact path='/beheerder' element={<Beheerder/>}/>
          <Route exact path='/agenda' element={<Agenda/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/camera' element={<Camera/>}/>
          <Route exact path='/news' element={<News/>}/>
          <Route exact path='/newspage' element={<Newspage/>}/>
        </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);