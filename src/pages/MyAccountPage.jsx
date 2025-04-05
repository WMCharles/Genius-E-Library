import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { mockRentedBooks, mockOwnedBooks } from '../data/mockData';

export default function MyAccountPage() {
    return (
        <Container className="mt-2">
            <h2>My Account</h2>

            <section className="mt-4">
                <h4>Books That I Have Rented</h4>
                {mockRentedBooks.length === 0 ? (
                    <p>You haven't rented any books yet.</p>
                ) : (
                    <Row className="g-4">
                        {mockRentedBooks.map(book => (
                            <Col key={book.id} xs={12} sm={6} md={4}>
                                <Card className="h-100">
                                    <Card.Img variant="top" src={book.cover_image} alt={book.title} />
                                    <Card.Body>
                                        <Card.Title>
                                            <Link to={`/book/${book.id}`} className="text-decoration-none">
                                                {book.title.length > 24 ? book.title.substring(0, 24) + '...' : book.title}
                                            </Link>
                                        </Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">{book.author}</Card.Subtitle>
                                        <Card.Text>{book.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                )}
            </section>

            {/* Owned Books Section */}
            <section className="mt-4">
                <h4>Books That I Own</h4>
                {mockOwnedBooks.length === 0 ? (
                    <p>You don't own any books yet.</p>
                ) : (
                    <Row className="g-4">
                        {mockOwnedBooks.map(book => (
                            <Col key={book.id} xs={12} sm={6} md={4}>
                                <Card className="h-100">
                                    <Card.Img variant="top" src={book.cover_image} alt={book.title} />
                                    <Card.Body>
                                        <Card.Title>
                                            <Link to={`/book/${book.id}`} className="text-decoration-none">
                                                {book.title.length > 24 ? book.title.substring(0, 24) + '...' : book.title}
                                            </Link>
                                        </Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">{book.author}</Card.Subtitle>
                                        <Card.Text>{book.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                )}
            </section>
        </Container>
    );
}
