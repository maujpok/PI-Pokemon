import React from "react";
import './SearchBar.css';
import SearchInput from "../SearchInput/SearchInput";
import OrderItems from "../OrderItems/OrderItems";
import FilterItems from "../FilterItems/FilterItems";
import SearchResult from "../SearchResult/SearchResult";

export default function SearchBar() {
    return (
        <div className='searchbar'>
            <div id='search'>
                <SearchInput />
                <SearchResult />
            </div>
            <div id='order_filter'>
                <FilterItems />
                <OrderItems />
            </div>
        </div>
    )
};