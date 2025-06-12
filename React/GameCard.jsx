const GameCard = ({ title, subtitle, price, imageUrl }) => {
  return (
    <div className="game-card">
      <div className="game-image-container">
        {imageUrl ? (
          <img src={imageUrl} alt={title} className="game-image" />
        ) : (
          <div className="game-placeholder">{title.charAt(0)}</div>
        )}
      </div>
      <div className="game-info">
        <h3 className="game-title">{title}</h3>
        {subtitle && <p className="game-subtitle">{subtitle}</p>}
        <p className="game-price">{price}</p>
      </div>
    </div>
  );
};

export default GameCard;