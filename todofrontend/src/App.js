import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import AddTodo from "./Components/AddTodo";
import Viewtodo from "./Components/Viewtodo";
import EditTodo from "./Components/EditTodo";


function App() {
  return (
    <div className="App">
       <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addtodo" element={<AddTodo />} />
          <Route path="/viewtodo/:id" element={<Viewtodo />} />
          <Route path="/editTodo/:id" element={<EditTodo />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
