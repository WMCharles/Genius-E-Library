import { Card, Row, Col, Form, Button, Badge } from 'react-bootstrap'

export default function Advertisement() {
    return (
        <>
            < div className="advertisement-section mt-5" >
                <h4 className="text-center mb-3">Advertisement</h4>
                <Row className="justify-content-center">
                    <Col xs={12} md={8}>
                        <Card className="text-center">
                            <Card.Body>
                                <Card.Title>Place Your Ad Here</Card.Title>
                                <Card.Text>
                                    This space is available for advertisements. Contact us for more information.
                                </Card.Text>
                                <Button variant="primary" className='btn-sm'>Learn More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div >
        </>
    )
}