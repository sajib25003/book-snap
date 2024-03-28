import { useLoaderData, useParams, NavLink } from "react-router-dom";
import "../../index.css";
import TagDetails from "../TagDetails/TagDetails";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAddedBooks, saveBook } from "../../utility/localStorage";
import { getWishedBooks,saveWishedBook } from "../../utility/localStorageWishlist";

const BookDetails = () => {
  const books = useLoaderData();
  const { id } = useParams();
  const book = books.find((book) => book.id === parseInt(id));

  const {
    cover,
    title,
    author,
    rating,
    category,
    review,
    tags,
    totalPages,
    publisher,
    year,
  } = book;

  const idInt = parseInt(id);

  const handleAddToRead = () => {
    const exist = getAddedBooks().includes(idInt);
    console.log(exist);
    if (exist === false) {
      toast.success("Book has been successfully added to Read List");
    } else {
      toast.error("Book is already in Read List");
    }
    saveBook(idInt);
  };
  const handleAddToWish = () => {
    const isExistInRead = getAddedBooks().includes(idInt);
    const isExistInWish = getWishedBooks(idInt).includes(idInt);
    if (isExistInRead) {
      toast.error("Book is already in Read List");
    }
    else if (isExistInWish) {
      toast.error("Book is already in wish list");
    }
    else {
      toast.success("Book has been successfully added to wish list");
      saveWishedBook(idInt);

    }
  }; 

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10">
      <div className=" lg:h-1/2 flex justify-center items-center bg-[#F3F3F3] rounded-2xl p-4">
        <img className=" h-[300px] lg:h-4/5 rounded-lg " src={cover} alt="" />
      </div>
      <div className="flex flex-col space-y-4">
        <h3 className="font-Playfair font-bold text-3xl text-[#131313]">
          {title}
        </h3>
        <p className="font-workSans font-medium text-base text-[#131313CC]">
          By: {author}
        </p>
        <hr className="text-[#13131326] " />
        <p className="font-workSans font-medium text-base text-[#131313CC]">
          {category}
        </p>
        <hr className="text-[#13131326] " />
        <p className="font-workSans font-bold text-base text-[#131313CC]">
          Review: <span className="text-[#131313B3] font-normal">{review}</span>
        </p>
        <div className="font-workSans font-bold text-base text-[#131313CC] flex justify-start items-center gap-8">
          Tag <TagDetails tags={tags}></TagDetails>
        </div>
        <hr className="text-[#13131326] " />
        <p className="font-workSans font-normal text-base text-[#131313B3]">
          Number of Pages:{" "}
          <span className="text-[#131313CC] font-semibold">{totalPages}</span>
        </p>
        <p className="font-workSans font-normal text-base text-[#131313B3]">
          Publisher:{" "}
          <span className="text-[#131313CC] font-semibold">{publisher}</span>
        </p>
        <p className="font-workSans font-normal text-base text-[#131313B3]">
          Year of Publishing:{" "}
          <span className="text-[#131313CC] font-semibold">{year}</span>
        </p>
        <p className="font-workSans font-normal text-base text-[#131313B3]">
          Rating:{" "}
          <span className="text-[#131313CC] font-semibold">{rating}</span>
        </p>

        <div className=" flex gap-4">
          <NavLink>
            <button
              onClick={handleAddToRead}
              className="btn btn-outline  border-[#1313134D] text-[#131313] px-10"
            >
              Read
            </button>
          </NavLink>
          <NavLink>
            <button
              onClick={handleAddToWish}
              className="btn bg-[#50B1C9]  border-[#50B1C9] text-white px-8"
            >
              Wishlist
            </button>
          </NavLink>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default BookDetails;
