import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';
import { useRouter } from 'next/router';
import { Input } from "@nextui-org/react";
import { EyeSlashFilledIcon } from '@/public/assets/Images/EyeSlashFilledIcon';
import { EyeFilledIcon } from '@/public/assets/Images/EyeFilledIcon';
export default function Login() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  const router = useRouter();
  useEffect(() => {
    const storedToken = sessionStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
      router.push('/admin');
    }else{handleLogout()}
  }, []);

  const handleLogin = async () => {
   
    try {
      const response = await axios.post('https://vishnoi-handloom-api.vercel.app/v1/auth/login', {
        email: email,
        password: password
      });
      const newToken = response.data.token;
      sessionStorage.setItem('token', newToken);
      setToken(newToken);
      router.push('/admin');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };
 
  const handleLogout = () => {
    sessionStorage.removeItem('token');
    setToken('');
    router.push('/admin/login');
  };
  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <div className='flex flex-col justify-center items-center gap-[20px] mt-[150px] '>
      <div className="bg-white p-6 rounded-lg shadow-md flex flex-col gap-[20px] md:w-1/3 max-md-w-full border-[1px]">

        <p className='text-center font-bold text-size-[60px]'>Admin Login</p>
        <Input
          value={email}
          type="email"
          label="Email"
          variant="bordered"
          className="w-full"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          value={password}
          label="Password"
          variant="bordered"
          placeholder=""
          onChange={(e) => setPassword(e.target.value)}

          endContent={
            <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
              {isVisible ? (
                <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
          type={isVisible ? "text" : "password"}
          className="w-full"
        />
        <button className="w-full bg-black hover:bg-gray-900 text-white font-bold py-2 px-4 rounded mt-4" type="button"
          onClick={handleLogin}>
          Login
        </button>
        
      </div>
    </div>
  )
}
