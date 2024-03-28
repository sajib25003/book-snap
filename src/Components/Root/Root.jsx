import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Root = () => {
    return (
        <div className=" mx-5 lg:mx-24 my-3  lg:my-8 lg:space-y-12">
            <Header></Header>
            
            <Outlet></Outlet>
            
        </div>
    );
};

export default Root;