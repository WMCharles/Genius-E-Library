import { useState } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'
import { useNavigate, Link } from 'react-router-dom'

export default function LoginPage({ setUser }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && password) {
            const newUser = { email };
            setUser(newUser);
            localStorage.setItem('user', JSON.stringify(newUser));
            navigate('/');
        } else {
            setError('Invalid credentials');
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-form">
                <h2 className="mb-4">Login</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="w-100">
                        Login
                    </Button>
                </Form>
                <div className="mt-3 text-center">
                    <p>
                        Don't have an account? <Link to="/register">Register here</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}