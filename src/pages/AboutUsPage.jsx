import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function AboutUsPage() {
    return (
        <Container className="mt-2">
            <Row>
                <Col>
                    <h2>About Us</h2>
                    <p>
                        Welcome to our bookstore! We are passionate about books and the transformative power of storytelling.
                        Our mission is to provide a diverse collection of titles that inspire, educate, and entertain readers from
                        all walks of life.
                    </p>
                    <p>
                        Founded in 2025, our team is dedicated to curating a selection of books across various genres including
                        Travel, Entertainment, Science, and Fiction. We believe that every book has a unique story to tell,
                        and we strive to bring these stories to you.
                    </p>
                    <p>
                        Whether you're looking for inspiration, a new adventure, or a moment of escapism, our carefully selected
                        collection is designed to meet your needs. Thank you for choosing our bookstore as your gateway to the
                        world of literature.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}