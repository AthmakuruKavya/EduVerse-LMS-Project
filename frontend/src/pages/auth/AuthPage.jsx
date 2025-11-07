import CommonForm from "@/components/common-form/CommonForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { signInFormControls, signUpFormControls } from "@/config/form";
import { GraduationCap } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const AuthPage = () => {
  const [activeTab, setActiveTab] = useState("signin")
  function handleTabChange(value) {
    setActiveTab(value);
  }
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#060815] via-[#07122a] to-[#071733]">
      <header className="absolute top-8 left-8 z-10">
        <Link
          to="/"
          className="inline-flex items-center gap-3 px-4 py-2.5 rounded-full bg-white/6 backdrop-blur-sm hover:bg-white/8 transition"
        >
          <GraduationCap size={26} className="text-cyan-400" />
          <span className="text-lg font-semibold text-slate-100">EduVerse</span>
        </Link>
      </header>

      <main className="relative flex items-center justify-center min-h-screen px-6">
        <div className="w-full max-w-md p-10 space-y-8 bg-gradient-to-tr from-white/3 to-white/6 border border-white/6 rounded-3xl backdrop-blur-md shadow-[0_20px_50px_rgba(2,6,23,0.7)]">
          <Tabs
            value={activeTab}
            defaultValue="signin"
            onValueChange={handleTabChange}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-2 p-2 bg-transparent rounded-xl">
              <TabsTrigger
                value="signin"
                className="px-4 py-3 rounded-full text-slate-200 hover:text-white transition data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-sky-500 data-[state=active]:text-white data-[state=active]:shadow-md"
              >
                Sign In
              </TabsTrigger>
              <TabsTrigger
                value="signup"
                className="px-4 py-3 rounded-full text-slate-200 hover:text-white transition data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-sky-500 data-[state=active]:text-white data-[state=active]:shadow-md"
              >
                Sign Up
              </TabsTrigger>
            </TabsList>

            <TabsContent value="signin">
              {/* Sign In Form */}
              <CommonForm formControls={signInFormControls}/>
            </TabsContent>
            <TabsContent value="signup">
              {/* Sign Up Form */}
              <CommonForm formControls={signUpFormControls}/>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default AuthPage;
