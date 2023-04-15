import React from 'react';
import { useSelector } from 'react-redux';

const DetailsModal = () => {
    const { details } = useSelector(state => state.posts)

    return (
        <div>
            <input type="checkbox" id="details-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="details-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{details[0]?.title}</h3>
                    <p className="py-4">{details[0]?.body}</p>
                </div>
            </div>
        </div>
    );
};

export default DetailsModal;