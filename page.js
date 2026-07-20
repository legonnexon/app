'use client';
import { useEffect, useState } from 'react';
import CardSection from './components/CardSection';
import GameListContent from './components/GameListContent';
import GameSection from './components/GameSection';

export default function Home() {
  const [selected_game, set_selected_game] = useState(0);

  let games = [
    { name: "The Legend of Zelda: The Minish Cap", playtime: "80h", front: 'zelda_front.jpg', back: 'zelda_background.jpg' },
    { name: "Pokemon Emerald", playtime: "160h", front: 'poke_front.jpg', back: 'poke_back.png'},
    { name: "Add a new game", playtime: "0h" },
  ];

  useEffect(() => {    
    const gameBackground = document.querySelector('.game_background');
    if (gameBackground) {
      gameBackground.style.backgroundImage = 'url(/' + games[selected_game].back + ')';
      gameBackground.style.backgroundSize = 'cover';
      gameBackground.style.backgroundPosition = 'center';
    }
  }, [selected_game])


  return (
    <div className="springkle">
      <div className="game_background"></div>
      <CardSection />
      <GameListContent games={games} selected_game={selected_game} set_selected_game={set_selected_game} />
      <GameSection game={games[selected_game]} />
    </div>
  );
}
