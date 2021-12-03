import {Link} from 'react-router-dom';


export default function () {
    return(
        <div>
            <div className="header">
                <h1>Ambient Art Projects</h1>
            </div>
            <div className="navBar"><br/>
                <Link to="/" className="homeNav">Home</Link>
                <Link to="/arts" className="galleryNav">Art Gallery</Link>
                <Link to="/about" className="aboutNav">About</Link>
                <Link to="/contact" className="contactNav">Request Appointment</Link>
            </div>
        </div>
    )
}