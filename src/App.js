import React from "react"
import logo from './logo.svg';
import './App.css';
import Header from './modules/Header/Header';
import NavBar from './modules/Navbar/Navbar';
import Profile from './modules/Profile/Profile';
import Dialogs from './modules/Dialogs/Dialogs';





const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <NavBar />
      <div className='app-wrapper-content'>
<Dialogs />
        </div>
      {/* <Profile /> */}
      </div>
  );
}


export default App;
