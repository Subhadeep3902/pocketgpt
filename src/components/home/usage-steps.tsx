import Link from "next/link";
import { FiMessageSquare, FiArrowRight } from "react-icons/fi";

const steps = [
  {
    icon: (
      <FiMessageSquare className="w-10 h-10 inline-block mr-2 text-blue-500" />
    ),
    description: "Select a chatbot",
  },
  {
    icon: (
      <FiArrowRight className="w-10 h-10 inline-block mr-2 text-blue-500" />
    ),
    description: "Start chatting",
  },
];

const UsageSteps = () => {
  return (
    <div className="bg-slate-900">
      <div className="max-w-6xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-slate-100 mb-12">
          Get Started with Our Chatbots in Two Simple Steps
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((i, k) => {
            return (
              <Link href="#chatbots">
                <div
                  key={k}
                  className="card w-full bg-gray-800 shadow-xl hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
                >
                  <div className="grid -mt-4 place-items-center">
                    <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex font-bold justify-center items-center">
                      <p>{k + 1}</p>
                    </div>
                  </div>
                  <div className="card-body items-center text-center">
                    <p className="text-blue-500">{i.icon}</p>
                    <p className="mt-2 text-slate-100">{i.description}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UsageSteps;
