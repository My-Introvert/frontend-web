import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";
import Users from "./pages/Users";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import Notes from "./pages/Notes";
import AddNote from "./pages/AddNote";
import EditNote from "./pages/EditNote";
import Quesioners from "./pages/Quesioners";
import AddQuesioners from "./pages/AddQuesioner";
import EditQuesioners from "./pages/EditQuesioner";
import ViewQuesioners from "./pages/ViewQuesioner";
import Blogs from "./pages/Blogs";
import AddBlog from "./pages/AddBlog";
import EditBlogs from "./pages/EditBlog";
import BlogPageView from "./pages/BlogPageView";
import Videos from "./pages/Videos";
import AddVideo from "./pages/AddVideo";
import EditVideo from "./pages/EditVideo";
import Podcasts from "./pages/Podcasts";
import Books from "./pages/Books";
import AddBook from "./pages/AddBook";
import EditBook from "./pages/EditBook";
import NewsAdmin from "./pages/News";
import Profile from "./pages/Profile";

// Homepage
import Landing from "./pages/homepage/Landing";
import Dasbor from "./pages/homepage/Dashboard";
import AddNoteUser from "./pages/homepage/AddNote";
import EditNoteUser from "./pages/homepage/EditNote";
import EditPageUser from "./pages/homepage/EditUser";
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
          <Route path="/user/edit/:id" element={<EditPageUser />} />
          <Route path="/user/notes/add" element={<AddNoteUser />} />
          <Route path="/user/notes/edit/:id" element={<EditNoteUser />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<Profile />} />
          <Route path="/users/add" element={<AddUser />} />
          <Route path="/users/edit/:id" element={<EditUser />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/notes/add" element={<AddNote />} />
          <Route path="/notes/edit/:id" element={<EditNote />} />
          <Route path="/quesioners" element={<Quesioners />} />
          <Route path="/quesioners/add" element={<AddQuesioners />} />
          <Route path="/quesioners/edit/:id" element={<EditQuesioners />} />
          <Route path="/quesioners/view/:id" element={<ViewQuesioners />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/add" element={<AddBlog />} />
          <Route path="/blogs/edit/:id" element={<EditBlogs />} />
          <Route path="/blogs/view/:id" element={<BlogPageView />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/videos/add" element={<AddVideo />} />
          <Route path="/videos/edit/:id" element={<EditVideo />} />
          <Route path="/podcasts" element={<Podcasts />} />
          <Route path="/books" element={<Books />} />
          <Route path="/books/add" element={<AddBook />} />
          <Route path="/books/edit/:id" element={<EditBook />} />
          <Route path="/news/list" element={<NewsAdmin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
