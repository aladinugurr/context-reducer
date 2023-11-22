import { createContext } from "react";
import { useReducer } from "react";

export const UserContext = createContext();

const userReducer = (state, action) => {
  switch (action.type) {
    case "ADD_USER":
      const newUser = { ...action.payload, id: Date.now() };
      return [...state, newUser];
    case "DELETE_USER":
      return state.filter((user) => user.id !== action.payload);
    case "UPDATE_USER":
      const updatedUser = {
        ...state.find((user) => user.id === action.payload),
        isCompleted: !state.find((user) => user.id === action.payload)
          .isCompleted,
      };

      // Güncellenmiş kullanıcıyı ve diğer kullanıcıları döndür
      return state.map((user) =>
        user.id === action.payload ? updatedUser : user
      );
    default:
      return [...state];
  }
};

export const UserProvider = ({ children }) => {
  const [users, dispatch] = useReducer(userReducer, []);
  return (
    <UserContext.Provider value={{ users, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
