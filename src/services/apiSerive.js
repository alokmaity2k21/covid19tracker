import axios from "axios";
import { INDIA_API, WORLD_API } from "../config/config.json";

export const getStates = async () => {
  const { data } = await axios.get(INDIA_API);
  return data.statewise;
};

export const getCountries = async () => {
  const { data } = await axios.get(WORLD_API);
  return data;
};
