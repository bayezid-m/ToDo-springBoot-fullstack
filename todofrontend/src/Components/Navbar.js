import React from 'react'
import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <div>
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
         ToDo App
        </Link>
    

        <Link className="btn btn-outline-light" to="/addtodo">
          Add ToDo
        </Link>
      </div>
    </nav>
  </div>
  )
}
