import type { Testimony } from "../types";

function TestimonyCard({ id, name, image, testimony }:Testimony){
  return (
    <div key={id} className="bg-[#F6FBE9] p-4">
      <h1 className="text-[50px] text-[#356554]">''</h1>
      <p className="text-[14px] sm:text-[16px] 2xl:text-[18px] font-urbanistmedium">
        {testimony}
      </p>
      <div className="flex mt-5 space-x-2 items-center">
        <img
          src={image}
          alt={name}
          className="2xl:w-10 2xl:h-10 w-8 h-8  rounded-sm object-cover"
        />
        <h3 className=" items-center font-urbanistmedium text-[12px]  2xl:text-[18px]">
          {name}
        </h3>
      </div>
    </div>
  );
  
};

export default TestimonyCard;
