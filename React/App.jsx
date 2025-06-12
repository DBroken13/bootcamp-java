import GameCard from "./components/GameCard";
import "./styles.css";

function App() {
  const games = [
    {
      title: "The Legend of Zelda",
      subtitle: "Link's Awakening Wind Fish",
      price: "$59.99",
      imageUrl: "https://example.com/zelda.jpg" // Reemplaza con imagen real
    },
    {
      title: "Retro Mario",
      price: "$59.99",
      imageUrl: "https://example.com/mario.jpg" // Reemplaza con imagen real
    },
    {
      title: "Splatoon Icon",
      price: "$49.99",
      imageUrl: "https://example.com/splatoon.jpg" // Reemplaza con imagen real
    }
  ];

  return (
    <div className="app">
      <h1>Video Game Collection</h1>
      <div className="games-grid">
        {games.map((game, index) => (
          <GameCard key={index} {...game} />
        ))}
      </div>
    </div>
  );
}

export default App;