import { FILTER_POST } from "../actionTypes/actionTypes"

const initialState = {
    filter: {
        newPost: false,
        oldPost: false
    }
}

export const filterReducer = (state = initialState, action) => {

    switch (action.type) {
        case FILTER_POST:
            return {
                ...state,
                filter: {
                    ...state.filter,
                    newPost: action.payload === "new post" ? !state.filter.newPost : false,

                    oldPost: action.payload === "old post" ? !state.filter.newPost : false,
                }
            }
        default:
            return state
    }
}