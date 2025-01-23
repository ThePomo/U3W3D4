import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ArticleList from './components/ArticleList';
import NavbarComponent from './components/Navbar';
import ArticleDetails from './components/ArticleDetails';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route path='/' element={<ArticleList />} />
          <Route path='/article/:id' element={<ArticleDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
