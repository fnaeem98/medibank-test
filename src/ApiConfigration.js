import axios from 'axios';

export const apiGet = (endpoint) => (
    axios.get(endpoint)
);
