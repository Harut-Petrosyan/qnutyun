import './App.css';
import Home from './Home';
import Info from './Info';
import Bascet from './Bascet';
import Contact from './Contact';
import Layout from './Layout'
import Header from './Header'
import Footer from './Footer'
import {Route,Routes } from 'react-router-dom';
import PageWithID from './PageWithId';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/home' element={<Home/>}/>
          <Route path='/info' element={<Info/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/bascet' element={<Bascet/>}/>
          <Route path="/page/:id" component={<PageWithID/>}/>
        </Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;