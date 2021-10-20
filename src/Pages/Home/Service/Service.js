import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

// service js file

const Service = (props) => {
    const { id, name, img, qualifications, description } = props.service
    return (

        <div className="col">
            <div className="card">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Name:{name}</h5>
                    <h5>Qualifications:{qualifications}</h5>
                    <p className="card-text">Description:{description.slice(0, 60)}</p>
                    <Link to={`/Doctor/${id}`}>
                        <button className="btn">{name.toLowerCase()} details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;