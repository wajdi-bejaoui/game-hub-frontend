import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/api-client";
import useData from "./useData";
import { Genre } from "./useGenres";
import { Platform } from "./usePlatform";




export interface Game {
  id: number;
  name: string;
  background_image :string;
  parent_platforms: Platform[];
  metacritic: number;

}


const useGames = (selectedGenre : Genre | null, selectedPlatform : Platform | null) => 
  useData<Game>("/games", {
    params : {
      genre : selectedGenre?.slug, 
      platform : selectedPlatform?.slug
    }}, 
    [selectedGenre?._id, selectedPlatform?.id])

export default useGames;