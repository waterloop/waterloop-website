import axios from 'axios';

const baseUrl = 'https://waterloop-cms.herokuapp.com';

export const server = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
  withCredentials: true,
  headers: {
    "Access-Control-Allow-Origin": process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://www.teamwaterloop.ca',
  },
});

export default server;
export type Server = typeof server;
