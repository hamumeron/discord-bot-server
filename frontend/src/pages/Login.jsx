import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const login = () => {
    // 本来はAPIと連携
    navigate('/dashboard');
  };

  return (
    <div className="flex items-center justify-center h-screen bg-blue-100">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-80">
        <h1 className="text-2xl font-bold mb-4 text-center">ログイン</h1>
        <input className="w-full p-2 mb-2 border rounded" type="text" placeholder="メールアドレス" />
        <input className="w-full p-2 mb-4 border rounded" type="password" placeholder="パスワード" />
        <button onClick={login} className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          ログイン
        </button>
      </div>
    </div>
  );
}
