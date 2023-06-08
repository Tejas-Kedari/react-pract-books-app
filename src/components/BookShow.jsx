import React, { useState } from 'react'
import BookEdit from './BookEdit';

function BookShow({ book, onEdit, handleDel }) {

    const [showEdit, setShowEdit] = useState(false);

    const onEditFormSubmit = () => {
        setShowEdit(false);
    }

    const handleEditClick = () => {
        setShowEdit(!showEdit);
    }

    const handleDeleteClick = () => {
        handleDel(book.id);
    }

    const content = showEdit ? <BookEdit onEdit={onEdit} onSubmit={onEditFormSubmit} book={book}/> : <p className="card-text fs-1 fw-bold text-capitalize">{book.title}</p>;

    return (
        <div className="col-sm-12 col-md-6 col-lg-4 p-3">
            <div className="card" style={{ width: '18rem' }}>
                <img src="https://static.scientificamerican.com/sciam/cache/file/1DDFE633-2B85-468D-B28D05ADAE7D1AD8_source.jpg?w=590&h=800&D80F3D79-4382-49FA-BE4B4D0C62A5C3ED" className="card-img-top" alt={book.title + ' image'} />
                <div className="card-body">
                    {content}
                </div>
                <div className="d-flex input-group">
                <button className="btn btn-lg btn-success w-50" onClick={handleEditClick}>Edit</button>
                <button className="btn btn-lg btn-danger w-50" onClick={handleDeleteClick}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default BookShow;