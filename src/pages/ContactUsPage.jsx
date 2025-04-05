import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

export default function ContactUsPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
            setError('Please fill in all required fields.');
            setSuccess('');
            return;
        }
        setSuccess('Your message has been sent successfully!');
        setError('');
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
        });
    };

    return (
        <Container className="mt-2">
            <Row>
                <h3>Contact Us</h3>
                <p>If you have any questions or feedback, please don't hesitate to reach out.</p>
                {error && <Alert variant="danger">{error}</Alert>}
                {success && <Alert variant="success">{success}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="contactName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={(e) =>
                                setFormData({ ...formData, name: e.target.value })
                            }
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="contactEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={(e) =>
                                setFormData({ ...formData, email: e.target.value })
                            }
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="contactSubject">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={(e) =>
                                setFormData({ ...formData, subject: e.target.value })
                            }
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="contactMessage">
                        <Form.Label>Message</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={5}
                            placeholder="Your message"
                            value={formData.message}
                            onChange={(e) =>
                                setFormData({ ...formData, message: e.target.value })
                            }
                            required
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Send Message
                    </Button>
                </Form>
            </Row>
        </Container>
    );
}
