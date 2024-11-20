import React from 'react';
import Header from '@/components/Header';
import Banner from '@/components/Banner';
import Logo from '@/components/Logo';
import Category from '@/components/Category';
import Achivements from '@/components/Achivements';
import Courses from '@/components/Courses';
import Team from '@/components/Team';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Logo />
      <Category />
      <Achivements />
      <Courses />
      <Team />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
