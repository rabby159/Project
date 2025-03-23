import React, { useEffect, useState } from "react";
import Player from "../Player/Player";

const Players = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  return (
    <div className="max-w-7xl m-auto my-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Available Footballer</h2>
        <div className="join">
          <button className="btn join-item">Available</button>
          <button className="btn join-item">Selected</button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {players.map((player) => (
          <Player key={player.id} player={player}></Player>
        ))}
      </div>
    </div>
  );
};

export default Players;
