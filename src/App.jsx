import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Countries from './components/Countries';
import Home from './components/Home';
import Country from './components/Country';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/countries/:name" element={<Country />} />
          <Route path="countries" element={<Countries />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
