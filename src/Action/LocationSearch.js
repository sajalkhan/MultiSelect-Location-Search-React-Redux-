import axios from 'axios';
import {SEARCH_LOCATION} from './type';

const query = 'https://www.meteoblue.com/en/server/search/query3?query=';


// search
export const SearchLocation = (location) => async (dispatch) => {

    try {
        const res = await axios.get(`${query+location}`);
        dispatch({
            type: SEARCH_LOCATION,
            payload: res.data
        });

    } catch (err) {
        
    }
}

//Add Location
export const AddLocation = (location, indx) => async (dispatch)=> {
    try {
        dispatch({
            type: `ADD_LOCATION_${indx}`,
            payload: location
        })
    } catch (error) {
        console.log('error');
    }
}