import './App.css';
import AdminPage from './Compoents/Admin_Portal/Mainadminportal/AdminPage';
import { UserProvider } from './Compoents/Admin_Portal/Mainadminportal/userContext';
import Bikebookingpage from './Compoents/BikeBooking/Bikebookingpage';
import UserDetailsPage from './Compoents/GlobalCompoents/Userinputpage';
import HomePage from './Compoents/HOMEPAGE/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Aboutus from './Pages/Aboutus';
import Contactuspage from './Pages/Contactuspage';
import Terms from './Pages/Terms';


function App() {
  return (
    <div className="App">
      <UserProvider>
        <Router>
          <Routes>
          
            <Route path='/' element={<HomePage/>}/>
            <Route path='/Aboutus' element={<Aboutus/>}/>
            <Route path='/Contact' element={<Contactuspage/>}/>
            <Route path='/terms' element={<Terms/>}/>

            <Route  path='/UserDetails' element={<UserDetailsPage/>}/>
            <Route path='/BikeBooking' element={<Bikebookingpage/>}/>
            <Route path='/Adminportal' element={<AdminPage/>}/>
    

          </Routes>
        </Router>
        </UserProvider>
    </div>
  );
}

export default App;
