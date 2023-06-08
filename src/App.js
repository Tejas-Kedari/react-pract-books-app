import './App.css';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import 'bootstrap/dist/css/bootstrap.css'
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  // Book List
  const [books, setBooks] = useState([]);
  const url = 'http://localhost:3001/books';

  const fetchData = async ()=> {
    const response = await axios.get(url);
    return response.data;
  }

  useEffect(() => {
    const fetcher = async () => {
      const res = await fetchData();
      setBooks(res);
    }
    fetcher();
  }, [])


  const onCreate = async (title) => {
    const response = await axios.post(url, {
      title
    })
    setBooks([...books, response.data]);
  }

  const onEdit = async (id, title) => {
    const response = await axios.put(`${url}/${id}`, {
      title
    })

    const updatedBooks = books.map((book) => {
      if (book.id === id)
        return { ...book, ...response.data }
      return book
    });

    setBooks(updatedBooks);
  }

  const onDelete = async (id) => {
    await axios.delete(`${url}/${id}`);

    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks)
  }

  return (
    <div className="App">
      <BookList books={books} onEdit={onEdit} onDelete={onDelete} />
      <BookCreate onCreate={onCreate} />
    </div>
  );
}

export default App;
