import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/HomePage";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import { ToastContainer } from "react-toastify";
import PrivateRoute from "./components/routes/PrivateRoute";
import PublicRoutes from "./components/routes/PublicRoutes";

function App() {
  return (
    <>
    <ToastContainer></ToastContainer>
      <Routes>
        <Route path="/" element={<PublicRoutes>
          <HomePage></HomePage>
        </PublicRoutes>}></Route>
        <Route path="/login" element={<PublicRoutes>
          <Login></Login>
        </PublicRoutes>}></Route>
        <Route path="/register" element={<PublicRoutes>
          <Register></Register>
        </PublicRoutes>}></Route>
        <Route path="/dashboard" element={<PrivateRoute>
          <Dashboard></Dashboard>
        </PrivateRoute>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </>
  );
}

export default App;
