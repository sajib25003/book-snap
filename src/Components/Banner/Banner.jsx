import { NavLink } from "react-router-dom";

const Banner = () => {
    return (
        <div className=" bg-[#1313130D] rounded-3xl flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:h-[600px] py-6 lg:py-16 px-10 lg:px-32 gap-5 lg:gap-16 ">
            <div className=" text-center space-y-4 lg:space-y-10">
                <h2 className=" lg:pr-20 font-Playfair text-2xl lg:text-5xl font-bold">Explore, Engage, Enlighten.</h2>
                <h4 className=" lg:pr-20 font-Playfair text-2xl font-bold">Your Literary Journey Begins Here!</h4>
                <NavLink to="/listedbooks"><button className="btn mt-10 bg-[#23BE0A] rounded-lg font-workSans text-white px-10">View The List</button></NavLink>
            </div>
            <img className=" w-[320px] lg:h-full rounded-2xl " src="cover.jpg" alt="" />
        </div>
    );
};

export default Banner;