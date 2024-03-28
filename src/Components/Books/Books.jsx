import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {

    const [books, setBooks] = useState([]);

    useEffect(()=>{
        fetch('./books.json')
           .then (res => res.json())
           .then (data => setBooks(data))
    },[])

    return (
        <div>
            <h3 className="font-Playfair text-4xl font-bold text-[#131313]">Books</h3>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">
                {books.map(book=><Book key={book.id} book={book}></Book>)}
            </div>
        </div>
    );
};

export default Books;