import React, { useState } from 'react'

function BookEdit({ onSubmit, book, onEdit }) {

    const [title, setTitle] = useState(book.title);

    const handleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onEdit(book.id, title)
        onSubmit();
    }

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="title" className='float-start mb-2'>Edit Title</label>
        <input type="text" name="title" value={title} onChange={handleChange} className="form-control" />
        <div className="d-grid">
            {title.length > 2 ? <button type='submit' className="btn btn-success btn-sm mt-2">Save</button> : ''}
        </div>
    </form>
  )
}

export default BookEdit