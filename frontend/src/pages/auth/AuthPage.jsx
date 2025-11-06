import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const AuthPage = () => {
  const [activeTab, setActiveTab] = useState("signin")
  function handleTabChange(value) {
    setActiveTab(value);
  }
  return (
    <div className="relative min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="absolute top-4 left-4">
        <Link
          to="/"
          aria-label="Go to EduVerse home"
          className="inline-flex items-center gap-3 px-3 py-1.5 rounded-md text-gray-800 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-slate-800 transition-colors shadow-sm"
        >
          <GraduationCap size={20} className="text-indigo-600" />
          <span className="text-lg font-semibold">EduVerse</span>
        </Link>
      </header>
      <main className="flex items-center justify-center min-h-screen px-4">
        <div className="w-full max-w-md p-8 space-y-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
          <Tabs
            value={activeTab}
            defaultValue="signin"
            onValueChange={handleTabChange}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger 
                value="signin"
                className="data-[state=active]:bg-indigo-600 data-[state=active]:text-white"
              >
                Sign In
              </TabsTrigger>
              <TabsTrigger 
                value="signup"
                className="data-[state=active]:bg-indigo-600 data-[state=active]:text-white"
              >
                Sign Up
              </TabsTrigger>
            </TabsList>
            <TabsContent value="signin">
              {/* Sign In Form */}
              SignIN
            </TabsContent>
            <TabsContent value="signup">
              {/* Sign Up Form */}
              SignUp
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default AuthPage;
