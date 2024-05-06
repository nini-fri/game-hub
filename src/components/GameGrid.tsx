import { SimpleGrid, Text } from "@chakra-ui/react"
import React,{useEffect, useState} from "react";
import axios from "axios";
import MovieCard from "./MovieCard";

interface Movies{
  id:number;
  title:string;
  poster_path:string;
  release_date:string;
}


const GameGrid = () => {
  const [movies,setMovies]= useState<Movies[]>([]);
  const [error,setError]= useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () =>{
    axios.get("https://api.themoviedb.org/3/discover/movie?api_key=0a332ac23ff992b8cb8703b17c7727c1").then((response)=>{
      const result = response.data.results;
      console.log(result)
      setMovies(result)
    })
  }

  return (

      <SimpleGrid columns={3} spacing={10}>
        {movies.map(item => (

          <li key={item.id}>{item.title}</li>

        ))}
      </SimpleGrid>

  )
}
export default GameGrid
