import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';



const Home = () => {

    const[data,setData] =useState([])
    useEffect(()=>{
        axios.get('http://localhost:8081/')
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    } ,[])

    const handleDelete = (id) => {
        axios.delete('http://localhost:8081/delete/'+id)
        .then(res => {
            location.reload();
        })
        .catch(err => console.log(err));
    }
  return ( 
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
    <div className="w-full max-w-4xl">
        <h2 className="text-2xl font-bold mb-4">Student List</h2>
        <div className="flex justify-end mb-4">
                    <Link to="/create">
                        <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                            Create +
                        </button>
                    </Link>
        </div>

        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-800 text-white">
                <tr>
                    <th className="py-3 px-4 text-left">ID</th>
                    <th className="py-3 px-4 text-left">Name</th>
                    <th className="py-3 px-4 text-left">Email</th>
                    <th className="py-3 px-4 text-left">Action</th>
                </tr>
            </thead>
            <tbody>
                {data.map((student, index) => (
                    <tr key={index} className="border-b hover:bg-gray-100">
                        <td className="py-3 px-4">{student.ID}</td>
                        <td className="py-3 px-4">{student.Name}</td>
                        <td className="py-3 px-4">{student.Email}</td>
                        <td className="py-3 px-4">
                        <Link to={`/read/${student.ID}`}>
                             <button className="bg-green-500 text-white py-1 px-3 rounded-md mr-2 hover:bg-green-600">
                                Read
                            </button>
                        </Link>

                        <Link to={`/edit/${student.ID}`}>
                            <button className="bg-blue-500 text-white py-1 px-3 rounded-md mr-2 hover:bg-blue-600">
                                Edit
                            </button>
                        </Link>
                            <button onClick={ () => handleDelete(student.ID)} className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600">
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
</div>

  )
}

export default Home
