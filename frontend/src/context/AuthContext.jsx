import { initialSignInFormData, initialSignUpFormData } from "@/config/form";
import { createContext, useState } from "react";

export const AuthContext = createContext(null);
export default function AuthProvider({ children }) {
  const [signInFormData, setSignInFormData] = useState(initialSignInFormData);
  const [signUPFormData, setSignUPFormData] = useState(initialSignUpFormData);

  return (
    <AuthContext.Provider
      value={{
        signInFormData,
        setSignInFormData,
        signUPFormData,
        setSignUPFormData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
