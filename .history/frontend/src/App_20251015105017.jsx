import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main className="pt-16 pb-16">{/* Adjust padding to account for fixed Navbar and Footer */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
