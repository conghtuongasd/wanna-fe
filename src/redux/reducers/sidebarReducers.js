import { OPEN_SIDEBAR, OPEN_USER_BAR } from '../type';


export const ShowNotiReducers = (state = { isOpenNoti: false }, action) => {
    switch (action.type) {
        case OPEN_SIDEBAR:
            return {
                isOpenNoti: action.payload
            }
        default:
            return state;
    }
};