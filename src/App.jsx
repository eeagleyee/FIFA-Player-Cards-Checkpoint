// Importing necessary libraries and components
import React from "react";
import PlayersList from "./PlayersList";

// App component responsible for rendering the entire application
function App() {
  // Inline styles for the title div
  const titleDivStyle = {
    textAlign: "center", // Align text in the center
    fontFamily: "Arial, sans-serif", // Set font family
    margin: "0", // Remove margin
    padding: "3px 0", // Adjust padding vertically
    backgroundColor: "#007bff", // Background color for the title div
    color: "#fff", // Text color for the title div
  };

  // Styles for the heading
  const headingStyle = {
    margin: "20px 0", // Add margin top and bottom to the heading
  };

  // Render the JSX structure of the component
  return (
    <div>
      {/* Title div with inline styles */}
      <div style={titleDivStyle}>
        {/* Heading with custom styles */}
        <h1 style={headingStyle}>JOSEPH's FIFA Player Cards</h1>
      </div>
      {/* Render the PlayersList component */}
      <PlayersList />
    </div>
  );
}

// Export the App component as the default export
export default App;
