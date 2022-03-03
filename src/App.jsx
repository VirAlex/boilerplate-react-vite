import React from 'react';
// React router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// RecoilState Management
// https://recoiljs.org/docs/introduction/getting-started
import { RecoilRoot } from 'recoil';

// SCSS import
import './assets/scss/index.scss';
// Import Components
import HomePage from './pages/HomePage';
import PageOne from './pages/PageOne';

const App = () => {
  return (
    <RecoilRoot>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pageOne" element={<PageOne />} />
        </Routes>
      </Router>
    </RecoilRoot>
  );
};

export default App;
