import { useState } from "react"; // React Hooks
import reactLogo from "./assets/react.svg"; // Example asset
import viteLogo from "/vite.svg"; // Example Vite asset
import "./index.css"; // App-level styles

import Login from "./pages/Login/login"; // Ensure this path is correct and matches the file name/extension
import Dashboard from "./pages/dashboard/Dashboard";
import ItemList from "./components/ItemList/ItemList";
import TopBar from "./components/TopBar/TopBar";
import SideBar from "./components/SideBar/SideBar";

function App() {
    const [count, setCount] = useState(0); // Example state (not currently used in Login)

    return (
        <div>
            <TopBar></TopBar>
            <SideBar></SideBar>
            {/* <Dashboard></Dashboard> */}
            <ItemList />
            {/* <Login />
       {/* Rendering the Login component */}
        </div>
    );
}

export default App;
