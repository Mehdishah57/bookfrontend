import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Auth from "./components/Auth";
import NoAuth from "./components/NoAuth";
import UserProvider from "./global/UserContext";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import ChangePassword from "./pages/ChangePassword";
import BookSpeech from "./pages/BookSpeech";
import UploadBook from "./pages/UploadBook";
import CategoryProvider from "./global/CategoryContext";
import Books from "./pages/Books";
import MyBooks from "./pages/MyBooks";
import AdminPanel from "./pages/AdminPanel";
import Admin from "./components/Admin";

function App() {
  return (
    <UserProvider>
      <CategoryProvider>
        <Navbar />
        <Routes>
          <Route path="/login" element={<NoAuth Element={Login} />} />
          <Route path="/register" element={<NoAuth Element={Register} />} />
          <Route path="/profile" element={<Auth Element={Profile} />} />
          <Route path="/changePassword" element={<Auth Element={ChangePassword} />} />
          <Route path="/uploadBook" element={<Auth Element={UploadBook} />} />
          <Route path="/home" element={<Auth Element={Books} />} />
          <Route path="/myBooks" element={<Auth Element={MyBooks} />} />
          <Route path="/bookSpeech/:id" element={<Auth Element={BookSpeech} />} />
          <Route path="/adminpanel" element={<Admin Element={AdminPanel} />} />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </CategoryProvider>
    </UserProvider>
  );
}

export default App;
