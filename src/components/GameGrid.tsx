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

  useEffect (()=>{
    apiClient.get<FetchGameResponse>('/games')
      .then(res=>setGames(res.data.result))
      .catch(err=>setError(err.message));
  })

  return (
    <ul>
      {games.map(game => <li key={game.id}>game.name</li>)}
    </ul>
  )


}
export default GameGrid
