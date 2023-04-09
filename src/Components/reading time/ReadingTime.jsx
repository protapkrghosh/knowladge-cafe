import React from "react";
import "./redingTime.css";

const ReadingTime = ({ readingTime }) => {
    return (
        <div>
            <div className="border border-blue-500 p-5 bg-violet-100 rounded-md">
                <h2 className="text-[15px] md:text-2xl text-center font-bold text-blue-600">
                    Spent time on read : {readingTime} min
                </h2>
            </div>
        </div>
    );
};

export default ReadingTime;
