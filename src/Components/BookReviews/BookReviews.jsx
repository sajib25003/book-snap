import { useEffect, useState } from "react";
import ReviewList from "../ReviewList/ReviewList";

const BookReviews = () => {

        const [books, setBooks] = useState([]);
    
        useEffect(()=>{
            fetch('./books.json')
               .then (res => res.json())
               .then (data => setBooks(data));
        },[])



    return (
        <div className="grid grid-cols-1 gap-4">
            <div className="text-center bg-slate-200 p-8 mb-5 rounded-lg">
                <h2 className=" text-3xl font-extrabold">Reviews</h2>
            </div>
            {
                books.map((book,idx)=><ReviewList key={idx} book={book}></ReviewList>)
            }
        </div>
    );
};

export default BookReviews;