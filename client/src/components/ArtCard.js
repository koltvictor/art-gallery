import React from "react";

export default function ArtCard({art}) {
    return(
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img className="artImage" src={art.image} alt={art.title} height="300" width="300"/>
                    <h3>{art.title}</h3>
                    <h4>{art.artist}</h4>
                </div>
                <div className="flip-card-back"><br/><br/><br/>
                    <h5>medium: {art.medium}</h5>
                    <h6>Image dimensions: {art.image_height}"h x {art.image_width}"w</h6>
                    <h6>Frame dimensions: {art.frame_height}"h x {art.frame_width}"w</h6>
                </div>
            </div>
        </div>
    )
    
}