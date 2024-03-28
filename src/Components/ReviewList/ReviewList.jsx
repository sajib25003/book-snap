import PropTypes from "prop-types";

const ReviewList = ({book}) => {

    const { cover, title, author, rating, review } = book;
    
    return (
        <div className="grid grid-cols-2 lg:grid-cols-3 border-2 p-4 gap-10 rounded-lg">
            <div className=" flex justify-center items-center h-[200px] p-8 col-span-1 bg-slate-200 rounded-lg">
            <img className=" h-full rounded-lg" src={cover} alt="" />
            </div>
            <div className=" col-span-1 lg:col-span-2 flex flex-col justify-center font-workSans">
                <h3 className=" text-2xl">{title}</h3>
                <p className=" text-gray-500 font-normal"><strong className="text-black font-bold">Author: </strong>{author}</p>
                <p className=" text-gray-500 font-normal"><strong className="text-black font-bold">Review: </strong>{review}</p>
                <p className=" text-gray-500 font-normal"><strong className="text-black font-bold">Rating: </strong>{rating}</p>
            </div>
        </div>
    );
};

ReviewList.propTypes = {
    book: PropTypes.object,
  };
  
export default ReviewList;