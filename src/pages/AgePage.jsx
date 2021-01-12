import React, { useState } from 'react'
import RadioButton from '../components/RadioButton'

export default function AgePage() {

    const [age, setAge] = useState("")

    function handleOnChange(e) {
        setAge(e.target.value)
    }

    return (
        <div>
            <h2>Age</h2>
            {/*radio buttons for answer options*/}

            <RadioButton
                name="age" value="a" onChange={handleOnChange} currentValue={age}
                label={"Younger than 25"}
            />

            <div class="form-check">
                <input
                    className="form-check-input"
                    type="radio"
                    name="age"
                    id="b"
                    value="b"
                    onChange={handleOnChange}
                    defaultChecked={age === "b"}
                />
                <label className="form-check-label" htmlFor="b">
                    Between 25 and 50
                </label>
            </div>

            <div class="form-check">
                <input
                    className="form-check-input"
                    type="radio"
                    name="age"
                    id="c"
                    value="c"
                    onChange={handleOnChange}
                    defaultChecked={age === "c"}
                />
                <label className="form-check-label" htmlFor="c">
                    Over 50
                </label>
            </div>

        </div>
    )
}
