import React, { useState, useEffect, useRef } from 'react'



const Dropdown = ({ options, selected, onSelectedChange, label }) => {

    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {

        const onBodyClick = (event) => {
            if (ref.current.contains(event.target)) {
                return;
            }
            setOpen(false)
        };


        document.body.addEventListener('click', onBodyClick)

        // Clean up so that event listener wont drop errors when dropdown toggles!!!!!
        return () => {
            document.body.removeEventListener('click', onBodyClick)
        }
    }, []);


    const renderOptions = options.map((option) => {

        if (selected === option) {
            return null
        }

        return (
            <div
                key={option.value}
                className='item'
                onClick={() => {
                    onSelectedChange(option)
                }}
            >
                {option.label}
            </div>
        );
    });

    //console.log(ref.current)
    return (
        <div ref={ref} className='ui form'>
            <div className='field'>
                <label className='label'>{label}</label>
                <div
                    onClick={() => {
                        setOpen(!open)
                    }}
                    className={`ui selection dropdown ${open ? 'visible active' : ''}`}
                >
                    <i className='dropdown icon'></i>
                    <div className='text'>{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>{renderOptions}</div>


                </div>
            </div>
        </div >
    );
};


export default Dropdown