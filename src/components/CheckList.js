import React, { useState } from 'react';
import List from './List';

const CHECKBOX_COUNT = 4;

export default function CheckList() {

    const checklist = [];
    for (let i = 0; i < CHECKBOX_COUNT; i++) {
        checklist.push({
            checked: false
        })
    }

    const [list, setList] = useState(checklist);
    const [allIsChecked, setAllIsChecked] = useState(false)

    const handleAllCheckboxesChange = (e) => {
        setAllIsChecked(!allIsChecked)
        setList(list.map(el => Object.assign(el, { checked: !allIsChecked })))
    }

    const handleCheckboxChange = (element, index) => {
        // update state
        setList(list.map((el, i) => Object.assign(el, { checked: i === index ? !el.checked : el.checked})))
        // if no checkbox is selected need to deselect "select all checkbox"
        // if all checkboxs are selected need to select "select all checkbox"
        const countCheckboxChecked = list.reduce((sum, current) => sum + parseInt(current.checked ? 1 : 0), 0);
        if(CHECKBOX_COUNT > countCheckboxChecked) {
            setAllIsChecked(false);
        } else if(CHECKBOX_COUNT === countCheckboxChecked) {
            setAllIsChecked(true);
        }
    }
 
    return (
        <div>
            <div>
                <label>
                    <input 
                        type="checkbox" 
                        id="all_checkboxes"
                        data-testid="all_checkboxes"
                        name="all_checkboxes" 
                        checked={allIsChecked} 
                        onChange={(e) => handleAllCheckboxesChange(e)}/>
                Select all</label>
            </div>
            <List handleCheckboxChange={handleCheckboxChange} list={list}></List>
        </div>
    )

}