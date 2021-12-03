import React from "react";
import ArtCard from "./ArtCard";

export default function ArtList ({data}) {

    const art=data.map((art)=>{
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
            {art}
        </div>
    )
}