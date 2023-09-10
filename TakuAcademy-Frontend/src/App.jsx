import { Outlet } from "react-router-dom";
import "./App.css";
import { useState, useEffect } from "react";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen"; // Import the LoadingScreen component

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call or other asynchronous operation
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Simulated 3-second delay
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingScreen /> // Show the loading screen when isLoading is true
      ) : (
        <Outlet />
        /* Render the actual content when isLoading is false.
           You can replace this with your application's routes and components. */
      )}
    </>
  );
}

export default App;
