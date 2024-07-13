import axios from 'axios';

export async function getCEP(CEP) {

    const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/${CEP}`);
    
    return response.data;
    
}

export default getCEP;