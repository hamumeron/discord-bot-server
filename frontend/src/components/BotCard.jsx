import React from 'react';

export default function BotCard({ name, status, admin }) {
  const handleAction = () => {
    alert(`${name} を ${status === 'running' ? '停止' : '起動'}します。`);
  };

  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p className="mb-2">状態: <span className={status === 'running' ? 'text-green-600' : 'text-red-600'}>{status}</span></p>
      <button
        onClick={handleAction}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        {status === 'running' ? '停止' : '起動'}
      </button>
      {admin && (
        <p className="mt-2 text-sm text-gray-500">※ 管理者操作可能</p>
      )}
    </div>
  );
}
