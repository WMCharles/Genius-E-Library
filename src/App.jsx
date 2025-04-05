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
import CategoryBooksPage from './pages/CategoryBooksPage'
import AboutUsPage from './pages/AboutUsPage'
import ContactUsPage from './pages/ContactUsPage'
import MyAccountPage from './pages/MyAccountPage'

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
  // const [user, setUser] = useState(null)
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [books, setBooks] = useState(mockBooks);
  return (
    <Routes>
      <Route path="/" element={<Layout user={user} setUser={setUser} />}>
        <Route index element={<BooksPage />} />
        <Route path="categories" element={<CategoriesPage />} />
        <Route path="about" element={<AboutUsPage />} />
        <Route path="account" element={<MyAccountPage />} />
        <Route path="contact" element={<ContactUsPage />} />
        <Route path="/categories/:id" element={<CategoryBooksPage />} />
        <Route path="login" element={<LoginPage setUser={setUser} />} />
        <Route path="register" element={<RegisterPage setUser={setUser} />} />
        <Route path="book/:id" element={<BookPage books={books} />} />
      </Route>
    </Routes >
  )
}