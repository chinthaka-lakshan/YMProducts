import { useState } from "react"; // React Hooks
import reactLogo from "./assets/react.svg"; // Example asset
import viteLogo from "/vite.svg"; // Example Vite asset
import "./index.css"; // App-level styles
import "./App";
import Login from "./pages/Login/login"; // Ensure this path is correct and matches the file name/extension
import Dashboard from "./pages/dashboard/Dashboard";
import ItemList from "./components/ItemList/ItemList";
import TopBar from "./components/TopBar/TopBar";
import SideBar from "./components/SideBar/SideBar";

function App() {
  const [count, setCount] = useState(0); // Example state (not currently used in Login)

  return (
    <div>
      <div className="mainCont">
        <div className="leftCont">
          <SideBar></SideBar>
        </div>
        <div className="rightCont">
          <TopBar></TopBar>
          <div className="routeContent">
            {/* <Dashboard></Dashboard> */}
            <ItemList></ItemList>
            </div>
        </div>
      </div>

      {/* <ItemList /> */}
      {/* <Login />
       {/* Rendering the Login component */}
    </div>
  );
}

export default App;
