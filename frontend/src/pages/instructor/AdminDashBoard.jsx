import InstructorCourses from "@/components/instructor-view/InstructorCourses";
import InstructorDashboard from "@/components/instructor-view/InstructorDashboard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { AuthContext } from "@/context/AuthContext";
import { BarChart, Book, LogOut } from "lucide-react";
import React, { useContext, useState } from "react";

const AdminDashBoard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const { resetCredentials } = useContext(AuthContext);
  const menuItems = [
    {
      icon: BarChart,
      label: "Dashboard",
      value: "dashboard",
      component: <InstructorDashboard />,
    },
    {
      icon: Book,
      label: "Courses",
      value: "courses",
      component: <InstructorCourses />,
    },
    {
      icon: LogOut,
      label: "Logout",
      value: "logout",
      component: null,
    },
  ];

  function handleLogout() {
    resetCredentials();
    sessionStorage.clear();
  }

  return (
    <div className="flex min-h-screen bg-[#F8F5FF]">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg border-r border-[#E8DFFF] p-6 flex flex-col">
        <h2 className="text-2xl font-bold text-[#3A2F50] mb-8">
          Instructor Panel
        </h2>

        <nav className="space-y-4">
          {menuItems.map((menuItem) => {
            const isActive = menuItem.value === activeTab;

            return (
              <Button
                key={menuItem.value}
                variant="ghost"
                className={`w-full justify-start gap-3 py-3 rounded-xl font-medium transition-all
                ${
                  isActive
                    ? "bg-[#A86CFF] text-white shadow-md"
                    : "text-[#463860] hover:bg-[#F1E8FF]"
                }`}
                onClick={
                  menuItem.value === "logout"
                    ? handleLogout
                    : () => setActiveTab(menuItem.value)
                }
              >
                <menuItem.icon size={20} />
                {menuItem.label}
              </Button>
            );
          })}
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-10">
        <h1 className="text-3xl font-bold text-[#3A2F50] mb-6">
          {activeTab === "dashboard"
            ? "Dashboard"
            : activeTab === "courses"
            ? "Manage Courses"
            : "Instructor Dashboard"}
        </h1>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          {menuItems.map((menuItem) => (
            <TabsContent key={menuItem.value} value={menuItem.value}>
              {menuItem.component !== null ? menuItem.component : null}
            </TabsContent>
          ))}
        </Tabs>
      </main>
    </div>
  );
};

export default AdminDashBoard;
