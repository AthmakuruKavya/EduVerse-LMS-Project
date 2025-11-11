import CommonForm from "@/components/common-form/CommonForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { signInFormControls, signUpFormControls } from "@/config/form";
import { AuthContext } from "@/context/AuthContext";
import { GraduationCap } from "lucide-react";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

const AuthPage = () => {
  const [activeTab, setActiveTab] = useState("signin");
  const {
    signInFormData,
    setSignInFormData,
    signUPFormData,
    setSignUPFormData,
    handleRegisterUser,
    handleLoginUser
  } = useContext(AuthContext);

  function handleTabChange(value) {
    setActiveTab(value);
  }

  function checkIfSignInFormIsValid() {
    return (
      signInFormData &&
      signInFormData.userEmail !== "" &&
      signInFormData.password !== ""
    );
  }

  function checkIfSignUpFormIsValid() {
    return (
      signUPFormData &&
      signUPFormData.userName !== "" &&
      signUPFormData.userEmail !== "" &&
      signUPFormData.password !== ""
    );
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#FFFDFE] via-[#FBF4FF] to-[#FDF7FF]">
      {/* CLEAN LMS BRAND LABEL */}
      <header className="absolute top-10 left-10 z-10">
        <Link to="/" className="flex items-center gap-3">
          <GraduationCap size={33} className="text-[#A86CFF]" />
          <span className="text-3xl font-bold text-[#3A2F50] tracking-tight">
            EduVerse
          </span>
        </Link>
      </header>

      <main className="flex items-center justify-center min-h-screen px-6">
        <div
          className="w-full max-w-md p-10 space-y-8 
        bg-white border border-[#F0E6FF] 
        rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.04)]"
        >
          <Tabs
            value={activeTab}
            defaultValue="signin"
            onValueChange={handleTabChange}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-2 p-2 bg-[#F7F1FF] rounded-xl">
              <TabsTrigger
                value="signin"
                className="px-4 py-3 rounded-lg text-[#463860] transition 
                    data-[state=active]:bg-[#8A35FF]
                         data-[state=active]:text-white
                          data-[state=active]:shadow-sm"
              >
                Sign In
              </TabsTrigger>

              <TabsTrigger
                value="signup"
                className="px-4 py-3 rounded-lg text-[#463860] transition 
                        data-[state=active]:bg-[#8A35FF]
                        data-[state=active]:text-white
                        data-[state=active]:shadow-sm"
              >
                Sign Up
              </TabsTrigger>
            </TabsList>

            <TabsContent value="signin" className="pt-6">
              <CommonForm
                formControls={signInFormControls}
                formData={signInFormData}
                setformData={setSignInFormData}
                isButtonDisabled={!checkIfSignInFormIsValid()}
                handleSubmit={handleLoginUser}
              />
            </TabsContent>

            <TabsContent value="signup" className="pt-6">
              <CommonForm
                formControls={signUpFormControls}
                formData={signUPFormData}
                setformData={setSignUPFormData}
                isButtonDisabled={!checkIfSignUpFormIsValid()}
                handleSubmit={handleRegisterUser}
              />
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default AuthPage;
