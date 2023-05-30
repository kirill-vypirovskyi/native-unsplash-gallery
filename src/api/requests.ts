import axios from "axios";
import { Photo } from "../types/Photo";

const BASE_URL = 'https://api.unsplash.com';
const ACCESS_KEY = process.env.APP_ENV_ACCESS_KEY;

const get = async <T>(path: string): Promise<T> => {
  const { data } = await axios.get<T>(path);

  return data;
};

export const getRandomPhotos = (count = 30) => {
  return get<Photo[]>(`${BASE_URL}/photos/random?count=${count}&client_id=${ACCESS_KEY}`);
}