import React, { useState, useEffect } from "react";
import Player from "./components/Player/Player";
import Loading from "./components/Loading/Loading";

// Endpoint
const url = "https://api.chess.com/pub/player/erik";

const App = function () {
  // useState Hook
  const [loading, setLoading] = useState(true);
  const [player, setPlayer] = useState("");

  // Fetch Function
  const fetchPlayer = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const playerData = await response.json();
      // console.log(playerData);
      setLoading(false);
      setPlayer(playerData);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  // useEffect Hook
  useEffect(() => {
    fetchPlayer();
  }, []);

  // 1st Return
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  // Main Return
  return (
    <React.Fragment>
      <Player key={player.player_id} {...player} />
    </React.Fragment>
  );
};

export default App;
