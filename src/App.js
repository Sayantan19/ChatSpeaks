import './App.css';
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from './pages/login';
import SignUp from './pages/signup';
import Landing from './pages/landing';
import Chat from './pages/chat';

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/chat/:chatID" element={<Chat />} />
      </Routes>
    </>
  );
}

export default App;
