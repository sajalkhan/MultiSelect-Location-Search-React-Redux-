import { ADD_LOCATION_1, ADD_LOCATION_2, ADD_LOCATION_3, ADD_LOCATION_4 } from '../Action/type';

const initialState = [];

export const AddLocation_1 = (state = initialState, action) => {

    const { type, payload } = action;

    switch (type) {
        case ADD_LOCATION_1:
            var result = getResult(payload)
            return result;
        default:
            return state;
    }
}

export const AddLocation_2 = (state = initialState, action) => {

    const { type, payload } = action;

    switch (type) {
        case ADD_LOCATION_2:
            var result = getResult(payload)
            return result;
        default:
            return state;
    }
}

export const AddLocation_3 = (state = initialState, action) => {

    const { type, payload } = action;

    switch (type) {
        case ADD_LOCATION_3:
            var result = getResult(payload)
            return result;
        default:
            return state;
    }
}

export const AddLocation_4 = (state = initialState, action) => {

    const { type, payload } = action;

    switch (type) {
        case ADD_LOCATION_4:
            var result = getResult(payload)
            return result;
        default:
            return state;
    }
}

var getResult = (payload)=> {
    var result = [];
    for (let i = 0; i < payload.length; i++) {
        var V = (payload[i].label.length > payload[i].value.length) ? payload[i].label : payload[i].value;
        var L = (payload[i].label.length < payload[i].value.length) ? payload[i].label : payload[i].value;
        result.push({ value: V, label: L });
    }
    return result;
}