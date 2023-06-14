import { Route, Routes } from "react-router-dom";
import './App.css';

import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Request_recieved from "./components/Profile/Request_recieved";
import Become_tutor from "./components/tutor/Become_tutor";
import Learn_request from "./components/tutor/Learn_request";
import Tutor from "./components/tutor/Tutor";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/tutor" element={<Tutor/>}/>
        <Route path="/become-tutor" element={<Become_tutor/>}/>
        <Route path="/learn-request" element={<Learn_request/>}/>
        <Route path="/request-recieved" element={<Request_recieved/>}/>
        
        <Route path="/profile" element={<Profile/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
