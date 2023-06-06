import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Login";
import Users from "./pages/Users";
import Notes from "./pages/Notes";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import AddNote from "./pages/AddNote";
import EditNote from "./pages/EditNote";
import Profile from "./pages/Profile";

// Homepage
import Landing from "./pages/homepage/Landing";
import Dasbor from "./pages/homepage/Dashboard";
import About from "./pages/homepage/About";
import News from "./pages/homepage/News";
import Contact from "./pages/homepage/Contact";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dasbor" element={<Dasbor />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<Profile />} />
          <Route path="/users/add" element={<AddUser />} />
          <Route path="/users/edit/:id" element={<EditUser />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/notes/add" element={<AddNote />} />
          <Route path="/notes/edit/:id" element={<EditNote />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
