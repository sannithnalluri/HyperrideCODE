import './App.css';
import Bikebookingpage from './Compoents/BikeBooking/Bikebookingpage';
import UserDetailsPage from './Compoents/GlobalCompoents/Userinputpage';
import HomePage from './Compoents/HOMEPAGE/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route  path='/UserDetails' element={<UserDetailsPage/>}/>
            <Route path='/BikeBooking' element={<Bikebookingpage/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
