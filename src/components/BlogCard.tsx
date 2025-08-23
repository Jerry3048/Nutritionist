import { FaHeart, FaEye } from "react-icons/fa";
import type { Item } from "../types";

function BlogCard({title,category,authorName,authorImage,date,time,coverImage,description,showTitle = false,showWriter=true}: Item) {
  return (
    <div className= {`bg-[#F6FBE9]  overflow-hidden
    ${showTitle ? "border-1  border-[#eafbc9]" : ""}`}>
       <div className={`${showTitle ? "border-b-2  border-[#eafbc9]" : ""}`}>
          <div className="p-4 pb-0">
              {showTitle &&(<span className="text-[14px] sm:text-[16px] 2xl:text-[18px] font-urbanistmedium underline underline-offset-10 decoration-[#CBEA7B] decoration-2">
                {category}
              </span>)}
            <img
              src={coverImage}
              alt={title}
              className={`object-cover h-[200px] 
                ${showTitle ? "rounded-t-lg flex justify-end items-end mx-16 md:mx-18 xl:mx-25 w-[80%] mt-6" : "rounded-lg w-full"}`}
            />
          </div>
       </div>

      <div className="p-4">
        <div className="sm:flex justify-between item-center">
          <div>
            {showWriter &&(<span className="text-[14px] sm:text-[16px] 2xl:text-[18px] font-urbanistsemibold ">
              {category}
            </span>)}
    
            {/* Title */}
            <h2 className="font-urbanistsemibold mt-1 text-[20px] sm:text-[22px] 2xl:text-[26px]">
              {title}
            </h2>
    
            <p className="text-[14px] sm:text-[16px] 2xl:text-[18px] mt-1 font-urbanistmedium">
              {description}
            </p>
          </div>

          {showTitle && (<div className="flex justify-center items-center">
              <p className="bg-[#CBEA7B] p-2 rounded-lg flex justify-center items-center text-black font-urbanistsemibold h-fit w-full sm:w-[100px]">
              Read More
            </p>
          </div>
        )}
        </div>

        {/* Author Info */}
       {showWriter && ( <div className="text-[8px]  mt-2 flex justify-between items-center bg-[#fefffa] p-2">
          <div className="flex items-center mt-3 space-x-2">
            <img
              src={authorImage}
              alt={authorName}
              className="2xl:w-10 2xl:h-10 w-10 h-10  rounded-sm object-cover"
            />
            <div className="flex flex-col justify-center">
              <span className=" text-[14px] sm:text-[16px] 2xl:text-[18px] font-urbanistsemibold ">
                {authorName}
              </span>

              {/* Date & Time */}
              <div className="flex items-center  justify-center font-urbanistmedium text-[12px]  2xl:text-[18px] ">
                <span className="mx-1">{date}</span>
                <span>-</span>
                <span className="mx-1 ">{time}</span>
              </div>
            </div>
          </div>

          {/* Icons for Likes & Views */}
          <div className="flex items-center space-x-4 text-[14px]  2xl:text-[18px]">
            <span className="flex items-center text-gray-600">
              <FaHeart className="text-red-500 mr-1" />
            </span>
            <span className="flex items-center text-gray-600">
              <FaEye className="mr-1" />
            </span>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default BlogCard;
