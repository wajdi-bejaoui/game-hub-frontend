import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/api-client";
import useData from "./useData";
import { Genre } from "./useGenres";


export interface Platform {
  id: number;
  name: string;
  slug : string;
}

export interface Game {
  id: number;
  name: string;
  background_image :string;
  parent_platforms: Platform[];
  metacritic: number;

}


const useGames = (selectedGenre : Genre | null) => useData<Game>("/games", {params : {genre : selectedGenre?.slug}}, [selectedGenre?._id])

export default useGames;