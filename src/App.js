import './App.css';
import {Routes, Route} from 'react-router-dom'
//pages
import Home from './pages/home';
import About from './pages/about';
import Navbar from './components/Navbar';
import Contact from './pages/contact';

function App() {
  return (
    <div className="App">
     <header>
      <Navbar/>
     </header>
<Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/about' element={<About/>}></Route>
  <Route path='/contact' element={<Contact/>}></Route>
</Routes>
    </div>
  );
}

export default App;
