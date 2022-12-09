import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useInventoryContext } from '../context/InventoryProvider';


const Inventory = () => {
    const { setQValues } = useInventoryContext();
    const history = useHistory()


    const [value1, setValue1] = useState("")
    const [value2, setValue2] = useState("")
    const [value3, setValue3] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        const result = [
            value1,
            value2,
            value3

        ]
        setQValues(result)
        return history.push('/report')
    }


return(
    <form onSubmit={handleSubmit}>
        <div><h2>Inventory Component</h2></div>

    <div className='inventory-question'>
        <p className='inventory-prompt'>I learn the most when the lesson engages my sense of <em>sight</em>.</p>
        <select
            name='q1'
            onChange={(e) => setValue1(e.target.value)}
            value={value1}
            className='inventory-select'
        >
         <Options />
    </select>
    </div>


    <div className='inventory-question'>
        <p className='inventory-prompt'>I learn the most when the lesson engages my sense of <em>hearing</em>.</p>
        <select
            name='q2'
            onChange={(e) => setValue2(e.target.value)}
            value={value2}
            className='inventory-select'
        >
            <Options />
        </select>
    </div>

    <div className='inventory-question'>
        <p className='inventory-prompt'>I learn the most when the lesson engages my sense of <em>touch, taste,</em> or <em>smell</em>.</p>
        <select
            name='q3'
            onChange={(e) => setValue3(e.target.value)}
            value={value3}
            className='inventory-select'
        >
            <Options />
        </select>
    </div>

    <div className='form-buttons'>
    <button type="submit" disabled={
        !value1 || !value2 || !value3
    }>Submit</button>
    </div>
    </form>

    )
}

const Options = () => {
    return(
        [
            <option key="prompt" value="" disabled>Select Answer</option>,
            <option key="1" value={1}>Strongly Disagree</option>,
            <option key="2" value={2}>Disagree</option>,
            <option key="3 "value={3}>Neutral</option>,
            <option key="4" value={4}>Agree</option>,
            <option key="5" value={5}>Strongly Agree</option>
        ]
    )
}



export default Inventory
