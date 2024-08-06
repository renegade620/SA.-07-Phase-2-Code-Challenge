import React from "react";

function Search({ searchItem, setSearchItem }) {
    return (
        <input type="text" placeholder="Search..." value={searchItem} onChange={(event) =>
            setSearchItem(event.target.value)
        }></input>
    )
}

export default Search;