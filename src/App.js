import './App.css';
import { Route,Routes } from 'react-router-dom';
import Layout from './Layout';
import Login from './Login';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';

function App() {
 
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/home' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
        </Route>
      </Routes>  
        <Footer/>
    </div>
  );
}

export default App;  