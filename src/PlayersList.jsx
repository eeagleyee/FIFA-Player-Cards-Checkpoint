import React from "react";
import Player from "./Player";
import playersData from "./Players"; // Import players data

// PlayersList component responsible for rendering a list of players
const PlayersList = () => {
  // Inline styles for the container holding player cards
  const containerStyle = {
    display: "grid", // Use grid display
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", // Automatically adjust columns based on available space
    gap: "20px", // Set gap between grid items
    justifyContent: "center", // Center the grid items
    padding: "20px", // Add padding to the container
    backgroundColor: "#f9f9f9", // Background color of the container
  };

  // Render the JSX structure of the PlayersList component
  return (
    <div style={containerStyle}>
      {/* Map through player data and render Player component for each player */}
      {playersData.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  );
};

// Export the PlayersList component as the default export
export default PlayersList;
