import React from "react";
import Pokemon from "./Pokemon";

let img = 'https://www.movilzona.es/app/uploads-movilzona.es/2019/04/ash-ketchum-pokemon.jpg?x=480&y=375&quality=40'

const arr = [
    {id: 1, name: 'polo', types: 'electric', img: img},
    {id: 2, name: 'charmander', types: 'fire', img: img},
    {id: 3, name: 'bulbasaur', types: 'normal', img: img}
];

export default function GetApi() {

    return (
        <>
        {arr.map(e => 
        <Pokemon
            id={e.id}
            name={e.name}
            types={e.types}
            img={img}
            />
        )}
        </>
    )
};