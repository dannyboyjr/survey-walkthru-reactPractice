import React from 'react';
import { useInventoryContext } from '../context/InventoryProvider';

const InventoryReport = () => {
    const { qValues } = useInventoryContext()
return(
    <div>
        <h2>InventoryReport Component</h2>
        <ul>
           { qValues.map((val, index) => <li key={index}>{val}</li>)}
        </ul>
    </div>
)
}
export default InventoryReport