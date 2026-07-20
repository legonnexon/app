export default function GameSection({ game }) {
    return (
        <div className="game-section">
            <div className="game-info">
                <div className="game-name">{game.name}</div>
                <div className="game-playtime">
                    <span>Playtime:</span> <span className="game-playtime-value">{game.playtime}</span>
                </div>
            </div>
        </div>
    )
}