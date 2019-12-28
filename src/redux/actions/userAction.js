import { LOAD_INIT_DATA } from '../type';
import { postApi } from '../../helpers';
import { IntlActions } from 'react-redux-multilingual'

const loadInitPage = (data) => {
    return {
        type: LOAD_INIT_DATA,
        payload: data
    }
}

const loadInitPageCreator = (UserID) => {
    return dispatch => {
        return postApi("/user/loadInitPage", { UserID })
            .then(data => data.data)
            .then(data => {
                dispatch(loadInitPage(data))
                dispatch(IntlActions.setLocale('en'));
            })
            .catch(err => {
                if (err) dispatch(loadInitPage([]))
            })
    }
}

export {
    loadInitPageCreator
};