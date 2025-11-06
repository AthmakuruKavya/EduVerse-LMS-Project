import { Route, Routes } from "react-router-dom";
import "./App.css";
import AuthPage from "./pages/auth/AuthPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AuthPage />} />
      </Routes>
    </>
  );
}

export default App;
