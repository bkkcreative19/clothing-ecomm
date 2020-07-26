import { UserActionTypes } from './users.type'
const Initial_STATE = {
    currentUser: null
}

const userReducer = (state= Initial_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;