import { useRouter } from "next/router";
import {
  createContext,
  ReactNode,
  useState,
  useEffect,
} from "react";

interface AuthContextProps {
  children: ReactNode;
}

interface AuthContextValue {
  token: string | null;
  setToken: (token: string) => void;
  clearToken: () => void;
}

export const AuthContext = createContext<AuthContextValue | undefined>(
  undefined
);

export const AuthProvider: React.FC<AuthContextProps> = ({ children }) => {
  const router = useRouter();
  const [token, setToken] = useState<string | null>(null);
  const shouldRendered = token || (!token && router.pathname === "/login");

  const handleSetToken = (newToken: string) => {
    setToken(newToken);
    localStorage.setItem("token", newToken);
    router.push("/")
  };
  
  const clearToken = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    } else {
      router.push("/login");
    }
  }, [token]);

  return (
    <AuthContext.Provider
      value={{ token, setToken: handleSetToken, clearToken }}
    >
        {shouldRendered && children}
    </AuthContext.Provider>
  );
};
