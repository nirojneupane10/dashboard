import React, { useState, ReactNode, useEffect } from "react";
import AuthContext from "./AuthContext";
import {
  getItemLocalStorage,
  removeItemlocalStorage,
  setItemLocalStorage,
} from "../../utlis/storageUtlis";

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    const token = getItemLocalStorage("accessToken");
    return !!token;
  });

  useEffect(() => {
    const token = getItemLocalStorage("accessToken");
    setIsAuthenticated(!!token);
  }, []);

  const login = (token: string) => {
    setItemLocalStorage("accessToken", token);
    setIsAuthenticated(true);
  };
  const logout = () => {
    setIsAuthenticated(false);
    removeItemlocalStorage("accessToken");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
