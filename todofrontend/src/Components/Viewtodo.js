import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Viewtodo() {
    const [user, setUser] = useState({
        content: "",
        done: ""
      });
    
  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/todo/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Todo content</h2>

          <div className="card">
            <div className="card-header">
              Details of user id : {user.id}
              <ul className="list-group">
                <li className="list-group-item list-group-item-dark" >
                  <b>Content: </b>
                  {user.content}
                </li>
                <li className="list-group-item list-group-item-dark">
                  <b>Complete: </b>
                  {user.done}
                </li>
              
              </ul>
            </div>
          </div>
          <Link
                    className="btn btn-success mx-2"
                    to={`/editTodo/${user.id}`}
                  >
                    Edit
                  </Link>
          <Link className="btn btn-primary my-2" to={"/"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}