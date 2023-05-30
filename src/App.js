import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Login";
import Users from "./pages/Users";
import Notes from "./pages/Notes";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import AddNote from "./pages/AddNote";
import EditNote from "./pages/EditNote";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
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
