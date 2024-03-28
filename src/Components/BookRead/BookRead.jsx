import PropTypes from "prop-types";
import "../../index.css";
import TagDetails from "../TagDetails/TagDetails";
import { CiLocationOn } from "react-icons/ci";
import { BsPeople } from "react-icons/bs";
import { RiPagesLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const BookRead = ({ addedBook }) => {
  const {
    id,
    cover,
    title,
    author,
    rating,
    category,
    tags,
    totalPages,
    publisher,
    year,
  } = addedBook;
  return (
    <div className="grid grid-cols-1  lg:grid-cols-3 gap-10 border-2 border-[#13131326] rounded-2xl p-4">
      <div className=" lg:col-span-1 flex justify-center items-center bg-[#F3F3F3] rounded-2xl p-4 ">
        <img className=" h-56 rounded-lg " src={cover} alt="" />
      </div>
      <div className=" lg:col-span-2 flex flex-col space-y-4">
        <h3 className="font-Playfair font-bold text-3xl text-[#131313]">
          {title}
        </h3>
        <p className="font-workSans font-medium text-base text-[#131313CC]">
          By: {author}
        </p>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-10">
          <div className="font-workSans font-bold text-base text-[#131313CC] flex justify-start items-center gap-4">
            Tag <TagDetails tags={tags}></TagDetails>
          </div>
          <p className=" flex gap-4 items-center font-workSans font-normal text-base text-[#131313B3]">
            <CiLocationOn /> Year of Publishing:{" "}
            <span className="text-[#131313CC] font-semibold">{year}</span>
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-3 lg:gap-10 text-[#13131399]">
          <p className="flex gap-4 items-center font-workSans font-normal text-base ">
            <BsPeople /> Publisher: <span>{publisher}</span>
          </p>
          <p className="flex gap-4 items-center font-workSans font-normal text-base ">
            <RiPagesLine /> Number of Pages: <span>{totalPages}</span>
          </p>
        </div>
        <hr className=" text-[#13131326]" />
        <div className=" font-workSans text-base font-normal grid grid-cols-3 gap-4">
          
            <button className="btn rounded-3xl bg-[#328EFF26] text-[#328EFF]">
              Category: {category}
            </button>
          
            <button className="btn rounded-3xl bg-[#FFAC3326] text-[#FFAC33]">
              Rating: {rating}
            </button>
          
          <NavLink to={`/book/${id}`}>
            <button className="btn lg:px-10 rounded-3xl bg-[#23BE0A] text-[#FFFFFF]">
              View Details
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

BookRead.propTypes = {
  addedBook: PropTypes.object,
};
export default BookRead;
