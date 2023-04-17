import React from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from '../redux/thunk/createPost';


const CreatePost = () => {
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        const today = new Date();
        const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        const dateTime = date + ' ' + time;

        const title = e.target.title.value;
        const body = e.target.body.value;
        const formData = {
            title,
            body,
            dateTime
        }
        dispatch(createPost(formData))
        e.target.reset()
    }
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body w-[500px]">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Title</span>
                                </label>
                                <input type="text" name="title" placeholder="Headline" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <textarea name="body" placeholder="Write your details" className="textarea textarea-bordered w-full" required></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn">Create post</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreatePost;