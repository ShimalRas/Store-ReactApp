import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductList from './components/ProductList'
import FeaturedCategories from './components/FeaturedCategories'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import { ThemeProvider } from './contexts/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <FeaturedCategories />
          <ProductList />
          <Testimonials />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
