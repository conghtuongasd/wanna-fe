import { OPEN_USER_BAR, OPEN_SIDEBAR } from '../type';

const openSidebarCreator = (open) => {
    return {
        type: OPEN_SIDEBAR,
        payload: open
    }
}

const openUserBar = (open) => {
    return {
        type: OPEN_USER_BAR,
        payload: open
    }
}


export {
    openSidebarCreator,
    openUserBar
};