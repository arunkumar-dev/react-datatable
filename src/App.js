// App.js
import React from 'react';
import './App.css';
import BasicTableComponent from './components/basic.able';
import FilterTableComponent from './components/filter.table';
import PaginationTableComponent from './components/pagination.table'; 
import SortingTableComponent from './components/sorting.table';

function App() {

  return (
    <div className="App">

      <h3>Basic Table using <code>react-table</code></h3>

      <BasicTableComponent />
      <FilterTableComponent/>
      <PaginationTableComponent/>
      <SortingTableComponent/>

    </div>
  );
}

export default App;