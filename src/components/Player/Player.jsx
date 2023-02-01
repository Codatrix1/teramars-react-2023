import React from "react";
import { FaTwitter, FaUserAlt, FaMedal, FaChess } from "react-icons/fa";
import "./Player.css";

const Player = ({
  avatar,
  followers,
  league,
  location,
  name,
  username,
  status,
}) => {
  return (
    <main className="container">
      <div className="players">
        <article className="player">
          <img className="player__img" src={avatar} alt={name} />

          <div className="player__data">
            <h3 className="player__name">{name}</h3>
            <h4 className="player__region">{location}</h4>
            <div className="player__row">
              <p className="player__row">
                <span>
                  <FaUserAlt />
                </span>
                @{username}
              </p>
              <span>
                <FaTwitter />
              </span>
              {followers} followers
            </div>
            <p className="player__row">
              <span>
                <FaMedal />
              </span>
              {league} league
            </p>
            <p className="player__row">
              <span>
                <FaChess />
              </span>
              {status}
            </p>
          </div>
        </article>
      </div>
    </main>
  );
};

export default Player;
