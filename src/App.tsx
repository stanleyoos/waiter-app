import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom'
import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';
import HomePage from './components/pages/HomePage/HomePage';
import SingleTable from './components/pages/SingleTable/SingleTable';
import NotFound from './components/pages/NotFound/NotFound';
import About from './components/pages/About/About';

function App() {
  return (
    <Container>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/table/:id' element={<SingleTable/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
      <Footer/>
    </Container>
  );
}

export default App;
