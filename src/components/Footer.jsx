import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
    return (
        <footer className="bg-dark text-white mt-3 py-2">
            <Container>
                <Row>
                    <Col className="text-center">
                        &copy; {new Date().getFullYear()} Genius E-Library. All rights reserved.
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
