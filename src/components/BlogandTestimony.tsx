import { useEffect, useState } from "react";
import axios from "axios";
import BlogCard from "../components/BlogCard";
import type { Item, Testimony } from "../types";
import TestimonyCard from "../components/TestimonyCard";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface Response {
  blogs: Item[];
  testimonies: Testimony[];
}

function Blog() {
  const [blogs, setBlogs] = useState<Item[]>([]);
  const [testimonyBatches, setTestimonyBatches] = useState<Testimony[][]>([]);
  const [testimonyBatchesMobile, setTestimonyBatchesMobile] = useState<
    Testimony[][]
  >([]);
  const [activeBatch, setActiveBatch] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Utility to split array into chunks
  const chunkArray = (arr: Testimony[], size: number) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  };

  const handlePrev = () => {
    setActiveBatch((prev) =>
      prev === 0 ? testimonyBatches.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveBatch((prev) =>
      prev === testimonyBatches.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await axios.get<Response>("/BlogsandTestimonies");

        // Random 4 blogs
        const shuffledBlogs = [...response.data.blogs].sort(
          () => 0.5 - Math.random()
        );
        setBlogs(shuffledBlogs.slice(0, 4));

        // Random testimonies then chunk into batches of 3
        const shuffledTestimonies = [...response.data.testimonies].sort(
          () => 0.5 - Math.random()
        );
        const batches = chunkArray(shuffledTestimonies, 3);
        setTestimonyBatches(batches);

        const mobilebatches = chunkArray(shuffledTestimonies, 1);
        setTestimonyBatchesMobile(mobilebatches);
        setActiveBatch(0);
      } catch (err) {
        setError("Failed to fetch blogs and testimonies");
        console.error("Error fetching:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="mt-20  mx-auto space-y-20">
      {/* BLOGS SECTION */}
      <section>
        <h1 className="flex justify-center font-urbanistbold text-[28px] sm:text-[38px]">
          Our Blogs
        </h1>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:gris-cols-3 gap-4">
          {blogs.map((item, idx) => (
            <div key={idx} className="flex mx-auto w-full">
              <BlogCard {...item} />
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIES SECTION */}
      <section>
        <h1 className="flex justify-center font-urbanistbold text-[28px] sm:text-[38px]">
          Our Testimonials
        </h1>

        {/* Testimonies grid */}
        <div className="p-6 sm:grid sm:grid-cols-3 gap-4 hidden">
          {testimonyBatches[activeBatch]?.map((item, idx) => (
            <div key={idx} className="flex mx-auto w-full">
              <TestimonyCard {...item} />
            </div>
          ))}
        </div>

        <div className="p-6 grid grid-cols-1 sm:hidden">
          {testimonyBatchesMobile[activeBatch]?.map((item, idx) => (
            <div key={idx} className="flex mx-auto w-full">
              <TestimonyCard {...item} />
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-center space-x-4 items-center text-gray-500">
          <button
            onClick={handlePrev}
            className=" hover:bg-gray-300 transition"
          >
            <FiChevronLeft size={24} />
          </button>

          {/* Dot Navigation */}
          <div className="flex justify-center space-x-2">
            {testimonyBatches.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveBatch(index)}
                className={`w-1 h-1 rounded-full transition-all duration-300 ${
                  activeBatch === index
                    ? "bg-[#356554] scale-125"
                    : "bg-[#c2e48f]"
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="  hover:bg-gray-300 transition"
          >
            <FiChevronRight size={24} />
          </button>
        </div>
      </section>
    </div>
  );
}

export default Blog;
