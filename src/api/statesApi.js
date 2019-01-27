import axios from 'axios';

export const getAllStates = async () => {
    let res = await axios.get("https://restcountries.eu/rest/v2/all?fields=name;flag;");
    return res.data;
}