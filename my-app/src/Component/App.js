import React from "react"

import Header from './Header'
import SearchInput from './SearchInput'
import filterBooks from './filterBooks'
import BookResult from './bookResult'

class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            filterBooks : filterBooks("",20)
        };
    }

    handleSearchChange = event =>{
        this.setState({
            filterBooks : filterBooks(event.target.value,20)
        })
    }

    render(){
        return (
            <div>
                <Header />
                <SearchInput textChange={this.handleSearchChange}/>
                <BookResult bookData={this.state.filterBooks}/>
            </div>
        );
    }
}

export default App