import axios from 'axios';

export default axios.create({
  baseURL: process.env.REACT_APP_API_HOST,
  timeout: 30000,
})