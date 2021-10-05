import React from "react";
import './SearchBar.css';
import SearchInput from "../SearchInput/SearchInput";
import OrderItems from "../OrderItems/OrderItems";
import FilterItems from "../FilterItems/FilterItems";

export default function SearchBar() {
    return (
        <div className='searchbar'>
            <SearchInput />
            <OrderItems />
            <FilterItems />
        </div>
    )
};