import React, { useState } from 'react';
import HomePage from './pages/HomePage';
import ReceiveMoneyPage from './pages/ReceiveMoneyPage';
import WithdrawPage from './pages/WithdrawPage';

export default function App() {
  const [page, setPage] = useState('home');

  if (page === 'home') {
    return (
      <div>
        <HomePage />
        <button onClick={() => setPage('receive')}>Go to Receive</button>
        <button onClick={() => setPage('withdraw')}>Go to Withdraw</button>
      </div>
    );
  }

  if (page === 'receive') {
    return (
      <div>
        <button onClick={() => setPage('home')}>Back</button>
        <ReceiveMoneyPage />
      </div>
    );
  }

  if (page === 'withdraw') {
    return (
      <div>
        <button onClick={() => setPage('home')}>Back</button>
        <WithdrawPage />
      </div>
    );
  }

  return <h1>Page not found</h1>;
}
