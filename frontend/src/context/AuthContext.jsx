import { initialSignInFormData, initialSignUpFormData } from "@/config/form";
import { loginService, registerService } from "@/services/services";
import { createContext, useState } from "react";

export const AuthContext = createContext(null);
export default function AuthProvider({ children }) {
  const [signInFormData, setSignInFormData] = useState(initialSignInFormData);
  const [signUPFormData, setSignUPFormData] = useState(initialSignUpFormData);
  const [auth, setAuth] = useState({
    authenticate : false,
    user :null
  })

  async function handleRegisterUser(event) {
    event.preventDefault();
    const data = await registerService(signUPFormData)
  }

  async function handleLoginUser(event) {
    event.preventDefault();
    const data = await loginService(signInFormData)
    console.log(data)
    if(data.success){
      sessionStorage.setItem("accessToken", JSON.stringify(data.data.accessToken))
      setAuth({
        authenticate:true,
        user : data.data.user
      })
    }
  }

  return (
    <AuthContext.Provider
      value={{
        signInFormData,
        setSignInFormData,
        signUPFormData,
        setSignUPFormData,
        handleRegisterUser,
        handleLoginUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
