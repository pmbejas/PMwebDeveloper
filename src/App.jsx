import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './pages/Layout/Layout';
import { Main } from './pages/Main/Main';
import { Contact } from './pages/Contact/Contact';
import { Error404 } from './pages/ErrorPages/Error404';
import { Portfolio } from './pages/Portfolio/Portfolio';

function App() {

  return (
    <Routes>
      <Route path="/" element={ <Layout /> }>
        <Route index element={ <Main /> } />
        <Route path="/work" element={ <Portfolio /> } />
        <Route path="/contact" element={ <Contact /> } />
        <Route path="*" element={ <Error404 />} />
      </Route>
    </Routes>
  )
}

export default App
