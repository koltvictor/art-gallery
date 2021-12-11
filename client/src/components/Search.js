import React from "react";

export default function Search ({searchArt, handleSearch}) {
    
    return (
        <div className="search">
            <input
                type="text"
                placeholder="Search for an artist..."
                value={searchArt}
                onChange={(e) => handleSearch(e)}
                />
        </div>
    )
}