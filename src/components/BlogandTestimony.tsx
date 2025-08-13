import { useEffect, useState } from "react";
import axios from "axios";
import BlogCard from "./BlogCard";
import type { Item } from "../types";
import type { Testimony } from "../types";
import TestimonyCard from "./TestimonyCard";

interface response {
  blogs: Item[];
  testimonies: Testimony[];

}

function Blog() {
  const [blogs, setBlogs] = useState<Item[]>([]);
  const [testimonies, setTestimonies] = useState<Testimony[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get<response>("/BlogsandTestimonies");

        // Shuffle and pick 4 random blogs
        const shuffledblogs = [...response.data.blogs].sort(
          () => 0.5 - Math.random()
        );
         const selectedblogs = shuffledblogs.slice(0, 4);
        console.log("Selectedblogs:", selectedblogs);
         setBlogs(selectedblogs);


        // Shuffle and pick 4 random testimonies
         const shuffledtestimonies = [...response.data.testimonies].sort(
          () => 0.5 - Math.random()
        );
        const selectedtestimonies = shuffledtestimonies.slice(0, 4);
        console.log("Selectedtestimonies:", selectedtestimonies);
        setTestimonies(selectedtestimonies);

       
      } catch (err) {
        setError("Failed to fetch blogs");
        console.error("Error fetching blogs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="mt-30 w-[90%] mx-auto space-y-30">
        <section>
              <h1 className="flex justify-center items-center font-urbanistbold text-[28px] sm:text-[38px] 2xl:text-[48px] ">
                Our Blogs
              </h1>
              <p className="text-center text-[14px] sm:text-[16px] 2xl:text-[18px]  sm:max-w-[70%] mx-auto font-urbanistmedium">
                Our blog is a treasure trove of informative and engaging articles
                written by our team of nutritionists, dietitians, and wellness experts.
                Here's what you can expect from our blog.
              </p>
              <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:gris-cols-3 gap-4 justify-center items-center mx-auto">
                {blogs.map((item, idx) => (
                  <div key={idx} className="flex mx-auto w-full">
                    <BlogCard {...item} />
                  </div>
                ))}
              </div>
        </section>
        <section>
            <h1 className="flex justify-center items-center font-urbanistbold text-[28px] sm:text-[38px] 2xl:text-[48px] ">
              Our Testimonials
            </h1>
            <p className="text-center text-[14px] sm:text-[16px] 2xl:text-[18px]  sm:max-w-[70%] mx-auto font-urbanistmedium">
            Our satisfied clients share their success stories and experiences on their journey to better health and well-being.
            </p>
      
            <div className="p-6 grid grid-cols-1 sm:grid-cols-3 md:gris-cols-3 gap-4 justify-center items-center mx-auto">
              {testimonies.map((item, idx) => (
                <div key={idx} className="flex mx-auto w-full">
                  <TestimonyCard {...item} />
                </div>
              ))}
            </div>
        </section>
    </div>
  );
}

export default Blog;
