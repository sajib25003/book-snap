import { useLoaderData } from "react-router-dom";
import ChallengeBooks from "../ChallengeBooks/ChallengeBooks";

const ReadingChallenges = () => {
    const books = useLoaderData();
    console.log(books);
    return (
        <div className=" font-workSans space-y-4">
            <div className="text-center bg-slate-200 p-8 rounded-lg">
                <h2 className=" text-3xl font-extrabold">Reading Challenges</h2>
            </div>
            <div className=" text-center">
                <p className=" text-gray-500 text-lg">A book list is provided below as reading challenges.</p>
            </div>
            <div>
                {
                    books.map(book => <ChallengeBooks key={book.id} book={book} ></ChallengeBooks>)
                }

            </div>
        </div>
    );
};

export default ReadingChallenges;