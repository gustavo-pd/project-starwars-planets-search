import React from 'react';
import Table from './components/Table';
import Filter from './components/Filter';
import AppProvider from './context/AppProvider';

function App() {
  return (
    <main className="main">
      <AppProvider>
        <Filter />
        <Table />
      </AppProvider>
    </main>
  );
}

export default App;
