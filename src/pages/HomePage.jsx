import React from 'react';
import Header from '../components/Header/Header';
import Navigation from '../components/Navigation/Navigation';
import WelcomeSection from '../components/WelcomeSection/WelcomeSection';
import HorizontalScroll from '../components/HorizontalScroll/HorizontalScroll';
import Footer from '../components/Footer/Footer';

const HomePage = ({ toggleTheme, themeMode }) => {
  return (
    <div className="homepage">
      <Header toggleTheme={toggleTheme} themeMode={themeMode} />
      <Navigation />
      <div className="content-container">
        <WelcomeSection />
        <HorizontalScroll />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
