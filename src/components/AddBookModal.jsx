// AddBookModal.jsx
import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

export default function AddBookModal({ show, handleClose, addBook, categories }) {
    const [formData, setFormData] = useState({
        title: 'Sample Book 1',
        author: 'Author One',
        category_id: 1,
        description: 'A great fictional story',
        cover_image: 'https://via.placeholder.com/200x300',
        available: true,
        free: true,
    });

    // Reset form data when modal is closed (optional)
    useEffect(() => {
        if (!show) {
            setFormData({
                title: 'Sample Book 1',
                author: 'Author One',
                category_id: 1,
                description: 'A great fictional story',
                cover_image: 'https://via.placeholder.com/200x300',
                available: true,
                free: true,
            });
        }
    }, [show]);

    const handleSubmit = (e) => {
        e.preventDefault();
        addBook(formData);
        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>New Book</Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleSubmit}>
                <Modal.Body>
                    <Form.Group className="mb-3">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type="text"
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Author</Form.Label>
                        <Form.Control
                            type="text"
                            value={formData.author}
                            onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Category</Form.Label>
                        <Form.Select
                            value={formData.category_id}
                            onChange={(e) =>
                                setFormData({ ...formData, category_id: parseInt(e.target.value) })
                            }
                            required
                        >
                            <option value="">Select Category</option>
                            {categories.map((category) => (
                                <option key={category.id} value={category.id}>
                                    {category.name}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Cover Image URL</Form.Label>
                        <Form.Control
                            type="url"
                            value={formData.cover_image}
                            onChange={(e) => setFormData({ ...formData, cover_image: e.target.value })}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Check
                            type="checkbox"
                            label="Available"
                            checked={formData.available}
                            onChange={(e) => setFormData({ ...formData, available: e.target.checked })}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Check
                            type="checkbox"
                            label="Free"
                            checked={formData.free}
                            onChange={(e) => setFormData({ ...formData, free: e.target.checked })}
                        />
                    </Form.Group>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" type="submit">
                        Add Book
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
}
