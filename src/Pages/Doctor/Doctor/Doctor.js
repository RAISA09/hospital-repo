import React from 'react';
import { useParams } from 'react-router';

// Doctor components Doctor js file
const Doctor = () => {
    const { serviceId } = useParams()
    return (
        <div>
            <h3>Name:{serviceId}</h3>
        </div>
    );
};

export default Doctor;