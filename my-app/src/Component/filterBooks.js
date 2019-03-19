import BookList from "./Books.json"

export default function filterBooks(searchText, maxResults){
    return (
        BookList.filter(book => {
            if(book.title.toLowerCase().includes(searchText.toLowerCase())){
                return true;
            }
            return false;
        })
        .slice(0,maxResults)
    )
}