import {Link} from 'react-router-dom';


export default function () {
    return(
        <>
            <div className="header">
                <h1>Ambient Art Gallery</h1>
            </div>
            <div className="navBar"><br/>
                <Link to="/">Home</Link>
                <Link to="/arts">Gallery</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </>
    )
}