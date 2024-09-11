import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMWU3ZDRiMmE1Njc3ZDA4MDU1ODk0YTQ3NWNmMmI2MSIsIm5iZiI6MTcyNTY5NzMzMy42OTgyMDYsInN1YiI6IjY2ZGJiMWU1YWIxODE0ZmQ4Zjk2NGQ4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fN5cT9BSO1SGtb6Dv2ek0dKu-MCxxO9_24-YNi6J0UQ",
  },
});

export default instance;
