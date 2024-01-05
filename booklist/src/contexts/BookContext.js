import React, {createContext, useState, useReducer, useEffect} from 'react';
import uuid from "react-uuid"
import { bookReducer } from '../reducers/bookReducer';

export const BookContext = createContext()

const BookContextProvider = (props) => {
    const [books, dispatch] = useReducer(bookReducer, [], ()=>{
        const localData = localStorage.getItem("books")
        console.log(localData)
        return localData ? JSON.parse(localData) : []
    })
    // const [books, dispatch] = useReducer(bookReducer, [
    //     { title: "The Name of The Wind", author:"Patrick Rothfuss", id:1 },
    //     { title: "The Final Empire",author: "Brandon Sanderson", id:2 },
    // ])
    useEffect(()=>{
        localStorage.setItem("books", JSON.stringify(books), [books])
    })
    // const [ books, setBooks ] = useState([
    //     { title: "The Name of The Wind", author:"Patrick Rothfuss", id:1 },
    //     { title: "The Final Empire",author: "Brandon Sanderson", id:2 },
    // ])
    // const addBook = (title, author)=>{
    //     setBooks([...books, {title, author, id:uuid()}])
    // }
    // const removeBook = (id)=>{
    //     setBooks(books.filter(book=>book.id!==id))
    // }
    return ( 
        <BookContext.Provider value={{books, dispatch}}>
            {props.children}
        </BookContext.Provider>
        // <BookContext.Provider value={{books, addBook, removeBook}}>
        //     {props.children}
        // </BookContext.Provider>
     );
}
 
export default BookContextProvider;