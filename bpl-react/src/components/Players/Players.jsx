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
    <div className="max-w-7xl m-auto grid grid-cols-3 my-5 gap-10">
      {players.map((player) => (
        <Player key={player.id} player={player}></Player>
      ))}
    </div>
  );
};

export default Players;
