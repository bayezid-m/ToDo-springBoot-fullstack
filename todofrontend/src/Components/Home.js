import  {React, useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams  } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
export default function Home() {

    const [users, setUsers] = useState([]);
    const { id } = useParams();

    useEffect(() => {
       loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8080/todos");
        console.log(result.data);
        setUsers(result.data);
        };

    const deleteTodo = async (id) => {
        await axios.delete(`http://localhost:8080/todo/${id}`);
        loadUsers();
        };
        
  return (
    <div className="container">
      <div className="py-5">
      <table className="table table-striped table-dark">
  <thead >
    <tr>
      <th scope="col">Index</th>
      <th scope="col">Content</th>
      <th scope="col">Complete</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  {users.map((user, index) => (
   
              <tr width="20">
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{user.content.slice(0,30)}</td>
                <td>{user.done}</td>
                <td>
                <Link
                    className="btn btn-info"
                    to={`/viewtodo/${user.id}`}
                  >
                    View
                  </Link>
                  <button
                   className="bi bi-trash-fill mx-2"
                    style={{ fontSize: 20, color:"red", border:"0", background:"transparent" }}
                   
                    onClick={() => deleteTodo(user.id)}
                  >
                    Delete
                  </button>
                </td>
                </tr>
                

  ))}
  </tbody>
</table>

      </div>
    </div>
  )
}
