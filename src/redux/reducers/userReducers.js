import { LOAD_INIT_DATA } from '../type';


export default (state = [], action) => {
    switch (action.type) {
        case LOAD_INIT_DATA:
            return {
                ...state,
                initalData: action.payload
            }

        default:
            return state;
    }
};