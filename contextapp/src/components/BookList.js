import { Component, useContext } from "react";
import React from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { BookContext } from "../contexts/BookContext";


// class BookList extends Component {
//     static contextType = ThemeContext 
//     render() { 
//         const {isLightTheme, light, dark} = this.context
//         const theme = isLightTheme? light : dark

//         return (
//             <div className="book-list" style={{background: theme.bg, color: theme.syntax}}>
//                 <ul>
//                     <li style={{background: theme.ui}}>The Way of Kings</li>
//                     <li style={{background: theme.ui}}>The Name of the Wind</li>
//                     <li style={{background: theme.ui}}>The Final Empire</li>
//                 </ul>
//             </div>
//         );
//     }
// }

const BookList = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext)
    const { books } = useContext(BookContext)
    const theme = isLightTheme? light : dark 
    return (
        <div className="book-list" style={{background: theme.bg, color: theme.syntax}}>
                <ul>
                    {books.map((book)=>{
                        return <li style={{background: theme.ui}} key={book.id}>{book.title}</li>
                    })}
                    {/* <li style={{background: theme.ui}}>The Way of Kings</li>
                    <li style={{background: theme.ui}}>The Name of the Wind</li>
                    <li style={{background: theme.ui}}>The Final Empire</li> */}
                </ul>
            </div>
     );
}
 
export default BookList;