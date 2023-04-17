import { GET_ALL_POSTS, POST_DETAILS } from "../actionTypes/actionTypes"

const initialState = {
    posts: [],
    recentView: [],
    details: {}
}

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_POSTS:
            return {
                ...state,
                posts: action.payload
            }
        case POST_DETAILS:
            return {
                ...state,
                details: state.posts.filter(post => post._id === action.payload),
                recentView: [
                    ...state.recentView,
                    ...state.posts.filter(post => post._id === action.payload)
                ]
            }
        default:
            return state
    }
}