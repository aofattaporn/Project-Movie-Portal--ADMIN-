import './App.css';
import Navigation from './component/Navigation';



// import pages 
import HomePage from './pages/HomePage';
import MoviePage from './pages/MoviesPage';
import CinemasPage from './pages/CinemasPage/CinemasPage';
import CinemasCreate from './pages/CinemasPage/CinemasCreate';
import CinemasEdite from './pages/CinemasPage/CinemasEdite';
import PromotionPage from './pages/PromotionPages';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Navigation/>

      <Routes>
        <Route className='test' path='/' element={<HomePage/>}></Route>
        <Route path='/movies' element={<MoviePage/>}></Route>
        <Route path='/cinemas' element={<CinemasPage/>}></Route>
        <Route path='/cinemas/create' element={<CinemasCreate/>}></Route>
        <Route path='/cinemas/edite/:id' element={<CinemasEdite/>}></Route>

        <Route path='/promotions' element={<PromotionPage/>}></Route>
      </Routes>
      

    </div>
  );
}

export default App;
