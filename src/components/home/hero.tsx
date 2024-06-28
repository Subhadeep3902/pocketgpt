import Link from "next/link";

 const Hero = () => {
  return (
    <div className="hero py-12 bg-gradient-to-t from-gray-800 to-gray-900">
      <div className="hero-content md:px-0 px-4 max-w-6xl flex-col lg:flex-row-reverse items-center">
        <img
          src="cover.webp"
          className="max-w-sm h-80 object-cover rounded-lg shadow-2xl"
          alt="AI Design"
        />
        <div className="lg:pr-12 text-center lg:text-left">
          <h1 className="text-5xl text-slate-100 font-bold md:leading-none leading-tight md:mt-0 mt-10">
            Pocket GPT
            <span className="md:block mt-4">
              Boost Your Productivity with AI
            </span>
          </h1>
          <p className="py-2 text-xl text-slate-100 mt-4 mb-5">
            Leverage our AI-powered chatbots to enhance your productivity and
            get assistance in minutes.
          </p>
          <Link href="#chatbots">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
