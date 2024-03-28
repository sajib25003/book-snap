import { NavLink } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className=" flex flex-col justify-center items-center space-y-6 bg-slate-200 content-center h-[400px] w-[1000px] mx-auto my-28 rounded-2xl">
            <h2 className=" text-3xl ">Ooops!!!</h2>
            <p>Page not Found...</p>

            <NavLink to="/"><button className="btn bg-blue-500 text-white border-blue-500 ">Go to Home</button></NavLink>
        </div>
    );
};

export default ErrorPage;