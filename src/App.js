import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AllRoutes from "./route/AllRoutes";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Router,
} from "react-router-dom";
import LoginComponent from "./components/login/Login";

function App() {
  return (
    <div className="App">
      <AllRoutes />
    </div>
  );
}

export default App;
