import React from "react"
import './styles.css'

const Header = (props) => {
    return(
        <header
            style={{
                background: '#1d1d1d'
            }}
        >
            <div className="divHeader">
                <h1>{props.title}</h1>
            </div>
        </header>
    )
}

export default Header;