import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext/AuthContext";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const { authenticated, loading } = useAuth();

  useEffect(() => {
    if (!authenticated && !loading) {
      navigate("/login");
    }
  }, [authenticated, loading]);

  if (loading) {
    return <div>loading...</div>;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
