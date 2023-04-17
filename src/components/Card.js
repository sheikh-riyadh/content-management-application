import React from 'react';
import { useDispatch } from 'react-redux';
import { POST_DETAILS } from '../redux/actionTypes/actionTypes';

const Card = ({ post }) => {
    const { title, body, _id, dateTime } = post;
    const dispatch = useDispatch()

    return (
        <div>
            <div className="card bg-base-100 h-full shadow-xl">
                <div className="card-body">
                    <div className='text-2xl font-medium'>
                        {title?.length >= 15 ? <h2> Title: {title?.slice(0, 15)}...</h2> : <h2>Title: {title}</h2>}
                    </div>
                    <p>Body: {body?.length >= 50 ? `${body?.slice(0, 50)}...` : body}</p>
                    <p className='font-bold'>{dateTime && `Date: ${dateTime}`}</p>
                    <label htmlFor='details-modal' onClick={() => dispatch({ type: POST_DETAILS, payload: _id })} className="btn">Details</label>
                </div>
            </div>
        </div>
    );
};

export default Card;