import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Navbar } from './components/navbar';
import { Feeds } from './pages/Feeds';
import { Login } from './pages/login';

function App() {
  return (
    <div className="App">
   <Navbar/>
   <Routes>
     <Route path=""element={<Home/>} />
     <Route path="/feeds"element={<Feeds/>} />
     <Route path="/login"element={<Login/>} />
   </Routes>
    </div>
  );
}

export default App;
