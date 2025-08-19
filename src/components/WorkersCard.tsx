
const workers = [
  {
    id: 1,
    name: "John Doe",
    position: "Software Engineer",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "UI/UX Designer",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 3,
    name: "Michael Johnson",
    position: "Project Manager",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 4,
    name: "Emily Davis",
    position: "Data Scientist",
    image: "https://via.placeholder.com/300x200",
  },
];

function WorkersCard() {
  return (
    <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-15 md:gap-4 py-6 w-[90%] mx-auto ">
      {workers.map((worker) => (
        <div
          key={worker.id}
          className="w-full bg-[#CBEA7B] rounded-lg  shadow-lg"
        >
          {/* Worker Image */}
          <div className="relative">
            <img
              src={worker.image}
              alt={worker.name}
              className="w-full h-80 "
            />
            {/* Overlay with name & position */}
            <div className="absolute -bottom-10 bg-[#F6FBE9]  text-center py-3 w-[80%] rounded-r-2xl rounded-b-2xl">
              <h3 className="text-lg font-semibold">{worker.name}</h3>
              <p className="text-sm">{worker.position}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default WorkersCard