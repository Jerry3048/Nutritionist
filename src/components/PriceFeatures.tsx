
const featureList = [
  {
    name: "Personalized nutrition plan",
    plans: { Basic: true, Premium: true, Ultimate: true },
  },
  {
    name: "Mobile app access",
    plans: { Basic: true, Premium: true, Ultimate: true },
  },
  {
    name: "Email support",
    plans: { Basic: true, Premium: true, Ultimate: true },
  },
  {
    name: "Video consultations",
    plans: { Basic: false, Premium: true, Ultimate: true },
  },
  {
    name: "Priority support",
    plans: { Basic: false, Premium: true, Ultimate: true },
  },
  {
    name: "24/7 chat support",
    plans: { Basic: false, Premium: false, Ultimate: true },
  },
  {
    name: "Exclusive workshops",
    plans: { Basic: false, Premium: false, Ultimate: true },
  },
];
function PriceFeatures() {
  return (
    <div className="overflow-x-auto mt-12 bg-[#F6FBE9] p-9 w-[90%] mx-auto rounded-lg">
  <table className="w-full min-w-[600px]">
    <thead>
      <tr className="text-2xl font-urbanistmedium text-white">
        <th className="text-left p-4 border-r-2 bg-[#356554] border-[#eafbc9] rounded-lg snap-start">Features</th>
        <th className="text-center p-4 border-r-2 bg-[#356554] border-[#eafbc9] rounded-lg snap-start">Basic</th>
        <th className="text-center p-4 border-r-2 bg-[#356554] border-[#eafbc9] rounded-lg snap-start">Premium</th>
        <th className="text-center p-4 bg-[#356554] border-[#eafbc9] rounded-lg snap-start">Ultimate</th>
      </tr>
    </thead>
    <tbody>
      {featureList.map((feature, index) => ( 
        <tr key={index} className="border-b-2 border-[#eafbc9]">
          <td className="p-4 text-gray-700 border-r-2 border-[#eafbc9]">{feature.name}</td>
          <td className="text-center p-8 border-r-2 border-[#eafbc9]">
            {feature.plans.Basic ? "✅" : "❌"}
          </td>
          <td className="text-center p-8 border-r-2 border-[#eafbc9]">
            {feature.plans.Premium ? "✅" : "❌"}
          </td>
          <td className="text-center p-8">
            {feature.plans.Ultimate ? "✅" : "❌"}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
  )
}

export default PriceFeatures