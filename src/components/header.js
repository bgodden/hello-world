import React from "react"
import { Link } from "gatsby"

export default function Header () {
    return (
        <header>
            <h1>
                <Link to="/">Name of our site</Link>
            </h1>
        </header>
    )
}