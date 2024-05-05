import axios from "axios";


export default axios.create({

  method: 'GET',
  url: 'https://api.themoviedb.org/3/discover/movie',
  params: {
    include_adult: 'false',
    include_video: 'false',
    language: 'en-US',
    page: '1',
    sort_by: 'popularity.desc'
  },
  headers: {
    accept: 'application/json',

    Authorization: 'Bearer 0a332ac23ff992b8cb8703b17c7727c1'
  }
})
