import React from "react";
import { Link } from "react-router-dom";
function Users() {
  const list = [
    { id: 1, name: "mohamed", age: 11 },
    { id: 2, name: "ahmed", age: 12 },
    { id: 3, name: "omar", age: 13 },
    { id: 4, name: "maro", age: 14 },
    { id: 5, name: "ziad", age: 15 },
    { id: 6, name: "saif", age: 16 },
  ];
  return (
    <>
      <ul>
        {list.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age}
            <Link to={`/Users/${user.id}`} className="animated-underline">
              details
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Users;
