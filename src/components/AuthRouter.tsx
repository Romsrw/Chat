import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface IProps {
  children?: ReactNode;
}

export const AuthRouter = ({ children }: IProps) => {
  if (!sessionStorage.getItem("username")) {
    return <Navigate to="/auth" />;
  }
  return <>{children}</>;
};
