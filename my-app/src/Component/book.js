import React from "react"
import PropTypes from "prop-types"

import "./book.css"

import Img from "./images/things-fall-apart.jpg"


class book extends React.Component{
    render(){
        return(
            <div className="component-book-result copy-to-clipboard">
                <div className="singleBook">
                    <a href={this.props.link}>
                        <div className="link-content">
                            <img src={Img} alt=""/>
                            <div className="properties">
                                <span className="title">Title : {this.props.title}</span>
                                <br/>
                                <span className="country">Country : {this.props.country}</span>
                                <br/>
                                <span className="author">Author : {this.props.author}</span>
                                <br/>
                                <span className="pages">Pages : {this.props.pages}</span>
                                <br/>
                                <span className="published">Published : {this.props.year}</span>
                                <br />
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        )
    }
}

book.propTypes = {
    title : PropTypes.string,
    country : PropTypes.string,
    pages : PropTypes.number
}

export default book