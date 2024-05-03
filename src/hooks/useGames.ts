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


const useGames = () =>{
  const [games,setGames]= useState<Game[]>([]);
  const [error,setError]= useState();

  const proxyUrl = "http://127.0.0.1:8080/";
  //const apiUrl = "api.rawg.io/api/games"

  useEffect(() => {
    apiClient.get<FetchGameResponse>(`${proxyUrl}/api.rawg.io/api/games`)

      .then(res => setGames(res.data.result))
      .catch(err => setError(err.message));

  }, []); // Add an empty dependency array to ensure the effect runs only once

  return {games,error};
}



export default useGames;
