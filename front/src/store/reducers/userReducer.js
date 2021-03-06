import {SET_USER, USER_LOGIN, USER_LOGOUT, SET_USERS} from '../constants'

const initialState = {
    user: {},
    users: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return Object.assign({}, state, {user: action.user})
        case SET_USERS:
            return Object.assign({}, state, {users: action.users})
        case USER_LOGIN:
            return Object.assign({}, state, {
                user: action.user,
            })
        case USER_LOGOUT:
            return Object.assign({}, state, {
                user: {}
            })
        default:
            return state;
    }
}