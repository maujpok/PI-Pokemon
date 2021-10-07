import React from "react";

export default function Type(id, name) {

    return (
        <div key={id}>
            <span>{name}</span><input type="checkbox" />
        </div>
    )
};