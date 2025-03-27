import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import "./index.css";
import Login from "./pages/Login/login";
import Dashboard from "./pages/dashboard/Dashboard";
import ItemList from "./components/ItemList/ItemList";
import TopBar from "./components/TopBar/TopBar";
import SideBar from "./components/SideBar/SideBar";
import RepRegistration from "./pages/RepRegistration/RepRegistration";
import RepLogin from "./pages/RepLogin/RepLogin";

function App() {
  const [count, setCount] = useState(0); 

  return (
    <Router>
      <Routes>
        {/* Login page should be separate and shouldn't have Sidebar & TopBar */}
        <Route path="/" element={<Login />} />
        <Route path="/repLogin" element={<RepLogin />} />

        {/* Protected Routes (Sidebar & TopBar should always be visible) */}
        <Route 
          path="/*" 
          element={
            <div className="mainCont">
              <div className="leftCont">
                <SideBar />
              </div>
              <div className="rightCont">
                <TopBar />
                <div className="routeContent">
                  <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/items" element={<ItemList />} />
                    <Route path="/repRegistration" element={<RepRegistration />} />
                    
                  </Routes>
                </div>
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
