import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/thunk/fetchPosts';
import Card from '../components/Card';
import { filterPost } from '../redux/actionCreators/actionCreators';


const Home = () => {

    const { posts } = useSelector(state => state.posts)
    const state = useSelector(state => state)
    console.log(state)


    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])


    return (
        <div>
            <div className='flex justify-end pb-5'>
                <select onChange={(e) => dispatch(filterPost(e.target.value))} className="select select-bordered w-full max-w-xs" defaultValue={'DEFAULT'} >
                    <option value="DEFAULT" disabled>Post filter</option>
                    <option value="old post">Old post</option>
                    <option value="new post">New post</option>
                </select>
            </div>
            <div className='grid grid-cols-4 gap-4'>
                {posts.map(post => <Card key={post._id} post={post} />)}
            </div>
        </div>
    );
};

export default Home;