import './App.css';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react';

function App() {

  // Book List
  const [books, setBooks] = useState([]);

  const onCreate = (title) => {
    setBooks([...books, { id: Math.floor(Math.random() * 1000000), title }]);
  }

  const onEdit = (id, title) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id)
        return { ...book, title }
      return book
    });

    setBooks(updatedBooks);
  }

  const onDelete = (id) => {
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
