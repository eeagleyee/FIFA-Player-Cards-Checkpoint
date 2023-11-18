// Import necessary libraries and components
import React from "react";
import ReactDOM from "react-dom/client"; // Import ReactDOM from client
import App from "./App.jsx"; // Import the main App component

// Render the App component to the DOM
ReactDOM.createRoot(document.getElementById("root")).render(
  // Use StrictMode to highlight potential issues in the app during development
  <React.StrictMode>
    {/* Render the App component */}
    <App />
  </React.StrictMode>
);
