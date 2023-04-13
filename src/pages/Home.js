import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/thunk/fetchPosts';


const Home = () => {
    const { posts } = useSelector(state => state)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])
    return (
        <div>
            <h1>Home</h1>
        </div>
    );
};

export default Home;