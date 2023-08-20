import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Error = () => {
    return (
        <section class="error-page section">
            <div class="error-container">
                <h1>oops! it's a dead end.</h1>
                <Link class="btn btn-primary" to="/">back home</Link>
            </div>
        </section>
    )
}

export default Error