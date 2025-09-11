import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductList from './components/ProductList'
import FeaturedCategories from './components/FeaturedCategories'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <FeaturedCategories />
        <ProductList />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}

export default App
