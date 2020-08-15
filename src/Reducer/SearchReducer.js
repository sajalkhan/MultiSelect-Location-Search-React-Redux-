import { SEARCH_LOCATION } from '../Action/type';

const initialState = [];

const reducer = (state = initialState, action) => {
    
    const { type, payload } = action;
    
    switch (type) {
        case SEARCH_LOCATION:
            var result = [];
            var length = (payload.results.length>5)? 5: payload.results.length;
            for(let i=0; i<length; i++) {
                result.push({ label: `${payload.results[i].name}, ${payload.results[i].country}`, value: payload.results[i].name});
            }
            return result;
        default:
            return state;
    }
}

export default reducer;