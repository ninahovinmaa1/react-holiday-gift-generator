import React from 'react'

export default function RadioButton({ name, value, onChange, currentValue, label }) {
    return (
        <div class="form-check">
            <input
                className="form-check-input"
                type="radio"
                name={name}
                id={value}
                value={value}
                onChange={onChange}
                defaultChecked={currentValue === value}
            />
            <label className="form-check-label" htmlFor={value}>
                {label}
            </label>
        </div>
    )
}
