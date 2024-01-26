import axios from "axios";

export const BACKEND_ENDPOINT = 'https://qtify-backend-labs.crio.do/';

export const fetchTopAlbums = async () => {
    try{
        const {data} = await axios.get(`${BACKEND_ENDPOINT}/albums/top`);
        return data;
    }catch(err) {
        console.error("Error", err.message);
    }
}

// this is maintained for modularity