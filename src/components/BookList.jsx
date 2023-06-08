import React from 'react'
import BookShow from './BookShow'

function BookList({ books, onEdit, onDelete }) {

    const bookList = books.map((book)=> {
        return <BookShow handleDel={onDelete} onEdit={onEdit} key={book.id} book={book}/>
    });

    return (
        <div className='row'>
                {bookList.length > 0 ? bookList : <p>Nothing to show Please add books</p>}
        </div>
    )
}

export default BookList