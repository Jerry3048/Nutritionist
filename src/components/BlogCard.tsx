import React from "react";
import { FaHeart, FaEye } from "react-icons/fa";
import type { Item } from "../types";

const BlogCard: React.FC<Item> = ({
  title,
  category,
  authorName,
  authorImage,
  date,
  time,
  coverImage,
  description,
}) => {
  return (
    <div className="bg-[#F6FBE9]  overflow-hidden rounded-lg">
      <img
        src={coverImage}
        alt={title}
        className=" w-310 h-[40vh] object-cover rounded-lg"
      />

      <div className="p-4">
        <span className="text-[14px] sm:text-[16px] 2xl:text-[18px] font-urbanistmedium ">
          {category}
        </span>

        {/* Title */}
        <h2 className="font-urbanistsemibold mt-1 text-[20px] sm:text-[22px] 2xl:text-[26px]">
          {title}
        </h2>

        <p className="text-[14px] sm:text-[16px] 2xl:text-[18px] mt-1 font-urbanistmedium">
          {description}
        </p>

        {/* Author Info */}
        <div className="text-[8px]  mt-2 flex justify-between items-center">
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
      </div>
    </div>
  );
};

export default BlogCard;
