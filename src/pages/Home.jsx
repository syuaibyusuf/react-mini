import React from 'react';
import Navbar from '../componens/Navbar';
import Announcement from '../componens/Announcement';
import Slider from '../componens/Slider';
import Categories from '../componens/Categories';
import Products from '../componens/Products';
import Newsletter from '../componens/Newsletter';
import Footer from '../componens/Footer';

const Home = () => {
  return (
    <div>
        <Announcement />
        <Navbar />
        <Slider />
        <Categories />
        <Products />
        <Newsletter />
        <Footer />
    </div>
  )
}

export default Home
