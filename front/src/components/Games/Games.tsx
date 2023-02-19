import React from 'react';
import { useEffect, useState } from 'react';
import GameCard from '../GameCard/GameCard';

const Games = () => {

  const [games, setGames] = useState<any[]>([]);

  useEffect(() => {
    fetch('http://localhost:4000/games',
    {
      method: 'GET',
      headers: {'Content-Type':'application/json'}
    })
    .then(res => {
      return res.json();
    })
    .then(data => 
      {
        setGames(data);
        console.log(data);
      });
  },[]);

  return (
    <>
      {games?.map( (game) => <GameCard key={game._id} gameData={game} /> )}
    </>
  );
}

export default Games;
