
import genres from "../Data/genres"
export interface Genre {
  _id: string;
  name: string;
  slug: string;
  // game_count: number;
  image_background: string;
}

// const useGenres = () => useData<Genre>('/genres')
const useGenres = () => ({data : genres, isLoading : false, error : null})

export default useGenres;
