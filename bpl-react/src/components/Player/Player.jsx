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
      <div className="card bg-base-100 w-96 shadow-sm shadow-amber-200">
        <figure className="px-10 pt-10">
          <img src={player_image_url} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="p-8">
          <div className="">
            <h2 className="text-center font-semibold mb-2">{player_name}</h2>
          </div>
          <p>Country: {player_country}</p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
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
