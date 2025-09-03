import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import logo from "/asset/images/Icon Container.png";
import BlogCard from "../components/BlogCard";
import type { Item } from "../types";

interface Response {
  blogs: Item[];
}

function BlogPage() {
  const [blogs, setBlogs] = useState<Item[]>([]);
  const [allBlogs, setAllBlogs] = useState<Item[]>([]); // keep original data
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const navItems = [
    { name: "All" },
    { name: "Weight Loss Tips" },
    { name: "Healthy Eating" },
    { name: "Fitness and Exercise" },
    { name: "Mindset and Motivation" },
    { name: "Recepes and Meal Planning" },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await axios.get<Response>("/BlogsandTestimonies");
        setBlogs(response.data.blogs.slice(0, 12));
        setAllBlogs(response.data.blogs); // store everything
      } catch (err) {
        setError("Failed to fetch blogs and testimonies");
        console.error("Error fetching:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleFilter = (category: string) => {
    setActiveCategory(category);
    if (category === "All") {
      setBlogs(allBlogs.slice(0, 12)); // reset to all
    } else {
      setBlogs(allBlogs.filter((blog) => blog.category === category));
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <div id="home">
        <Header />
      </div>

      <div className="relative w-[90%] bg-[#F6FBE9] flex items-center justify-center mx-auto rounded-t-lg mt-40 border-1 border-[#F6FBE9]">

            <div
                className="absolute inset-0"
                style={{
                backgroundImage: `
                    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='13' height='13'%3E%3Ctext x='50%25' y='50%25' dy='.35em' text-anchor='middle' font-size='9' fill='rgba(0,190,0,0.85)'%3E+%3C/text%3E%3C/svg%3E")
                `,
                WebkitMaskImage:
                    "linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,0))",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskSize: "cover",
                maskImage:
                    "linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,0))",
                maskRepeat: "no-repeat",
                maskSize: "cover",
                }}
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/70 to-[#F6FBE9]"></div>

            {/* Content layer (text + image) */}
            <div className="relative z-10 text-center  w-[80%] mx-auto mb-10">
                <img
                src={logo}
                alt="logo"
                className="mx-auto m-10 w-20 h-20 object-contain"
                />
                <h1 className="text-3xl font-urbanistbold text-green-900">Our Blogs</h1>
                <p className="mt-2">Welcome to the Blog section of Nutritionist, your trusted source for insightful articles, tips, and expert advice on nutrition and wellness. Here, we strive to provide you with engaging and informative content that will inspire and empower you to make informed decisions about your health. Explore our blog to discover a wealth of resources that cover a wide range of topics related to nutrition, fitness, and overall well-being.</p> 
            </div>                   
        </div>

      {/* Category Nav (Scrollable) */}
      <div className="bg-[#1A3129] text-white w-[90%] mx-auto min-h-[70px] flex items-center rounded-b-lg mb-5 overflow-x-auto scrollbar-hide">
        <div className="flex space-x-4 px-4 py-2">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleFilter(item.name)}
              className={`whitespace-nowrap px-4 py-2 rounded-lg ${
                activeCategory === item.name
                  ? "bg-[#25453a]  font-semibold"
                  : "hover:bg-[#356554]"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>

      {/* Blogs Section */}
      <section>
        {/* <h1 className="flex justify-center font-urbanistbold text-[28px] sm:text-[38px]">
          {activeCategory === "All" ? "Our Blogs" : activeCategory}
        </h1> */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {blogs.map((item, idx) => (
            <div key={idx} className="flex mx-auto w-full">
              <BlogCard {...item} showTitle={true} showWriter={false} />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default BlogPage;