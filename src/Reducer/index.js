import { combineReducers } from 'redux';

import SearchLocation from './SearchReducer';
import {AddLocation_1, AddLocation_2, AddLocation_3, AddLocation_4} from './AddlocationReducer';

export default combineReducers({
    SearchLocation,
    AddLocation_1,
    AddLocation_2,
    AddLocation_3,
    AddLocation_4
});