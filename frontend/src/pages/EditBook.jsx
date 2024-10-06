import React,{useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate ,useParams } from 'react-router-dom'
import Spinner from '../components/Spinner'
import BackButton from '../components/BackButton'

/**
 * This component is for creating a new book
 * it renders a form with input fields for title, author, description and publishedYear
 * and a submit button to send the data to the server
 * when the data is submitted, it redirects to the /books route
 * if the data is invalid, it shows an error message
 */
const EditBook = () => {
    const [title,setTitle]=useState('')
    const [author,setAuthor]=useState('')
    const [description,setDescription]=useState('')
    const [publishedYear,setPublishedYear]=useState('')
    const [loading,setLoading]=useState(false)
    const {id} = useParams()


    useEffect(()=>{
        setLoading(true)
        axios.get(`http://localhost:5555/books/${id}`)
        .then((res)=>{
            setAuthor(res.data.data.author)
            setTitle(res.data.data.title)
            setDescription(res.data.data.description)
            setPublishedYear(res.data.data.publishedYear)
            setLoading(false)
        }).catch ((err)=>{
            console.log(err)
            setLoading(false)
        })
    },[])
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        const book = {
          title,
          author,
          description,
          publishedYear
        };
        try {
          await axios.put(`http://localhost:5555/books/${id}`, book).then(()=>{
            setLoading(false)
            navigate("/");
          }).catch((err)=>{
            console.log(err)
            setLoading(false)
          });
         
        } catch (err) {
          console.log(err);
          setLoading(false)
        }
      };
  return (
    <div className='p-4'>
        <BackButton/>
        <h1 className='text-3xl my-4'>Edit Book</h1>
        {loading ? <Spinner/> : (
            <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4 '>
                <form onSubmit={handleSubmit} className='flex flex-col'>
                    <div className='my-4'></div>
                        <label htmlFor="title" className='text-gray-500'>Title</label>
                        <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className='border-2 border-sky-400 rounded-xl p-2'
                        />
                    <div className='my-4'></div>
                        <label htmlFor="author" className='text-gray-500'>Author</label>
                        <input
                        type="text"
                        id="author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        className='border-2 border-sky-400 rounded-xl p-2'
                        />
                    <div className='my-4'></div>
                        <label htmlFor="description" className='text-gray-500'>Description</label>
                        <input
                        type="text"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className='border-2 border-sky-400 rounded-xl p-2'
                        />
                    <div className='my-4'></div>
                        <label htmlFor="publishedYear" className='text-gray-500'>Published Year</label>
                        <input
                        type="text"
                        id="publishedYear"
                        value={publishedYear}
                        onChange={(e) => setPublishedYear(e.target.value)}
                        className='border-2 border-sky-400 rounded-xl p-2'
                        />
                    <div className='my-4'></div>
                    <button type="submit" className='bg-sky-800 text-white px-4 py-1 rounded-lg w-fit'>
                        Submit
                    </button>
                </form>
            </div>
        )}
    </div>
  )
}

export default EditBook