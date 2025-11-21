import { Skeleton } from "@/components/ui/skeleton";
import { initialSignInFormData, initialSignUpFormData } from "@/config/form";
import {
  checkAuthService,
  loginService,
  registerService,
} from "@/services/services";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);
export default function AuthProvider({ children }) {
  const [signInFormData, setSignInFormData] = useState(initialSignInFormData);
  const [signUPFormData, setSignUPFormData] = useState(initialSignUpFormData);
  const [auth, setAuth] = useState({
    authenticate: false,
    user: null,
  });
  const [loading, setLoading] = useState(true);

  async function handleRegisterUser(event) {
    event.preventDefault();
    const data = await registerService(signUPFormData);
  }

  async function handleLoginUser(event) {
    event.preventDefault();
    try {
      const data = await loginService(signInFormData);
      console.log(data.message);
      if (data.success) {
        sessionStorage.setItem(
          "accessToken",
          JSON.stringify(data.data.accessToken)
        );
        setAuth({
          authenticate: true,
          user: data.data.user,
        });
      }
    } catch (err) {
      console.log(err.response.data.message);
    }
  }

  //check auth user
  async function checkAuthUser() {
    try {
      const data = await checkAuthService();
      if (data.success) {
        setAuth({
          authenticate: true,
          user: data.data.user,
        });
        setLoading(false);
      } else {
        setAuth({
          authenticate: false,
          user: null,
        });
        setLoading(false);
      }
    } catch (err) {
      if(!err?.response?.data?.success){
        setAuth({
          authenticate: false,
          user: null,
        });
        setLoading(false);
      }
      
    }
  }

  function resetCredentials(){
    setAuth({
      authenticate : false,
      user : null
    })

  }

  // Runs once on mount to check if user is logged in
  useEffect(() => {
    checkAuthUser();
  }, []);

  // Logs only when auth state changes
  useEffect(() => {
    console.log("Auth updated:", auth);
  }, [auth]);

  return (
    <AuthContext.Provider
      value={{
        signInFormData,
        setSignInFormData,
        signUPFormData,
        setSignUPFormData,
        handleRegisterUser,
        handleLoginUser,
        auth,
        resetCredentials,
      }}
    >
      {loading ? <Skeleton /> : children}
    </AuthContext.Provider>
  );
}
