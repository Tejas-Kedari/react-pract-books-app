import React, { useState } from 'react';
import './BookCreate.css';

function BookCreate({onCreate}) {

    const [title, setTitle] = useState('');

    const handleChange = (event) => {
        setTitle(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onCreate(title);
        setTitle('');
    }

    return (
        <form onSubmit={handleSubmit} className='book-create'>
            <div className='input-group h-100'>
                <input type="text" value={title} className='form-control' onChange={handleChange} placeholder='Book Title'/>
                <button type='submit' className="btn btn-primary">Create!!</button>
            </div>
        </form>
    )
}

export default BookCreate