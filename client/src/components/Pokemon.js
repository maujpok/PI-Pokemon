import React from "react";

export default function Pokemon({id, img, name, types}) {

    return (
        <div key={id}>
            <img src={img} alt="pokeimg"/>
            <p>{name}</p>
            <p>{types}</p>
        </div>
    )
};