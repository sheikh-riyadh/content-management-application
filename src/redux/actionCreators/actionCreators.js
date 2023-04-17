import { GET_ALL_POSTS } from "../actionTypes/actionTypes"

/* GET ALL POST DATA */
export const getPosts = (data) => {
    return {
        type: GET_ALL_POSTS,
        payload: data
    }
}