import React,{useEffect, useState} from "react";
import apiClient from "../services/api-client";


interface Game{
  id:number;
  name:string;
}

interface FetchGameResponse{
  count:number;
  result:Game[];
}

const GameGrid = () => {
  const [games,setGames]= useState<Game[]>([]);
  const [error,setError]= useState();

  const proxyUrl = "http://127.0.0.1:8080/";

  useEffect(() => {
    apiClient.get<FetchGameResponse>(`${proxyUrl}/games`)
      .then(res => setGames(res.data.result))
      .catch(err => setError(err.message));
  }, []); // Add an empty dependency array to ensure the effect runs only once

  return (
    <ul>
      {games.map(game => <li key={game.id}>game.name</li>)}
    </ul>
  )


}
export default GameGrid
