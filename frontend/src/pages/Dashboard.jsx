import React from 'react';
import BotCard from '../components/BotCard';

export default function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">マイBot一覧</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <BotCard name="ExampleBot" status="running" />
      </div>
    </div>
  );
}
