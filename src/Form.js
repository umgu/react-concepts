import React, { useState } from 'react'

const Form = () => {
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [upperCase, setUpperCase] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({fName, lName})
        // console.log(event.target.queryS);
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>First Name:
                <input value={fName} name="first-name" onChange={(e) => {
                    setFName(e.target.value);
                }}/>
            </label>
            <label>Last Name:
                <input value={lName} name="last-name" onChange={(e) => {
                    setLName(e.target.value);
                }}/>
            </label>
            <label>Uppercase:
                <input type="checkbox" checked={upperCase} onChange={() => {
                    setUpperCase(!upperCase);
                    setFName(fName.toUpperCase());
                    setLName(lName.toUpperCase());
                }}/>
            </label>
            <br />
            <button type="submit">Save</button>
        </form>
    )
}

export default Form;
