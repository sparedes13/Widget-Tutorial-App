import React, { useState } from 'react'
import Dropdown from './Dropdown'
import { Convert } from './Convert'

// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM

const options = [
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    },
    {
        label: 'Spanish',
        value: 'es'
    }
]

export const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');

    return (
        <div>
            <div className='ui form'>
                <div className='field'>
                    <label className='label'>Enter Text</label>
                </div>
            </div>
            <div>
                <input className='ui selection dropdown ' value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <Dropdown options={options}
                onSelectedChange={setLanguage}
                selected={language}
                label='Select a Language'
            />
            <hr />
            <h3 className='ui header'>Output</h3>
            <Convert text={text} language={language} />
        </div>
    )
}
