import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./Components/Dashboard";
import { PageProvider } from "./Context/PageContext";
import { AuthProvider } from "./Context/AutContext";

function App() {
  return (
    <AuthProvider>
      <PageProvider>
        <Dashboard />
      </PageProvider>
    </AuthProvider>
  );
}

export default App;
