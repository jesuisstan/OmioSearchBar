import React from 'react';
import './App.css';
import Header from './components/Header';
import OmioBar from './components/OmioBar';
import LogosBlock from './components/LogosBlock';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <OmioBar />
      <LogosBlock />
      <Footer />
    </div>
  );
};

export default App;
