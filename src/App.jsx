import React from 'react';
import HomePage from './pages/HomePage';
import ReceiveMoneyPage from './pages/ReceiveMoneyPage';
import WithdrawPage from './pages/WithdrawPage';

export default function App() {
  return (
    <div>
      <HomePage />
      <ReceiveMoneyPage />
      <WithdrawPage />
    </div>
  );
}
