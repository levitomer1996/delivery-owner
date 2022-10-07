import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./Components/Dashboard";
import { PageProvider } from "./Context/PageContext";
import { AuthProvider } from "./Context/AutContext";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <AuthProvider>
          <PageProvider>
            <Route path="/" element={<Dashboard />} />
          </PageProvider>
        </AuthProvider>
      </Routes>
    </Router>
  );
}

export default App;
