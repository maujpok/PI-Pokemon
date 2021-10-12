import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchApi, getTypes } from "../../actions/actions";
import Pokemon from "../Pokemon/Pokemon";
import SearchBar from "../SearchBar/SearchBar";
import './Home.css';


export default function Home() {

    const dispatch = useDispatch();
    const pokemons = useSelector((state) => state.pokemonsCopy);
    
    useEffect(() => {
        dispatch(fetchApi())
        dispatch(getTypes())
    }, [dispatch]);
    
    const [current, setCurrent] = useState(0);
    const [page, setPage] = useState(1);

    const paginator = () => {
        if(current === 0)
        return pokemons.slice(current, current +9)
        else
        return pokemons.slice(current, current+12)
    };

    const data = paginator();
    
    const nextPage = () => {
        if(pokemons.slice(current) > data)
        setCurrent(current+12)
        if(pokemons.slice(current) > data)
        setPage(page+1)
    };
    
    const prevPage = () => {
        setPage(page > 1 ? page -1 : 1);
        if(current > 9) setCurrent(current - 12)
        else setCurrent(0)
    }

    return (
        <>
        <div id='home'>
            <div id='s.bar'>
                <SearchBar/>
            </div>
            <div>
                <h3>"Find and create any Pokemon!"</h3>
                <div className='showall'>
                {data.map(({id, name, types, img}) => 
                    <Pokemon
                        key={id}
                        id={id}
                        name={name}
                        types={types}
                        img={img}/>
                        )}
                </div>
                {/* <span>{pokemons.length}</span> */}
                <div id='paginator'>
                    <button
                    id='paginator_btn'
                    onClick={prevPage}
                    >Prev</button>
                    <span> {page} </span>
                    <button
                    id='paginator_btn'
                    onClick={nextPage}
                    >Next</button>
                </div>
                <hr></hr>
                <span>Mauricio Portillo FT 17-A</span>
            </div>
        </div>
        </>
    )
};