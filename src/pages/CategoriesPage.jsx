import { Table, Button } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { mockCategories } from '../data/mockData';
import AddCategoryModal from '../components/AddCategoryModal';

export default function CategoriesPage() {
    // Use local state so that newly added categories are reflected
    const [categories, setCategories] = useState(mockCategories);

    // Function to add a new category to the state
    const addCategory = (newCategory) => {
        setCategories([...categories, newCategory]);
    };

    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    return (
        <>
            <div className="d-flex justify-content-between mb-4">
                <h3>Categories</h3>
                <div className="d-flex align-items-center">
                    <Button variant="success" className="ms-2 btn-sm" onClick={handleOpenModal}>
                        Add Category
                    </Button>
                </div>

                <AddCategoryModal
                    show={showModal}
                    handleClose={handleCloseModal}
                    addCategory={addCategory}
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
                    {categories.map(category => (
                        <tr key={category.id}>
                            <td>
                                <Link to={`/categories/${category.id}`} className="text-decoration-none">
                                    {category.name}
                                </Link>
                            </td>
                            <td>{category.description || '-'}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    );
}
