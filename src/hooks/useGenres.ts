
import useData from "./useData";

export interface Genre {
  _id: string;
  name: string;
  slug: string;
  game_count: number;
  image_background: string;
}

const useGenres = () => useData<Genre>('/genres')

export default useGenres;
