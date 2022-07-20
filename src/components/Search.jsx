import React, { useState, useEffect } from 'react'
import axios from 'axios';
import '../App.css';

const Search = () => {


    const [term, setTerm] = useState('')
    const [results, setResults] = useState([])

    useEffect(() => {

        const search = async () => {
            const response = await axios.get(`https://en.wikipedia.org/w/api.php`, {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term
                },
            });
            //console.log(response.data.query.search)
            setResults(response.data.query.search)
        }

        const timeoutId = setTimeout(() => {
            if (term) {
                search();
            }
        }, 500);

        return () => clearTimeout(timeoutId);

    }, [term]);

    const renderResults = results.map((result) => {
        return <React.Fragment key={result.pageid}>
            <div className='item'>
                <div className='right floated content'>
                    <a
                        className='ui button'
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}
                        target='_blank'
                        rel="noopener noreferrer"
                    >
                        Go
                    </a>
                </div>
                <div className='content'>
                    <div className='header'>
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
                </div>
            </div>

        </React.Fragment>
    });

    return (
        <div className='ui form'>
            <div className='field'>
                <label>Enter Search Term</label>
                <input
                    value={term}
                    onChange={e => setTerm(e.target.value)}
                    className='input' />
            </div>
            <div className='ui celled list'>{renderResults}</div>
        </div>
    )
}

export default Search