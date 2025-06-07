import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const navigate = useNavigate();
  const signup = () => {
    navigate('/dashboard');
  };

  return (
    <div className="flex items-center justify-center h-screen bg-green-100">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-80">
        <h1 className="text-2xl font-bold mb-4 text-center">新規登録</h1>
        <input className="w-full p-2 mb-2 border rounded" type="text" placeholder="メールアドレス" />
        <input className="w-full p-2 mb-2 border rounded" type="password" placeholder="パスワード" />
        <input className="w-full p-2 mb-4 border rounded" type="text" placeholder="Bot名" />
        <button onClick={signup} className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600">
          登録する
        </button>
      </div>
    </div>
  );
}
