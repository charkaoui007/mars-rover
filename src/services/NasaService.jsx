import axios from 'axios';
import { API_KEY } from '../config';

const BASE_URL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos';

export const fetchPhotos = async (camera, sol = 1000) => {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                sol,
                camera,
                api_key: API_KEY
            }
        });
        return response.data.photos;
    } catch (error) {
        console.error('Error fetching photos:', error);
        throw error;
    }
};
