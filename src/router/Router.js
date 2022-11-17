import React from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import HomePage from "pages/HomePage/HomePage";
import ChatPage from "pages/ChatPage/ChatPage";

function ProtectedRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route exact path="/room/:id" element={<ChatPage />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default ProtectedRouter;
