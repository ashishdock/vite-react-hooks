import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/home';
import Profile from './Pages/Profile';
import Users from './Pages/Users';
import NotFound from './Pages/NotFound';
import NavBar from './components/NavBar';
import UserDetails from './Pages/UserDetails';
import UseReducerRoute from './UseReducerRoute';

const App = () => {
  return (
    <Router>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:userId" element={<UserDetails />} />
          <Route path="/usereducer" element={<UseReducerRoute />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
