import React,{useEffect,useState} from 'react'
import axios from 'axios';
import {useParams} from 'react-router-dom'
import { Link } from 'react-router-dom';


const Read = () => {
    const {id} =useParams();
    const[student, setStudent] = useState([])
    
    useEffect(()=>{
        axios.get('http://localhost:8081/read/' +id)
        .then(res =>{
             console.log(res)
            setStudent(res.data[0]);
        })
        .catch(err => console.log(err))
    },[])

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-3xl font-bold mb-4 text-center">Student Detail</h2>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">ID:</h3>
            <p className="text-lg text-gray-700">{student.ID}</p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Name:</h3>
            <p className="text-lg text-gray-700">{student.Name}</p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Email:</h3>
            <p className="text-lg text-gray-700">{student.Email}</p>
          </div>
      <div className="flex justify-between mt-6">
        <Link to="/">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200">
            Back
          </button>
        </Link>
        <Link to={`/edit/${student.ID}`}>
          <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-200">
            Edit
          </button>
        </Link>
      </div>
    </div>
  </div>
  )
}

export default Read
