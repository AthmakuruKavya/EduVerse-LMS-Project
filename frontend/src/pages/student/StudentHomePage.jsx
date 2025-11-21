// import React from 'react'

// const StudentHomePage = () => {
//   return (
//     <div>StudentHomePage</div>
//   )
// }

// export default StudentHomePage
import React from 'react';

const StudentHomePage = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">
        Welcome to EduVerse 🎓
      </h1>
      
      <p className="text-gray-600 mb-6">
        Your personalized learning dashboard
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-4 bg-white rounded-lg shadow hover:shadow-md transition">
          <h3 className="text-lg font-medium text-gray-800">📚 Your Courses</h3>
          <p className="text-gray-500">View and manage your enrolled courses.</p>
        </div>

        <div className="p-4 bg-white rounded-lg shadow hover:shadow-md transition">
          <h3 className="text-lg font-medium text-gray-800">📝 Assignments</h3>
          <p className="text-gray-500">Stay up-to-date with your tasks.</p>
        </div>

        <div className="p-4 bg-white rounded-lg shadow hover:shadow-md transition">
          <h3 className="text-lg font-medium text-gray-800">📊 Progress</h3>
          <p className="text-gray-500">Track your learning journey.</p>
        </div>
      </div>
    </div>
  );
};

export default StudentHomePage;
