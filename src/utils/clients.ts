import axios from 'axios';

export const ghClient = axios.create({
  baseURL: `https://api.github.com`,
});
