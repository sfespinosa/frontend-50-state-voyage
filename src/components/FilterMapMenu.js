import React from 'react'
import { Input } from 'reactstrap'

const FilterMapMenu = ({usStates, handleStateFilterChange}) => {

    const renderStateOptions = () => {
        return usStates.map(state => {
            return <option value={state.id} key={state.id}>{state.name}</option>
        })
    }

    return(
        <div className='filter-map-menu'>
            <strong>View State:</strong>
            <Input type='select' onChange={handleStateFilterChange} size='4'>
                {renderStateOptions()}
            </Input>
        </div>
    )
}

export default FilterMapMenu