import './App.css';
import { Route,Routes } from 'react-router-dom';
import Layout from './Layout';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Info from './Info';
import Contact from './Contact';

function App() {
 
  return (
    <div className="App">
      <Header/>
            <h1 className='Proda'>Если хочешь приобрести себе что-нибудь то тебе суда </h1>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/home' element={<Home/>}/>
          <Route path='/info' element={<Info/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Route>
      </Routes>  
        <Footer/>
    </div>
  );
}

export default App;