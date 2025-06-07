import React from 'react';
import BotCard from '../components/BotCard';

export default function Admin() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-red-600">管理者パネル</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <BotCard name="UserBot01" status="stopped" admin />
        <BotCard name="UserBot02" status="running" admin />
      </div>
    </div>
  );
}
