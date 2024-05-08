import React from 'react';
import Admin from '@/components/admin';
import Login from '@/components/admin/login';
import { useState, useEffect } from 'react';

export default function Admins() {
  const [token, setToken] = useState<any>('');
  useEffect(() => {
    const newToken = sessionStorage.getItem('token');
    console.log("newToken",newToken);
    
    setToken(newToken);
  }, []);
  return (
    <div>
      {token ? <Admin /> : <Login />}
    </div>
  )
}
