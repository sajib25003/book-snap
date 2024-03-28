import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAddedBooks } from "../../utility/localStorage";
import ReadChart from "../BarChart/ReadChart";

const PagesToRead = () => {

  const books = useLoaderData();

  const [addedBooks, setAddedBooks] = useState([]);

  useEffect(() => {
    const storedBookId = getAddedBooks();
    if (books.length > 0) {
      const readBooks = books.filter((book) => storedBookId.includes(book.id));
    setAddedBooks(readBooks);
    }
  },[books]);



  return (
    <div className="">
          <ReadChart data={addedBooks}></ReadChart>
    </div>
  );
};

export default PagesToRead;
