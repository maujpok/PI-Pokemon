import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom";
import { cleanSearchResult } from "../../actions/actions";
import "./SearchResult.css";


export default function SearchResult() {
    
    const dispatch = useDispatch();

    function onClick(e) {
        dispatch(cleanSearchResult)
    };

    const result = useSelector((state) => state.search);
    var pokemon = result.found[0];

    return (
        <div id='result'>
            <h4 id='h4'>Result:</h4>
            {result.loading && <div>Searching...</div>}
            {pokemon &&
                <div>
                    <Link to={`/${pokemon.name}`}>
                    <img src={result.found[0].img} alt='img' width='20px'/>
                    <span onClick={onClick}>{pokemon.name}</span>
                    </Link>
                </div>
                }
            {result.notfound !== '' && 
                <span className='text-danger'>{result.notfound}</span>
                }
        </div>
    )
};