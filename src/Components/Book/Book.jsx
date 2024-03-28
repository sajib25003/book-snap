import PropTypes from "prop-types";
import { FaRegStar } from "react-icons/fa6";
import Tag from "../Tag/Tag";
import { NavLink } from "react-router-dom";

const Book = ({ book }) => {
  const { id, cover, title, author, rating, category, tags } = book;

  return (
    <NavLink to ={`/book/${id}`}>
          <div className="border-2 rounded-2xl p-6 border-[#13131326] flex flex-col justify-center space-y-4">
      <div className="w-full flex justify-center bg-[#F3F3F3] rounded-2xl p-4">
        <img className=" rounded-lg w-1/2 h-[280px] " src={cover} alt="" />
      </div>

      <Tag tags={tags}></Tag>

      <h3 className="font-Playfair font-bold text-2xl text-[#131313]">
        {title}
      </h3>
      <p className="font-workSans font-medium text-base text-[#131313CC]">
        By: {author}
      </p>
      <hr className="text-[#13131326] border-dashed" />
      <div className="flex justify-between font-wordSans text-base font-medium text-[#131313CC]">
        <p>{category}</p>
        <p className="flex justify-center gap-4 items-center">
          {rating} <FaRegStar />
        </p>
      </div>
    </div>

    </NavLink>
  );
};

Book.propTypes = {
  book: PropTypes.object,
};

export default Book;
