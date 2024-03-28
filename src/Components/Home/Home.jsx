import Banner from "../Banner/Banner";
import Books from "../Books/Books";

const Home = () => {
    return (
        <div className=" space-y-10 text-center">
            <Banner></Banner>
            <Books></Books>
        </div>
    );
};

export default Home;