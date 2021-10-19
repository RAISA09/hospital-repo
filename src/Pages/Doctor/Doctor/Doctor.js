
import { useParams } from 'react-router';

// Doctor components Doctor js file
const Doctor = () => {
    const { doctorId } = useParams()

    return (
        <div>
            <h3>Name:{doctorId}</h3>
        </div>
    );
};

export default Doctor;