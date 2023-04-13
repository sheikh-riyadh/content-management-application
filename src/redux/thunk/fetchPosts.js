import { GET_ALL_POSTS } from "../actionTypes/actionTypes";

export const fetchPosts = () => {
    return async (dispatch, getState) => {
        const res = await fetch('http://localhost:5000/posts');
        const data = await res.json()
        dispatch({ type: GET_ALL_POSTS, payload: data })
    }
}