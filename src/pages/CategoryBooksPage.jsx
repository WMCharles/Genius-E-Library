import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { mockBooks, mockCategories } from '../data/mockData';
import Advertisement from '../components/Advertisement';

export default function CategoryBooksPage() {
  const { id } = useParams();
  const categoryId = Number(id);
  const category = mockCategories.find(c => c.id === categoryId);
  const booksInCategory = mockBooks.filter(book => book.category_id === categoryId);

  if (!category) return <div>Category not found</div>;

  return (
    <div className="container mt-2">
      <h3>{category.name}</h3>
      <p>{category.description}</p>
      <Row className="g-4">
        {booksInCategory.map(book => (

          <Col xs={12} md={6} lg={4} key={book.id}>
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
    </div>
  );
}
