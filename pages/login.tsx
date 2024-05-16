"use client";

import { useState, ChangeEvent } from 'react';
import axios from 'axios';
import Router from 'next/router'; 

import Button from '@mui/material/Button';

export default function Login() {
  const [itemId, setItemId] = useState<string>('');
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setItemId(e.target.value);
  };
  const fetchData = async () => {
    const response = await axios.post('http://localhost:5000/items', { itemId });
    if(response.data.stats == 'success') {
      const id  = response.data.item._id;
      localStorage.setItem("id", id);
      Router.push("/");
      
    }
    else alert("login error");
  }
  return (
    <>
      <div className='px-2 pb-5 flex justify-center h-screen items-center space-x-4'>
        <input type='text' value={itemId} placeholder='enter your telegram id' className='px-5 py-3 rounded-2xl' onChange={handleInputChange}></input>
        <div className=' bg-gray-600 px-3 py-3 rounded-3xl text-white' onClick={fetchData}>Login</div>
      </div>
    </>
  );
}
