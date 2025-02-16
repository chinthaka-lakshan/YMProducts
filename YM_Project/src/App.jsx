import { useState } from 'react'; // React Hooks
import reactLogo from './assets/react.svg'; // Example asset
import viteLogo from '/vite.svg'; // Example Vite asset
import './App.css'; // App-level styles
import Login from './pages/Login/login'; // Ensure this path is correct and matches the file name/extension

function App() {
  const [count, setCount] = useState(0); // Example state (not currently used in Login)

  return (
    <div>
      <Login /> {/* Rendering the Login component */}
    </div>
  );
}

export default App;
