import { Table, Button, Form } from 'react-bootstrap'
import { mockCategories } from '../data/mockData'
import { useState, useEffect } from 'react'
import AddCategoryModal from '../components/AddCategoryModal'

export default function CategoriesPage() {

    const addBook = (newBook) => {
        setBooks([...books, newBook])
    }

    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    return (
        <>
            <div className="d-flex justify-content-between mb-4">
                <h2>Books</h2>
                <div className="d-flex align-items-center">
                    <Button variant="success" className="ms-2" onClick={handleOpenModal}>
                        Add Category
                    </Button>
                </div>

                <AddCategoryModal
                    show={showModal}
                    handleClose={handleCloseModal}
                    addCategory={addBook}
                />
            </div>

            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {mockCategories.map(category => (
                        <tr key={category.id}>
                            <td>{category.name}</td>
                            <td>{category.description || '-'}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
}