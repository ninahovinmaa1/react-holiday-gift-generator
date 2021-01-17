import React from 'react';
import { Link } from 'react-router-dom';

export default function ButtonNext({ to, currentValue, label }) {
    function isValidated() {
        return currentValue !== ""
    }

    return (
        <Link to={to}
            className={`btn btn-secondary btn-block ${!isValidated() && "disabled"}`}>
            {isValidated() ? label : "Please pick a choice"}
        </Link>
    )
}
