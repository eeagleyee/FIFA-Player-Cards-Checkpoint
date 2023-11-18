# React + Vite

FIFA Player Cards Project
This project displays FIFA player cards using React. 
It showcases player details such as name, team, nationality, jersey number, age, and position in an organized and visually appealing manner.

Project Structure
src/
App.js: Main component rendering the FIFA Player Cards.
PlayersList.js: Component displaying a list of players using the Player component.
Player.js: Component rendering individual player cards.
players.js: File containing an array of player details used in the project.

Components

App Component
Acts as the root component.
Displays the "FIFA Player Cards" title and renders the PlayersList component.

PlayersList Component
Displays a list of players using the Player component.
Maps through the player data retrieved from players.js.

Player Component
Renders individual player cards.
Shows player details such as name, team, nationality, jersey number, age, position.

Styling
The project utilizes inline styles and CSS classes for component styling.
The Player component has styles for cards, images, and text.
The title div in the App component has custom styles for appearance.

Enhancements
Possible enhancements to consider:
Improved responsive design using media queries.
Dynamic fetching of player data from an API.
Additional player attributes or interactive features.
