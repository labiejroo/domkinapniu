import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cennik from './routes/cennik';
import Galeria from './routes/galeria';
import Oferta from './routes/oferta';
import Regulamin from './routes/regulamin';
import Kontakt from './routes/kontakt';
import NavBar from './components/NavBar/NavBar.jsx';
import Footer from './components/Footer/Footer';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="oferta" element={<Oferta />} />
      <Route path="galeria" element={<Galeria />} />
      <Route path="cennik" element={<Cennik />} />
      <Route path="regulamin" element={<Regulamin />} />
      <Route path="kontakt" element={<Kontakt />} />
    </Routes>
  <Footer />
  </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
