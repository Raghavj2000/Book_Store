import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { useNavigate ,useParams } from 'react-router-dom'
import Spinner from '../components/Spinner'
import BackButton from '../components/BackButton'

const DeleteBook = () => {
    const [loading,setLoading]=useState(false)
    const {id} = useParams()
    const navigate = useNavigate()


    const deleteBook = async () => {
        setLoading(true)
        await axios.delete(`http://localhost:5555/books/${id}`)
        .then(()=>{
            setLoading(false)
            navigate("/")
        })
        .catch((err)=>console.log(err))
    }


  return (
    <div className='p-4'>
        <BackButton/>
        <h1 className='text-3xl my-4'>Delete Book</h1>

        {loading ? <Spinner/> : (
            <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
                <h3 className='text-xl'> Are you sure u want to delete?</h3>

                <button
                onClick={deleteBook}
                className='bg-sky-800 text-white px-4 py-1 rounded-lg w-fit'
                >
                    Delete
                </button>
            </div>
        )}
    </div>
  )
}

export default DeleteBook