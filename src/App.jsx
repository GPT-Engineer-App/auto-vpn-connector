import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import SetupPage from "./pages/SetupPage.jsx";
import ManageConnections from "./pages/ManageConnections.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/setup" element={<SetupPage />} />
        <Route path="/manage-connections" element={<ManageConnections />} />
      </Routes>
    </Router>
  );
}

export default App;
