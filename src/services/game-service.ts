import create from "./http-service";

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

export default create('/games');
