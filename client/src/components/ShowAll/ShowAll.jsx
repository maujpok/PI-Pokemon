import React, { useState } from "react";
import Pokemon from "../Pokemon/Pokemon";
import { useSelector } from "react-redux";
import './ShowAll.css';


export default function ShowAll() {
    const pokemons = useSelector((state) => state.pokemonsCopy);
    const [current, setCurrent] = useState(0);
    const [page, setPage] = useState(1);

    const paginator = () => {
        if(current === 0)
        return pokemons.slice(current, current +9)
        else
        return pokemons.slice(current, current+12)
    };

    const nextPage = () => {
        setPage(page < 5 ? page+1 : 5)
        if(paginator().length > 8) {
            if(current === 0) {
                setCurrent(current + 9)
            }
            else {
                setCurrent (current+12)
                }
        }
    }

    const prevPage = () => {
        setPage(page > 1 ? page-1 : 1);
        if(current > 9) setCurrent(current - 12)
        else setCurrent(0)
    }

    return (
        <>
        <div className='showall'>
        {paginator().map(({id, name, types, img}) => 
            <Pokemon
                key={id}
                id={id}
                name={name}
                types={types}
                img={img}/>
                )}
        </div>
        <span>{pokemons.length}</span>
        <div id='paginator'>
            <button
            id='paginator_btn'
            onClick={prevPage}
            >Prev</button>
            <span>{page}</span>
            <button
            id='paginator_btn'
            onClick={nextPage}
            >Next</button>
        </div>
        </>
    )
};

// const mapStateToProps = (state) => {
//     return {
//         pokemons: state.pokemonsCopy
//     }
// }

// export default connect(mapStateToProps, {})(ShowAll);