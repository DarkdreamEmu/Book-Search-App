import React from "react";
import PropTypes from "prop-types";
import Clipboard from "clipboard";

import Book from "./book"

class bookResult extends React.Component{

    componenDidMount(){
        this.Clipboard = new Clipboard(".copy-to-clipboard");
    }

    componentWillUnmount(){
        this.Clipboard.destroy();
    }

    render(){
        return(
            <div className="componet-book-result">
                {this.props.bookData.map(book =>(
                    <Book 
                        key={book.title}
                        imgelink={book.imageLink}
                        country={book.country}
                        title={book.title}
                        pages={book.pages}
                        link={book.link}
                        year={book.year}
                        author={book.author}
                    />
                ))}
            </div>
        )
    }
}

bookResult.propTypes= {
    bookData: PropTypes.array
};

export default bookResult