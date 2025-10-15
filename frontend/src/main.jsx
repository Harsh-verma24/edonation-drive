import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Donate from './pages/Donate';
import Rewards from './pages/Rewards';
import Marketplace from './pages/Marketplace';
import About from './pages/About';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // Wrap all routes with App to include Navbar and Footer
    children: [
      { path: '/', element: <Home /> },
      { path: '/donate', element: <Donate /> },
      { path: '/rewards', element: <Rewards /> },
      { path: '/marketplace', element: <Marketplace /> },
      { path: '/about', element: <About /> }, // Add route for About page
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
