import React,{useEffect, useState} from "react";
import apiClient from "../services/api-client";
import axios from "axios";

interface Movies{
  id:number;
  title:string;
  poster_path:string;
  release_date:string;
}

interface FetchMovieResponse{
  count:number;
  result:Movies[];
}


const useMovie = () =>{
  const [movies,setMovies]= useState<Movies[]>([]);
  const [error,setError]= useState('');


  const fetchData = () =>{
    axios.get("https://api.themoviedb.org/3/discover/movie?api_key=0a332ac23ff992b8cb8703b17c7727c1").then((response)=>{
      const result = response.data.results;
      console.log(result)
    })


  }
  useEffect(() => {
    fetchData();
  }, []);


  return {movies,error};

}

export default useMovie;
