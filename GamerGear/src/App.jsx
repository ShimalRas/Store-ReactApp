import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductList from './components/ProductList'
import FeaturedCategories from './components/FeaturedCategories'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import { ThemeProvider } from './contexts/ThemeContext'
import { KeyboardsPage, MicePage, HeadphonesPage, MonitorsPage, DecorationPage } from './pages'

// Home component for the main page
const HomePage = () => (
  <>
    <Hero />
    <FeaturedCategories />
    <ProductList />
    <Testimonials />
  </>
);

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50 transition-colors duration-300">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/keyboards" element={<KeyboardsPage />} />
              <Route path="/mice" element={<MicePage />} />
              <Route path="/headphones" element={<HeadphonesPage />} />
              <Route path="/monitors" element={<MonitorsPage />} />
              <Route path="/decoration" element={<DecorationPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
