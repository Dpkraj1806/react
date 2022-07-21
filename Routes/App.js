import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route, Link} from 'react-router-dom'
import Home from './home';
import Task from './task';
import Contact from './contact';

function App() {
  return (
    <>
   
    <BrowserRouter>
    <ul>
      <li><Link to="/">Welcome</Link></li>
      <li><Link to="home">Home</Link></li>
      <li><Link to="task">Task</Link></li>
      <li><Link to="contact">Contact</Link></li>
    </ul>
    <Routes>
      <Route path='/'element={<div>Welcome</div>}/>  
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/task' element={<Task/>}></Route>
      <Route path='/contact' element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
    </>
     );
}

export default App;
