import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { RootState } from "@/store";
import LoaderPage from "../loader";
import CookieErrorComp from "../error";

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { isAuthenticated, loading, error } = useSelector(
    (state: RootState) => state.auth,
  );
  const location = useLocation();

  if (loading) {
    return <LoaderPage />;
  }

  if (error) {
    return <CookieErrorComp />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
