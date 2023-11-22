import React, { useContext } from "react";
import { UserContext } from "../context/context";

const Users = () => {
  const { users, dispatch } = useContext(UserContext);
  console.log(users);

  const handleDelete = (id) => {
    dispatch({ type: "DELETE_USER", payload: id });
  };
  const handleUpdate = (id) => {
    const user = users.find((user) => user.id === id);
    dispatch({ type: "UPDATE_USER", payload: user.id });
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        margin: "100px",
      }}
    >
      {users.map((user) => {
        return (
          <div key={user.name} style={{ display: "flex" }}>
            <p
              className={`${user.isCompleted ? "completed" : ""}`}
              onClick={() => handleUpdate(user.id)}
            >
              {user.name}
            </p>
            <p>{user.age}</p>
            {console.log(user)}

            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
