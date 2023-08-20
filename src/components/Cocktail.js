import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Cocktail = ({ image, name, id, info, glass }) => {
    return (
        <article className="cocktail">
            <div className="img-container">
                <img src={image} alt="A1" />
            </div>
            <div className="cocktail-footer">
                <h3>{name}</h3>
                <h4>{glass}</h4>
                <p>{info}</p>
                <Link to={`/cocktail/${id}`} className="btn btn-primary btn-detail">deatils</Link>
            </div>
        </article>
    )
}

export default Cocktail