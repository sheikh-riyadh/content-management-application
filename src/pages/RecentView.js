import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../components/Card';

const RecentView = () => {
    const { recentView } = useSelector(state => state.posts)
    return (
        <div>
            <div className='grid grid-cols-4 gap-4'>
                {recentView?.map(post => <Card key={post?._id} post={post} />)}
            </div>
        </div>
    );
};

export default RecentView;