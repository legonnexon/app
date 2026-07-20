import { useEffect, useRef, useState } from 'react';
import { animate } from 'animejs';
import Image from 'next/image' 

export default function CardSection({ games, selected_game, set_selected_game}) {
  const centerMarkerRef = useRef(null);
  const cardRefs = useRef([]);
  const currentYRef = useRef(0); // valor atual do translateY aplicado

  const centerSelectedGame = (index) => {
    const inactiveGames = document.querySelectorAll('.other-game');
    const marker = centerMarkerRef.current;
    const card = cardRefs.current[index];
    if (!marker || !card) return;

    const markerRect = marker.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();

    // diferença entre o centro do card e o centro do marcador, medida na tela real
    const markerCenter = markerRect.top + markerRect.height / 2;
    const cardCenter = cardRect.top + cardRect.height / 2;
    const delta = markerCenter - cardCenter;

    const newY = currentYRef.current + delta;
    currentYRef.current = newY;

    animate('.game-list', { y: newY, duration: 200});

    animate('.selected-game', {
      width: [200, 300],
      duration: 150,
      ease: 'outQuad'
    });

    animate(inactiveGames, {width: 200, duration: 0})
  };

  useEffect(() => {
    centerSelectedGame(0); // alinhamento inicial, roda uma vez só
  }, []);

  const handleClick = () => {
    let next = selected_game + 1;
    if (selected_game >= games.length-1) {next = 0}
    set_selected_game(next);
    // espera o próximo frame pra garantir que o DOM já refletiu a classe "selected-game"
    requestAnimationFrame(() => centerSelectedGame(next));
  };

  const goToIndex = (next) => {
    set_selected_game(next);
    requestAnimationFrame(() => centerSelectedGame(next));
  }

  const handleNext = () => {
    let next = selected_game + 1;
    if (selected_game >= games.length-1) next = 0;
    goToIndex(next);
  }

  const handlePrev = () => {
    let prev = selected_game - 1;
    if (selected_game <= 0) prev = games.length - 1;
    goToIndex(prev);
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        handlePrev(); 
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selected_game])

  return (
    <div className="game-list-content">
      <div ref={centerMarkerRef} className="center-marker" />

      <div className="game-list">
        {games.map((game, index) => (
          <div
            key={game.name + index}
            ref={el => (cardRefs.current[index] = el)}
            className={`${index === selected_game ? "selected-game" : "other-game"} card-image`}
          >
            <Image 
              src={`/${game.front}`}
              width={500}
              height={500}
              alt='Picture'
              className='border-radius'
            />
          </div>
        ))}
      </div>
      
    </div>
  );
}