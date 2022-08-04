import Axios from "axios";

export const api = Axios.create({
  baseURL: "https://api.pokemontcg.io/v2",
});
