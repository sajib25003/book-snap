import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getAddedBooks } from "../../utility/localStorage";
import "../../index.css";
import { FaAngleDown } from "react-icons/fa";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import BookRead from "../BookRead/BookRead";
import { getWishedBooks } from "../../utility/localStorageWishlist";

const ListedBooks = () => {
  const books = useLoaderData();

//   const [addedBooks, setAddedBooks] = useState([]);
  const [wishedBooks, setWishedBooks] = useState([]);
  const [sortedBooks, setSortedBooks] = useState([]);
  const [sortBy, setSortBy] = useState(null);

  useEffect(() => {
    const storedBookId = getAddedBooks();
    if (books.length > 0) {
      const readBooks = books.filter((book) => storedBookId.includes(book.id));
      //   console.log(readBooks);
    //   setAddedBooks(readBooks);
      setSortedBooks(readBooks);
    }
  }, [books]);

  useEffect(() => {
    const wishedBookId = getWishedBooks();
    if (books.length > 0) {
      const wishedBookList = books.filter((book) =>
        wishedBookId.includes(book.id)
      );
      setWishedBooks(wishedBookList);
    }
  }, [books]);

  const sortBooks = (property) => {
    const sorted = [...sortedBooks].sort((a, b) => b[property] - a[property]);
    setSortedBooks(sorted);
    setWishedBooks(sorted)
  };

  const handleSortBy = (property) => {
    setSortBy(property);
    sortBooks(property);
  };

  console.log(sortBy);

  return (
    <div>
      {/* Heading */}
      <div className="bg-[#1313130D] rounded-2xl py-8 text-center mb-8">
        <h2 className=" font-workSans text-2xl font-bold text-[#131313]">
          Books
        </h2>
      </div>
      {/* sort by button */}
      <div className="flex justify-center">
        <div className="dropdown ">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 flex items-center gap-3 bg-[#23BE0A] text-white"
          >
            Sort By <FaAngleDown />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li onClick={() => handleSortBy("rating")}>
              <a>Rating</a>
            </li>
            <li onClick={() => handleSortBy("totalPages")}>
              <a>Number of Pages</a>
            </li>
            <li onClick={() => handleSortBy("year")}>
              <a>Published Year</a>
            </li>
          </ul>
        </div>
      </div>
      {/* tabs */}
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-1 gap-5">
            {sortedBooks.map((addedBook, idx) => (
              <BookRead key={idx} addedBook={addedBook}></BookRead>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 gap-5">
            {wishedBooks.map((addedBook, idx) => (
              <BookRead key={idx} addedBook={addedBook}></BookRead>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
