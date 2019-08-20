import React from 'react';

export default function List (props) {

    if(!Array.isArray(props.list)) {
        return (<p>List can't be undefined</p>)
    } else {
        return props.list.map((element, index) => (
            <div key={index}>
                <label>
                    <input 
                        type="checkbox"
                        id={`checkbox_${index}`}
                        data-testid={`checkbox_${index}`}
                        checked={element.checked} 
                        onChange={(e) => props.handleCheckboxChange(element, index)}/>
                    Item {index + 1}
                </label>
            </div>
        ));
    }

}