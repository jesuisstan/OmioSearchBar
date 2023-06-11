import React from 'react';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <Footer />
    </div>
  );
};

export default App;
