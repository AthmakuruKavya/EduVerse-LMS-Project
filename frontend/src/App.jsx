import { Route, Routes } from "react-router-dom";
import "./App.css";
import AuthPage from "./pages/auth/AuthPage";
import RouteGuard from "./components/route/RouteGuard";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import AdminDashBoard from "./pages/instructor/AdminDashBoard";
import CommonLayout from "./components/student-view/CommonLayout";
import StudentHomePage from "./pages/student/StudentHomePage";
import NotFoundPage from "./pages/not-found/NotFoundPage";

function App() {
  const { auth } = useContext(AuthContext);
  return (
    <>
      <Routes>
        <Route
          path="/auth"
          element={
            <RouteGuard
              element={<AuthPage />}
              authenticated={auth?.authenticate}
              user={auth?.user}
            />
          }
        />

        <Route
          path="/instructor"
          element={
            <RouteGuard
              element={<AdminDashBoard />}
              authenticated={auth?.authenticate}
              user={auth?.user}
            />
          }
        />

        <Route
          path="/"
          element={
            <RouteGuard
              element={<CommonLayout />}
              authenticated={auth?.authenticate}
              user={auth?.user}
            />
          }
        >
          <Route index element={<StudentHomePage />} />
          <Route path="home" element={<StudentHomePage />} />
        </Route>

        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </>
  );
}

export default App;
