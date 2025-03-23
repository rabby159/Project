import React from "react";
import PropTypes from "prop-types";

const Player = ({ player }) => {
  const {
    player_name,
    player_image_url,
    player_country,
    player_position,
    price,
    jersey_no,
  } = player;

  return (
    <div className="">
      <div className="card bg-base-100 w-96 shadow-sm shadow-blue-300">
        <figure className="px-10 pt-10">
          <img src={player_image_url} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="p-8">
          <div className="">
            <h2 className="text-center font-semibold mb-2">{player_name}</h2>
          </div>
          <div className="flex justify-between items-center border-b-2 border-amber-100 mb-3">
            <p className="text-sm font-medium">Country: {player_country}</p>
            <button className="btn mb-2">{player_position}</button>
          </div>

          <p className="font-semibold my-1">Jersey No: {jersey_no}</p>

          <div className="card-actions flex justify-between items-center">
            <h2 className="font-semibold">Price: { price}</h2>
            <button className="btn btn-info text-white">Select</button>
          </div>
        </div>
      </div>
    </div>
  );
};

Player.PropTypes = {
  player: PropTypes.object,
};

export default Player;
