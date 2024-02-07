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

//     {
//       /* <div className="App">
//   <header className="App-header">
//     <p>
//       Edit <code>src/App.tsx</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div> */
//     }
