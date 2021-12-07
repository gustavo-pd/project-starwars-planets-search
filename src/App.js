import React from 'react';
import './App.css';
import AppProvider from './context/AppProvider';
import Table from './components/Table';
import Header from './components/Header';

function App() {
  return (
    <AppProvider>
      <Header />
      <Table />
    </AppProvider>
  );
}

export default App;
