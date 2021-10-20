
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

// Doctor components Doctor js file
const Doctor = () => {
    const { doctorId } = useParams();

    const [doctorDetails, setDoctorDetails] = useState([]);
    const [singleDoctor, setSingleDoctor] = useState({})

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setDoctorDetails(data))
    }, [])


    useEffect(() => {
        const foundEmployee = doctorDetails.find(employee => employee.id === JSON.parse(doctorId))
        console.log(foundEmployee)
        setSingleDoctor(foundEmployee)
    }, [doctorDetails])
    return (
        <div className="row mx-4 my-5">
            <div className="col-md-6">
                <img className="img-fluid" src={singleDoctor?.img} alt="" />
                <h3>Name: {singleDoctor?.name}</h3>
                <h5>Qualifications: {singleDoctor?.qualifications}</h5>
                <p>Description: {singleDoctor?.description}</p>
                <Link to="/services"><button className="btn my-3">Go Services</button></Link>
            </div>

        </div>
    );
};

export default Doctor;