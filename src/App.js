
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Details from './components/Details';


function App() {
  return (
   
     
      <Router>  
      <Header />
      <Routes>
       <Route path='/' element={<Home/>}></Route>
       <Route path='/productdetail/:id' element={<Details/>}></Route>
       </Routes>
       
    
      <Footer />
  

    </Router>
     
   
  
  );
}

export default App;
