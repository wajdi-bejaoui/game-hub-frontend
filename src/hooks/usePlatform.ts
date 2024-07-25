
import useData from "./useData";

export interface Platform {
    id: number;
    name: string;
    slug : string;
}

const usePlatform = () => useData<Platform>('/platforms')

export default usePlatform;
