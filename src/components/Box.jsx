import { Card } from 'react-bootstrap'

export default function Box({ title, text }) {
    return (
        <Card className="mb-4 shadow-sm advert-box">
            <Card.Body>
                <Card.Title className="text-primary">{title}</Card.Title>
                <Card.Text className="text-muted">
                    {text}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}