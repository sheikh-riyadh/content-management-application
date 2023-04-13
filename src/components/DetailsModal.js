import React from 'react';
import { useSelector } from 'react-redux';

const DetailsModal = () => {
    const { details } = useSelector(state => state)

    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="details-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Title: {details[0]?.title}</h3>
                    <p className="py-4">Body: {details[0]?.body}</p>
                    <div className="modal-action">
                        <label htmlFor="details-modal" className="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsModal;