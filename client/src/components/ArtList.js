import React from "react";
import ArtCard from "./ArtCard";

export default function ArtList ({arts}) {
    const art = arts.map((art)=>{
        return(
            <ArtCard 
            key={art.id}
            art={art}
            />
        )
    }
)

    return(
        <div>
            <br/><br/>
            <div className="artContainer">
               {art}
            </div>
        </div>
    )
}