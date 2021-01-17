import React, { useContext } from 'react';
import ButtonNext from '../components/ButtonNext';
import RadioButton from "../components/RadioButton";
import { UserInputContext } from '../contexts/UserInputContext'

export default function InterestPage() {

    const { interest, setInterest } = useContext(UserInputContext)

    function handleOnChange(e) {
        setInterest(e.target.value)
    }

    const pageName = "interest"
    const currentValue = interest

    const pageData = [
        { value: "a", label: "Fashion" },
        { value: "b", label: "Tech" },
        { value: "c", label: "Craft" },
    ]

    return (
        <div>
            <h2>Interest</h2>
            {/*radio buttons for answer options*/}

            {pageData.map((item, index) => {
                return <RadioButton key={index}
                    name={pageName} value={item.value} onChange={handleOnChange} currentValue={currentValue}
                    label={item.label}
                />
            })}

            <ButtonNext to="/relationship"
                currentValue={currentValue}
                label="Lets move on to your relationship"
            />
        </div>
    )
}
