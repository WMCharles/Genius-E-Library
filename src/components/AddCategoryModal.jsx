import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

export default function AddCategoryModal({ show, handleClose, addCategory }) {
    const [formData, setFormData] = useState({
        title: 'Sample Category',
        description: 'A great fictional story',
    });

    useEffect(() => {
        if (!show) {
            setFormData({
                title: '',
                description: '',
            });
        }
    }, [show]);

    const handleSubmit = (e) => {
        e.preventDefault();
        addCategory(formData);
        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>New Category</Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleSubmit}>
                <Modal.Body>
                    {/* name */}
                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder='enter category name'
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            required
                        />
                    </Form.Group>

                    {/* description */}
                    <Form.Group className="mb-3">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            placeholder='enter description'
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
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
