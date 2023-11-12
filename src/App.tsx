import { Route, Routes } from "react-router-dom";
import { Login } from "./components/Login";
import ProtectedRoute from "./utils/ProtectedRoute";
import { useAuth } from "./utils/AuthContext";
import { Register } from "./components/Register";

const App = () => {
  const { logout } = useAuth();
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <button onClick={logout}>logout</button>
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default App;
