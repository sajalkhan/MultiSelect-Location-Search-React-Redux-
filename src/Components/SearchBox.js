import React from 'react'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

export default function SearchBox(props) {
    return (
        <div>
            <Select
                {...props}
                components={animatedComponents}
                closeMenuOnSelect={false}
                isMulti
                placeholder="Type and search.."
                openMenuOnClick={false}
            />


            {/* <Dropdown
              placeholder='Search Location..'
              fluid
              clearable="true"
              multiple
              search
              selection
              options={location}
              onChange={handleChange.bind(this)} 
              onSearchChange={(e)=>handleInputChange(e)}


              https://react-select.com/home

            /> */}
            
        </div>
    )
}
