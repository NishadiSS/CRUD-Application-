import React, { useState } from 'react';
import axios from 'axios'
import {useNavigate } from 'react-router-dom';

const Create = () => {

    const[values, setValues] =useState({
        name: '',
        email: ''
    });

const navigate =useNavigate();

    const handleSubmit =(e) =>{
        e.preventDefault();
        axios.post('http://localhost:8081/student',values)
        .then(res => {
            console.log(res);
            navigate('/')

        })
        .catch(err => console.log(err))
    }
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Add Student</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Name</label>
                        <input
                            type="text"
                            placeholder="Enter name"
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={e =>setValues({...values, name: e.target.value})}
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 font-semibold mb-2">Email</label>
                        <input
                            type="email"
                            placeholder="Enter email"
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={e =>setValues({...values, email: e.target.value})}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
  )
}

export default Create
