import { Route, Routes } from "react-router-dom";
import { Login } from "./components/Login";
import ProtectedRoute from "./utils/ProtectedRoute";
import { useAuth } from "./utils/AuthContext";

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
    </Routes>
  );
};

export default App;
