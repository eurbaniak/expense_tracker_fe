import { Route, Routes } from "react-router-dom";
import { Login } from "./components/Login";
import ProtectedRoute from "./utils/ProtectedRoute";
import { Register } from "./components/Register";
import Main from "./components/Main";
import Dashboard from "./components/Dashboard";
import { Layout } from "./components/Layout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route
        path="/dashboard/*"
        element={
          <ProtectedRoute>
            <Layout>
              <Routes>
                <Route index element={<Dashboard />} />
                <Route path="expenses" element={<div>xxxxx</div>} />
              </Routes>
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default App;
