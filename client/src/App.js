import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './components/Home/Home.jsx';
import RegisterUser from './components/RegisterUser/RegisterUser';
import RegisterEvent from './components/RegisterEvent/RegisterEvents';


function App() {
  return (
    <BrowserRouter>
      <div>
          <Routes>
            <Route exact path='/' element= {<Home/>}/>
            <Route exact path='/register' element= {<RegisterUser/>}/>
            {/* <Route exact path='' element= {<Ruta/>}/> 
            <Route exact path='' element= {<Ruta/>}/>  */} 
            <Route exact path='/events' element={<RegisterEvent/>}/>
          </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;