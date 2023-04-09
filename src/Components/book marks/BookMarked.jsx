import React from 'react';
import "./bookmarked.css"

const BookMarked = ({ bookmarkClick }) => {

    // console.log(bookmarkClick)

    return (
        <div className="bg-gray-100 rounded-md p-5">
            <h2 className="md:text-[22px] ml-4 font-semibold">
                Bookmarked Blogs : {bookmarkClick.length}
            </h2>
            <div>
                {bookmarkClick?.length > 0 &&
                    bookmarkClick?.map((data) => (
                        <h2 className="text-[15px] font-semibold mt-3 py-5 px-8 border-solid border rounded-md shadow-lg bg-white">
                            {data}
                        </h2>
                    ))}
            </div>
        </div>
    );
};

export default BookMarked;