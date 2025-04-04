import { useState } from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import Navigation from './components/Navigation'
import BooksPage from './pages/BooksPage'
import CategoriesPage from './pages/CategoriesPage'
import LoginPage from './pages/LoginPage'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap';
import RegisterPage from './pages/RegisterPage'
import BookPage from './pages/BookPage'
import { mockBooks } from './data/mockData'

function Layout({ user, setUser }) {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navigation user={user} setUser={setUser} />
      <main className="flex-grow-1 mt-4">
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  const [user, setUser] = useState(null)
  const [books, setBooks] = useState(mockBooks);
  return (
    <Routes>
      <Route path="/" element={<Layout user={user} setUser={setUser} />}>
        <Route index element={<BooksPage />} />
        <Route path="categories" element={<CategoriesPage />} />
        <Route path="login" element={<LoginPage setUser={setUser} />} />
        <Route path="register" element={<RegisterPage setUser={setUser} />} />
        <Route path="book/:id" element={<BookPage books={books} />} />
      </Route>
    </Routes >
  )
}