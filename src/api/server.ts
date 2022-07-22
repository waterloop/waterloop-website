import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL;
//^^ in case there's an api error, try changing this line to: const baseUrl = 'http://localhost:9000';
// tip from Gordon

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
