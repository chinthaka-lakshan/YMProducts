import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // React Router
import reactLogo from "./assets/react.svg"; // Example asset
import viteLogo from "/vite.svg"; // Example Vite asset
import "./index.css"; // App-level styles

import Login from "./pages/Login/login"; // Ensure this path is correct and matches the file name/extension
import Dashboard from "./pages/dashboard/Dashboard";
import ItemList from "./components/ItemList/ItemList";
import TopBar from "./components/TopBar/TopBar";
import SideBar from "./components/SideBar/SideBar";
import RepRegistration from "./pages/RepRegistration/RepRegistration";
import RepLogin from "./pages/RepLogin/RepLogin";
import Rep_List from "./pages/Rep_List/Rep_List";



function App() {
    return (
        <Router>
            <div>
                {/* <TopBar /> 
                <SideBar />  */}
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/items" element={<ItemList />} />
                    <Route path="/repRegistration" element={<RepRegistration/>} />
                    <Route path="/repLogin" element={<RepLogin/>} />
                    <Route path="/replist" element={<Rep_List/>} />
                    
                </Routes>
            </div>
        </Router>
    );
}

export default App;
