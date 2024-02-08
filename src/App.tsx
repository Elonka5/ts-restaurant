import React, { Suspense, lazy } from 'react';
import './App.css';
import { GlobalStyle } from './services/styles/GlobalStyles';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import PublicRoute from './components/Routes/PublicRoute';

const Home = lazy(() => import('./pages/Home'));
const Menu = lazy(() => import('./pages/Menu'));
const Blogs = lazy(() => import('./pages/Blogs'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const DishDetails = lazy(() => import('./pages/DishDetails'));

function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <PublicRoute>
                <Home />
              </PublicRoute>
            }
          />
          <Route
            path="menu"
            element={
              <PublicRoute>
                <Menu />
              </PublicRoute>
            }
          />
          <Route
            path="portfolio"
            element={
              <PublicRoute>
                <Portfolio />
              </PublicRoute>
            }
          />
          <Route
            path="portfolio/:dishId/:dishTitle"
            element={
              <PublicRoute>
                <DishDetails />
              </PublicRoute>
            }
          />
          <Route
            path="blogs"
            element={
              <PublicRoute>
                <Blogs />
              </PublicRoute>
            }
          />
          <Route
            path="about"
            element={
              <PublicRoute>
                <About />
              </PublicRoute>
            }
          />
          <Route
            path="contact"
            element={
              <PublicRoute>
                <Contact />
              </PublicRoute>
            }
          />
        </Route>
      </Routes>
      <GlobalStyle />
    </Suspense>
  );
}

export default App;
