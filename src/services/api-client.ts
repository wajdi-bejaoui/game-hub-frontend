import axios, { CanceledError } from 'axios';

export default axios.create({
  baseURL: 'http://localhost:3000/api/v1',
})

export { CanceledError };