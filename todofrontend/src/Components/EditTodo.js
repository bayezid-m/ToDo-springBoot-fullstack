import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditTodo() {
    let navigate = useNavigate();

    const { id } = useParams();
  
    const [user, setUser] = useState({
        content: "",
        done: ""
      });
    
      const { content, done } = user;
  
    const onInputChange = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value });
    };
  
    useEffect(() => {
      loadUser();
    }, []);
  
    const onSubmit = async (e) => {
      e.preventDefault();
      await axios.put(`http://localhost:8080/todo/${id}`, user);
      navigate("/");
    };
  
    const loadUser = async () => {
      const result = await axios.get(`http://localhost:8080/todo/${id}`);
      setUser(result.data);
    };
  
    return (
        <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4">Edit this todo</h2>
  
            <form onSubmit={(e) => onSubmit(e)}>
              <div className="mb-3">
                <label htmlFor="Name" className="form-label">
                  Content
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter your todo content"
                  name="content"
                  value={content}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Username" className="form-label">
                  Is it complete?
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter YES if it is done or NO"
                  name="done"
                  value={done}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              
              <button type="submit" className="btn btn-primary">
                Update
              </button>
              <Link className="btn btn-secondary mx-2" to="/">
                Cancel
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
}
