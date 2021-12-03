import React from "react";

export default function Search ({searchArt, handleSearch}) {

    return (
        <div>
            <input
                type="text"
                placeholder="Search"
                value={searchArt}
                onChange={(e) => handleSearch(e)}
                />
        </div>
    )
}