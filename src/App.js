import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./Components/Dashboard";
import { PageProvider } from "./Context/PageContext";
import { AuthProvider } from "./Context/AutContext";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AdminDashboard from "./Components/Admin/Pages/AdminDashboard";
import { AdminPageProvider } from "./Components/Admin/Context/AdminPageContext";
function App() {
  return (
    <Router>
      <AuthProvider>
        <PageProvider>
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </PageProvider>
      </AuthProvider>
      <AdminPageProvider>
        <Routes>
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </AdminPageProvider>
    </Router>
  );
}

export default App;
