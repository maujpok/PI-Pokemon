import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import ShowAll from "../ShowAll/ShowAll";
import './Home.css';


export default function Home(){

    return (
        <>
        <div id='home'>
            <div id='s.bar'>
                <SearchBar/>
            </div>
            <div>
                <h3>"Find and create any Pokemon!"</h3>
                <ShowAll/>
                <hr></hr>
                <span>Mauricio Portillo FT 17-A</span>
            </div>
        </div>
        </>
    )
};