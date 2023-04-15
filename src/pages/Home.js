import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/thunk/fetchPosts';
import Card from '../components/Card';
import DetailsModal from '../components/DetailsModal';


const Home = () => {

    const { posts } = useSelector(state => state.posts)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])


    return (
        <div>
            <div className='flex justify-end pb-5'>
                <select className="select select-bordered w-full max-w-xs" defaultValue={'DEFAULT'} >
                    <option value="DEFAULT" disabled>Choose a salutation ...</option>
                    <option value="1">Old post</option>
                    <option value="2">New post</option>
                </select>
            </div>
            <div className='grid grid-cols-4 gap-4'>
                {posts.map(post => <Card key={post._id} post={post} />)}
            </div>
            <DetailsModal />
        </div>
    );
};

export default Home;