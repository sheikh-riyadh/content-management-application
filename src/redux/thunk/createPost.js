import { toast } from "react-hot-toast"


export const createPost = (formData) => {
    return async (dispatch, getState) => {
        const res = await fetch('http://localhost:5000/create-post', {
            method: 'POST',
            headers: {
                'Content-type': "application/json"
            },
            body: JSON.stringify(formData)
        })
        const data = await res.json()
        if (data.acknowledged) {
            toast.success("Created post successfully");
        }
    }
}