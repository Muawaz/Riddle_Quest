import React from 'react'

const Option = ({optionText, onSelect}) => {
    return (
        <button className="option-button" onClick={onSelect}>
            {optionText}
        </button>
    );
};

export default Option