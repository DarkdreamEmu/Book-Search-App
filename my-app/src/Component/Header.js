import React from "react"
import "./Header.css"


class Header extends React.Component{
    render(){
        return (
            <header className="component-header">
                <h1><span className="sp1">BOOKS</span> <span className="sp2">SEARCH</span></h1>
            </header>
        )
    }
}

export default Header