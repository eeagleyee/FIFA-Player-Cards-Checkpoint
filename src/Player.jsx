// Import necessary modules
import React from "react";
import { Card } from "react-bootstrap";

// Styles for the player card
const cardStyle = {
  border: "1px solid #ccc", // Border style
  borderRadius: "10px", // Border radius for rounded corners
  padding: "10px", // Padding inside the card
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Shadow effect
  transition: "transform 0.3s ease-in-out", // Transition effect for smoothness
  textAlign: "left", // Align text to the left
  backgroundColor: "#fff", // Background color of the card
};

// Styles for the player image
const imageStyle = {
  width: "100%", // Image width covering the entire container
  height: "350px", // Image height
  objectFit: "cover", // Cover to maintain aspect ratio
  borderTopLeftRadius: "10px", // Rounded corners for the top of the image
  borderTopRightRadius: "10px", // Rounded corners for the top of the image
};

// Styles for player text (name and details)
const textStyle = {
  fontSize: "1em", // Font size
  fontWeight: "bold", // Bold font weight
  margin: "10px 0", // Margin top and bottom
  color: "#333", // Text color
};

// Styles for player details (team, nationality, etc.)
const detailsStyle = {
  fontSize: "0.9em", // Font size
  color: "#666", // Text color
  lineHeight: "1.6", // Line height for spacing
};

// Player component to display player information in a card format
const Player = ({
  name,
  team,
  nationality,
  jerseyNumber,
  age,
  image,
  position,
}) => {
  return (
    <Card style={cardStyle} className="player-card">
      {/* Player image */}
      <Card.Img
        variant="top"
        src={image}
        alt={name}
        className="player-image"
        style={imageStyle}
      />
      <Card.Body>
        {/* Player name */}
        <Card.Title style={textStyle} className="player-name">
          {name}
        </Card.Title>
        {/* Player details */}
        <Card.Text style={detailsStyle} className="player-details">
          <span>
            Team: {team}
            <br />
          </span>
          <span>
            Nationality: {nationality}
            <br />
          </span>
          <span>
            Jersey Number: {jerseyNumber}
            <br />
          </span>
          <span>
            Age: {age}
            <br />
          </span>
          <span>Position: {position}</span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

// Default props for the Player component if data is unavailable
Player.defaultProps = {
  name: "Unknown",
  team: "Unknown",
  nationality: "Unknown",
  jerseyNumber: 0,
  age: 0,
  image: "#", // Placeholder image URL
  position: "Unknown",
};

// Export the Player component as the default export
export default Player;
