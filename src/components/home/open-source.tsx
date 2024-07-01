import Link from "next/link";
import { FiGithub } from "react-icons/fi";

const OpenSource = () => {
  return (
    <div className="bg-gray-800 py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-slate-100 mb-6">Open Source Project</h2>
        <p className="text-xl text-slate-100 mb-8 md:px-32">
          Pocket GPT is an open-source project. We welcome contributions from the community to enhance our AI-powered chatbots. Visit our GitHub repository to get involved!
        </p>
        <Link href="https://github.com/yourgithub" className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
            <FiGithub className="w-6 h-6 mr-2" />
            Visit GitHub
        </Link>
      </div>
    </div>
  );
};

export default OpenSource;
