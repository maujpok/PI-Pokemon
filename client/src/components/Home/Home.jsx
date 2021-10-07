import React from "react";
// import { Link } from "react-router-dom";
// import SearchBar from "../SearchBar/SearchBar";
import Paginator from "../Paginator/Paginator";
import ShowAll from "../ShowAll/ShowAll";
import './Home.css';


export default function Home(){
    return (
        <>
        <div>
            <h3>"Find and create any Pokemon!"</h3>
            <ShowAll />
        </div>
        <div>
            <Paginator />
        </div>
        </>
    )
};