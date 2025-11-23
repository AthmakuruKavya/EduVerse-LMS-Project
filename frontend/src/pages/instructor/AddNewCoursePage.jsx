// import CourseCurriculum from "@/components/instructor-view/add-course/CourseCurriculum";
// import CourseLanding from "@/components/instructor-view/add-course/CourseLanding";
// import CourseSettings from "@/components/instructor-view/add-course/CourseSettings";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import React from "react";

// const AddNewCoursePage = () => {
//   return (
//     <div className="">
//       <div className="">
//         <h1 className="">Create a new course</h1>
//         <Button className="">SUBMIT</Button>
//       </div>
//       <Card>
//         <CardContent>
//           <div className="">
//             <Tabs defaultValue="curriculum" className="">
//               <TabsList>
//                 <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
//                 <TabsTrigger value="course-landing-page">
//                   Course Landing Page
//                 </TabsTrigger>
//                 <TabsTrigger value="settings">Settings</TabsTrigger>
//               </TabsList>
//               <TabsContent value="curriculum">
//                 <CourseCurriculum/>
//               </TabsContent>
//               <TabsContent value="course-landing-page">
//                 <CourseLanding/>
//               </TabsContent>
//               <TabsContent value="settings">
//                 <CourseSettings/>
//               </TabsContent>
//             </Tabs>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default AddNewCoursePage;

import CourseCurriculum from "@/components/instructor-view/add-course/CourseCurriculum";
import CourseLanding from "@/components/instructor-view/add-course/CourseLanding";
import CourseSettings from "@/components/instructor-view/add-course/CourseSettings";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

const AddNewCoursePage = () => {
  return (
    <div className="pt-6 px-10 pb-10 bg-[#F8F5FF] min-h-screen">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-[#3A2F50]">
          Create a New Course
        </h1>

        <Button className="px-6 py-2 bg-[#A86CFF] hover:bg-[#965BEB] text-white font-semibold rounded-xl shadow">
          SUBMIT
        </Button>
      </div>

      {/* Main Card */}
      <Card className="border-[#E8DFFF] shadow-md rounded-2xl bg-white">

        {/* Tabs should touch the top border of the card */}
        <div className="border-b border-[#E8DFFF] px-6 pt-4">
          <Tabs defaultValue="curriculum" className="w-full">

            {/* Tabs Menu */}
            <TabsList
              className="grid grid-cols-3 w-full bg-[#F3EBFF] p-2 rounded-xl border border-[#E8DFFF]"
            >
              <TabsTrigger
                value="curriculum"
                className="data-[state=active]:bg-[#A86CFF]
                           data-[state=active]:text-white rounded-lg 
                           text-[#463860] font-medium"
              >
                Curriculum
              </TabsTrigger>

              <TabsTrigger
                value="course-landing-page"
                className="data-[state=active]:bg-[#A86CFF]
                           data-[state=active]:text-white rounded-lg 
                           text-[#463860] font-medium"
              >
                Course Landing Page
              </TabsTrigger>

              <TabsTrigger
                value="settings"
                className="data-[state=active]:bg-[#A86CFF]
                           data-[state=active]:text-white rounded-lg 
                           text-[#463860] font-medium"
              >
                Settings
              </TabsTrigger>
            </TabsList>

            {/* CONTENT AREA (NO TOP GAP NOW) */}
            <CardContent className="p-6">

              <TabsContent value="curriculum" className="pt-0">
                <CourseCurriculum />
              </TabsContent>

              <TabsContent value="course-landing-page" className="pt-0">
                <CourseLanding />
              </TabsContent>

              <TabsContent value="settings" className="pt-0">
                <CourseSettings />
              </TabsContent>

            </CardContent>

          </Tabs>
        </div>

      </Card>
    </div>
  );
};

export default AddNewCoursePage;


