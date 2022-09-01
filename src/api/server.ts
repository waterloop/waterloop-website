import axios from 'axios';

// Useful for testing on local network devices (e.g. mobile) other than the device hosting the web app (localhost).

const devHostName = window.location.hostname; // Retrieves the current device's dev environment website hostname.

const baseUrl = process.env.NODE_ENV === 'development' ? `http://${devHostName}:9000` : process.env.REACT_APP_BASE_URL

export const server = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
  withCredentials: true,
  headers: {
    "Access-Control-Allow-Origin": process.env.NODE_ENV === 'development' ? RegExp(`^http://${devHostName}:[0-9]{4}$`) : 'https://www.teamwaterloop.ca',
  },
});

export default server;
export type Server = typeof server;
