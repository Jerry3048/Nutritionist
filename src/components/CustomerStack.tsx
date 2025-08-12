function CustomerStack() {
  const customers: string[] = [
    "https://randomuser.me/api/portraits/women/1.jpg",
    "https://randomuser.me/api/portraits/men/2.jpg",
    "https://randomuser.me/api/portraits/women/3.jpg",
  ];

  return (
    <div className="sm:flex items-center mt-4">
      <div className="flex -space-x-2 justify-center items-center ">
        {customers.map((src, index) => (
          <img
            key={index}
            src={src}
            alt="customer"
            className="w-7 h-7 rounded-full border-2 border-white object-cover"
          />
        ))}
      </div>
      <span className="sm:ml-2 text-[10px] flex gap-1">
        <p className="text-green-900 flex justify-center items-center">50+</p>
        Happy Customers
      </span>
    </div>
  );
}

export default CustomerStack;
