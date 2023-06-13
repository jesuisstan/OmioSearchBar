import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import OmioBar from './components/OmioBar';

const App = () => {
  return (
    <div className="App">
      <Header />
      <OmioBar />
      <Footer />
    </div>
  );
};

export default App;
