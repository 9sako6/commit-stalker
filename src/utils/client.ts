import axios from 'axios';

export const commitCountClient = axios.create({
  baseURL: `https://secure-tundra-40881.herokuapp.com`,
});

export const ghClient = axios.create({
  baseURL: `https://api.github.com`,
});
