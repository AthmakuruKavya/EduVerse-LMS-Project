// import CommonForm from "@/components/common-form/CommonForm";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { signInFormControls, signUpFormControls } from "@/config/form";
// import { GraduationCap } from "lucide-react";
// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const AuthPage = () => {
//   const [activeTab, setActiveTab] = useState("signin")
//   function handleTabChange(value) {
//     setActiveTab(value);
//   }
//   return (
//     <div className="relative min-h-screen bg-gradient-to-b from-[#060815] via-[#07122a] to-[#071733]">
//       <header className="absolute top-8 left-8 z-10">
//         <Link
//           to="/"
//           className="inline-flex items-center gap-3 px-4 py-2.5 rounded-full bg-white/6 backdrop-blur-sm hover:bg-white/8 transition"
//         >
//           <GraduationCap size={26} className="text-cyan-400" />
//           <span className="text-lg font-semibold text-slate-100">EduVerse</span>
//         </Link>
//       </header>

//       <main className="relative flex items-center justify-center min-h-screen px-6">
//         <div className="w-full max-w-md p-10 space-y-8 bg-gradient-to-tr from-white/3 to-white/6 border border-white/6 rounded-3xl backdrop-blur-md shadow-[0_20px_50px_rgba(2,6,23,0.7)]">
//           <Tabs
//             value={activeTab}
//             defaultValue="signin"
//             onValueChange={handleTabChange}
//             className="w-full"
//           >
//             <TabsList className="grid w-full grid-cols-2 p-2 bg-transparent rounded-xl">
//               <TabsTrigger
//                 value="signin"
//                 className="px-4 py-3 rounded-full text-slate-200 hover:text-white transition data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-sky-500 data-[state=active]:text-white data-[state=active]:shadow-md"
//               >
//                 Sign In
//               </TabsTrigger>
//               <TabsTrigger
//                 value="signup"
//                 className="px-4 py-3 rounded-full text-slate-200 hover:text-white transition data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-sky-500 data-[state=active]:text-white data-[state=active]:shadow-md"
//               >
//                 Sign Up
//               </TabsTrigger>
//             </TabsList>

//             <TabsContent value="signin">
//               {/* Sign In Form */}
//               <CommonForm formControls={signInFormControls}/>
//             </TabsContent>
//             <TabsContent value="signup">
//               {/* Sign Up Form */}
//               <CommonForm formControls={signUpFormControls}/>
//             </TabsContent>
//           </Tabs>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default AuthPage;

import CommonForm from "@/components/common-form/CommonForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { signInFormControls, signUpFormControls } from "@/config/form";
import { GraduationCap } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const AuthPage = () => {
  const [activeTab, setActiveTab] = useState("signin");

  function handleTabChange(value) {
    setActiveTab(value);
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#FFFDFE] via-[#FBF4FF] to-[#FDF7FF]">

      {/* CLEAN LMS BRAND LABEL */}
      <header className="absolute top-10 left-10 z-10">
        <Link to="/" className="flex items-center gap-3">
          <GraduationCap size={32} className="text-[#A86CFF]" />
          <span className="text-3xl font-bold text-[#3A2F50] tracking-tight">
            EduVerse
          </span>
        </Link>
      </header>

      <main className="flex items-center justify-center min-h-screen px-6">
        <div className="w-full max-w-md p-10 space-y-8 
        bg-white border border-[#F0E6FF] 
        rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.04)]">

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
                data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#C9A7FF] 
                data-[state=active]:to-[#A86CFF] 
                data-[state=active]:text-white data-[state=active]:shadow-sm"
              >
                Sign In
              </TabsTrigger>

              <TabsTrigger
                value="signup"
                className="px-4 py-3 rounded-lg text-[#463860] transition 
                data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#C9A7FF] 
                data-[state=active]:to-[#A86CFF] 
                data-[state=active]:text-white data-[state=active]:shadow-sm"
              >
                Sign Up
              </TabsTrigger>

            </TabsList>

            <TabsContent value="signin" className="pt-6">
              <CommonForm formControls={signInFormControls} />
            </TabsContent>

            <TabsContent value="signup" className="pt-6">
              <CommonForm formControls={signUpFormControls} />
            </TabsContent>

          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default AuthPage;

