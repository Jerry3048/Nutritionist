

const stories =[
  {
    "id": 1,
    "topic": "Inspiring Transformations Story",
    "image": "https://randomuser.me/api/portraits/women/11.jpg",
    "content": "Nutritionist continues to empower individuals to transform their lives through personalized nutrition coaching. With an expanding client base and a growing team of experts, we remain committed to our goal of helping people lose weight, improve their health, and lead happier, more fulfilling lives. Our journey of inspiring transformations continues, one client at a time.",
    "date":"July 1,2025"
  },
  {
    "id": 2,
    "topic": "Recognition and Accolades Story",
    "image": "https://randomuser.me/api/portraits/men/12.jpg",
    "content": "Nutritionist received industry recognition for its excellence in personalized nutrition coaching. Our innovative approach and dedication to client success earned us accolades and solidified our position as a leading provider in the field.",
     "date":"March 10,2023"
  },
  {
    "id": 3,
    "topic": "Continued Growth Story",
    "image": "https://randomuser.me/api/portraits/women/13.jpg",
    "content": "Nutritionist celebrated serving over 5,000 clients, a testament to our commitment to helping individuals achieve their health and weight loss goals. This milestone highlighted the positive impact we have made on the lives of thousands of people.",
     "date":"November 2,2021  "
  },
  {
    "id": 4,
    "topic": "Collaborating for Success Story",
    "image": "https://randomuser.me/api/portraits/men/14.jpg",
    "content": "Nutritionist established partnerships with renowned health professionals, including nutritionists, dietitians, and wellness experts. These collaborations allowed us to incorporate diverse perspectives and expertise, ensuring the highest level of guidance for our clients.",
     "date":"July 15,2019"
  },
  {
    "id": 5,
    "topic": "Enhanced Support Story",
    "image": "https://randomuser.me/api/portraits/women/15.jpg",
    "content": "In response to the growing demand for personalized nutrition coaching, Nutritionist expanded its team of qualified nutritionists and dietitians. This milestone enabled us to provide even more individualized care and support to our clients.",
     "date":"April 1,2018"
  },
  {
    "id": 6,
    "topic": "Innovating for Clients Story",
    "image": "https://randomuser.me/api/portraits/men/16.jpg",
    "content": "Nutritionist introduced a mobile app, revolutionizing the way clients engage with their personalized nutrition plans. The app allowed for easy tracking of progress, access to resources, and seamless communication with their dedicated nutrition coaches.",
     "date":"January 20, 2017"
  },
  {
    "id": 7,
    "topic": "Celebrating Success Stories",
    "image": "https://randomuser.me/api/portraits/women/17.jpg",
    "content": "Nutritionist celebrated its 500th client success story. These stories showcased the positive impact of personalized nutrition coaching on individuals' lives, further motivating our team to continue providing exceptional services.",
     "date":"September 5,2015"
  },
  {
    "id": 8,
    "topic": "Expanding Reach Story",
    "image": "https://randomuser.me/api/portraits/men/18.jpg",
    "content": "Nutritionist expanded its services by launching an online platform, allowing individuals from all over the world to access personalized nutrition plans and expert guidance. This milestone brought convenience and accessibility to our growing client base.",
     "date":"June 10, 2014"
  },
  {
    "id": 9,
    "topic": "Research and Expertise Story",
    "image": "https://randomuser.me/api/portraits/women/19.jpg",
    "content": "After extensive research and collaborating with nutrition experts, Sarah Mitchell and her team developed a comprehensive program rooted in scientific knowledge and evidence-based strategies. This milestone marked the establishment of Nutritionist as a trusted source of personalized nutrition coaching.",
     "date":"March 15,2012"
  },
  {
    "id": 10,
    "topic": "The Inception Story",
    "image": "https://randomuser.me/api/portraits/men/20.jpg",
    "content": "On this day, Nutritionist was born with the vision of helping individuals achieve their weight loss and health goals through personalized nutrition coaching. The founder, Sarah Mitchell, recognized the need for a sustainable and effective approach to healthy living, and thus began the journey of Nutritionist.",
     "date":"January 1,2010"
  }
]

function OurStory() {
  return (
            <div className="bg-[#F6FBE9] p-4 rounded-lg w-[90%] mx-auto">
          <h1 className="flex justify-center font-urbanistbold text-[28px] sm:text-[38px]">
            Our Story
          </h1>
          <p className="text-center text-[14px] sm:text-[16px] 2xl:text-[18px] font-urbanistmedium">
            Welcome to Nutritionist, your partner in achieving optimal health
            through personalized nutrition coaching. Our certified nutritionists
            are here to guide you on your weight loss journey.
          </p>

          <div className=" mt-20">
            <div className=" ">
                {stories.map((story, index) => (
                <div
                    key={story.id}
                    className={`flex flex-col md:flex-row items-center md:items-start text-left mb-7 md:mb-0 justify-center ${
                    index % 2 === 1 ? "md:flex-row-reverse  md:text-right" : ""}
                     ${index > 3 ? "hidden md:flex" : ""} 
                    `}
                >
                    {/* Image */}
                    <div className="flex-shrink-0 w-70 h-50 4xl:w-[759px] lg:w-[49.59%] sm:w-[49.35%] md:h-70 overflow-hidden shadow-lg border-b-8 md:border-b-0 border-[#CBEA7B]">
                    <img
                        src={story.image}
                        alt={story.topic}
                        className="w-full h-full"
                    />
                    </div>
                    <div className="border-5 border-[#CBEA7B]  h-50  md:h-70 hidden md:block"></div>

                    {/* Text Content */}
                    <div className="flex-1 space-y-3 justify-center items-center ml-10 mr-10 mt-5 ">
                    <h3 className=" text-[18px] lg:text-[30px] font-semibold underline underline-offset-5 decoration-[#CBEA7B] decoration-2 w-full">{story.topic}</h3>
                    <p className="text-gray-600 text-[13px] xl:text-[18px] ">{story.content}</p>
                    <p className="text-sm text-gray-400 italic">{story.date}</p>
                    </div>
                </div>
                ))}
            </div>
          </div>
        </div>
  )
}

export default OurStory