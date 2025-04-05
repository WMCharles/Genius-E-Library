import { useState, useEffect } from 'react'
import { Card, Row, Col, Form, Button, Badge } from 'react-bootstrap'
import { mockBooks, mockCategories } from '../data/mockData'
import AddBookModal from '../components/AddBookModal'
import { Link } from 'react-router-dom'
import Advertisement from '../components/Advertisement.jsx'

export default function BooksPage() {
    const [selectedCategory, setSelectedCategory] = useState('all')
    const [filteredBooks, setFilteredBooks] = useState(mockBooks)
    const [categories, setCategories] = useState(mockCategories);

    const addBook = (newBook) => {
        // Ensure that you have defined "books" in your state or context.
        // For demonstration, this line assumes you have a "books" state defined.
        setBooks([...books, newBook])
    }

    const [showModal, setShowModal] = useState(false);
    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    useEffect(() => {
        if (selectedCategory === 'all') {
            setFilteredBooks(mockBooks);
        } else {
            setFilteredBooks(
                mockBooks.filter(book => book.category_id === Number(selectedCategory))
            );
        }
    }, [selectedCategory]);

    return (
        <>
            <div className="d-flex justify-content-between mb-4">
                <h2>Books</h2>
                <div className="d-flex align-items-center">
                    <Form.Select
                        style={{ width: '200px' }}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        <option value="all">All Categories</option>
                        {mockCategories.map(category => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </Form.Select>
                    <Button variant="success" className="ms-2" onClick={handleOpenModal}>
                        Add Book
                    </Button>
                </div>

                <AddBookModal
                    show={showModal}
                    handleClose={handleCloseModal}
                    addBook={addBook}
                    categories={categories}
                />
            </div>

            <Row xs={1} md={2} lg={3} className="g-4">
                {filteredBooks.map(book => (
                    <Col key={book.id}>
                        <Card className="h-100">
                            <Card.Img variant="top" src={book.cover_image} />
                            <Card.Body>
                                <Card.Title>
                                    <Link to={`/book/${book.id}`} className="text-decoration-none">
                                        {book.title.length > 24
                                            ? book.title.substring(0, 24) + '...'
                                            : book.title
                                        }
                                    </Link>
                                </Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">
                                    {book.author}
                                </Card.Subtitle>
                                <Card.Text>{book.description}</Card.Text>
                                <div className="d-flex justify-content-between align-items-center">
                                    <Badge bg="secondary">
                                        {mockCategories.find(c => c.id === book.category_id)?.name}
                                    </Badge>
                                    <div>
                                        {book.available ? (
                                            <>
                                                <Button variant="success" size="sm" className="me-2">
                                                    Rent
                                                </Button>
                                                <Button variant="primary" size="sm">
                                                    Buy
                                                </Button>
                                            </>
                                        ) : (
                                            <Badge bg="danger">Not Available</Badge>
                                        )}
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            <Advertisement />

        </>
    )
}
