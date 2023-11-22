import logo from "./logo.svg";
import "./App.css";
import Form from "./pages/Form";
import { UserProvider } from "./context/context";
import Users from "./components/Users";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Form />
        <Users />
      </UserProvider>
    </div>
  );
}

export default App;
