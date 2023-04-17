import { getPosts } from "../actionCreators/actionCreators";

export const fetchPosts = () => {
    return async (dispatch, getState) => {
        const res = await fetch('http://localhost:5000/posts');
        const data = await res.json()
        dispatch(getPosts(data))
    }
}