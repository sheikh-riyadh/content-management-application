import { FILTER_POST, GET_ALL_POSTS, POST_DETAILS } from "../actionTypes/actionTypes"

/* GET ALL POST DATA */
export const getPosts = (data) => {
    return {
        type: GET_ALL_POSTS,
        payload: data
    }
}

export const postDetails = (id) => {
    return {
        type: POST_DETAILS,
        payload: id
    }
}

export const filterPost = (data) => {
    return {
        type: FILTER_POST,
        payload: data
    }
}