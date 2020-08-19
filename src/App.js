import React from 'react';
import Child from './child';
import './App.css';
import {TransactionProvider} from './transactionContext';

function App() {
  return (
    <div >
      <TransactionProvider>
      <Child/>
      </TransactionProvider>
    </div>
  );
}

export default App;
