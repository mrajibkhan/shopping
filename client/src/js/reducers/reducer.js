import { ADD_CATALOGS } from "../constants/action-types";


const initialState = {
    catalogs: []
};

const rootReducer = (state = initialState, action) => {
    const { catalogs } = state;
    const { type, payload } = action;
    switch (type) {
        case ADD_CATALOGS:
            console.log("Adding catalogs: " , payload);
            return {
                ...state,
                catalogs: [...catalogs, ...payload]
            };
        default:
            return state;
    }
};

export default rootReducer;