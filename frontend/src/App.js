import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import CreateBooks from './pages/CreateBooks';
import DeleteBook from './pages/DeleteBook';
import EditBook from './pages/EditBook';
import ShowBook from './pages/ShowBook';
import Login from './pages/Login';
import Register from './pages/Register';


function App() {
  return (
  <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/books/create' element={<CreateBooks/>}/>
      <Route path='/books/details/:id' element={<ShowBook/>}/>
      <Route path='/books/edit/:id' element={<EditBook/>}/>
      <Route path='/books/delete/:id' element={<DeleteBook/>}/>
      <Route exact path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
  </Routes>
  );
}

export default App;
