import { useParams } from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap';
import Box from '../components/Box';
import Advertisement from '../components/Advertisement';

export default function BookPage({ books }) {
    const { id } = useParams();
    const book = books.find(b => b.id === Number(id));

    if (!book) return <div>Book not found</div>;

    return (
        <div className="container mt-2">
            <h3>{book.title}</h3>
            <hr />
            <Row className="g-4">
                <Col lg={8}>
                    {/* Book Image */}
                    <img
                        src={'https://placehold.co/700x300'}
                        alt={book.title}
                        className="img-fluid rounded shadow"
                    />

                    {/* Author Name as Caption */}
                    <p className="text-muted mt-2">By {book.author}</p>

                    {/* Book Description */}
                    <p className="mt-3">{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}</p>

                    {/* Buy/Rent Buttons */}
                    <div className="mt-4">
                        {book.available ? (
                            <>
                                <Button variant="success" size="sm" className="me-2">
                                    {book.free ? 'Download Free' : 'Rent - $' + book.rent_price}
                                </Button>
                                {!book.free && (
                                    <Button variant="primary" size="sm">
                                        {'Buy - $' + book.purchase_price}
                                    </Button>
                                )}
                            </>

                        ) : (
                            <Button variant="secondary" size="sm" disabled>
                                Not Available
                            </Button>
                        )}
                    </div>
                </Col>

                <Col lg={4}>
                    <Box
                        title="Special Offer!"
                        text="Get 20% off your next purchase with code BOOKLOVER20"
                    />
                    <Box
                        title="New Releases"
                        text="Check out our latest arrivals in the Mystery section!"
                    />
                </Col>
            </Row>

            <Advertisement />
        </div>
    );
}
