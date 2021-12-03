import React, {useState} from "react";

export default function Search ({arts}) {

    const [searchArt, setSearchArt] = useState('');

      function handleSearch(e) {
            setSearchArt(e.target.value);
        }

//   let displayedArts = arts.filter(art => {
//     // console.log(art.artist.toLowerCase());
//     return art.artist.toLowerCase().includes(searchArt.toLowerCase()) ||
//       art.title.toLowerCase().includes(searchArt.toLowerCase())
//   })


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