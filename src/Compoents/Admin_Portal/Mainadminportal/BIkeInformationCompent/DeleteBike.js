import React, { useState } from 'react';

const DeleteBike = () => {
    const [bikeid, setBikeid] = useState('');
    const [message, setMessage] = useState('');

    const handleDeleteBike = async () => {
        try {
            if (!bikeid) {
                setMessage('Bike ID is required');
                return;
            }

            const response = await fetch(` https://hyperwave-1-c8519996.deta.app/delete_bike/${bikeid}`);

            if (response.ok) {
                setMessage('Bike deleted successfully');
            } else if (response.status === 404) {
                setMessage('Bike not found');
            } else {
                setMessage('Server error');
            }
        } catch (error) {
            console.error(`Network or other unexpected error: ${error.message}`);
        }
    };

    const handleInputChange = (event) => {
        // Update the bikeid state with the new value from the input field
        setBikeid(event.target.value);
        // Clear any previous error message
        setMessage('');
    };

    return (
        <div className='Delete_bike_container'>
            <h1>Delete Bike</h1>
            <label>Bike ID</label><br />
            <input value={bikeid} onChange={handleInputChange} type='text' />
            <div>
                <button onClick={handleDeleteBike}>Delete Bike</button>
            </div>
            {message && <p>{message}</p>}
        </div>
    );
}

export default DeleteBike;
