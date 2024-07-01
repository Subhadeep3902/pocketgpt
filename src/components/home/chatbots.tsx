import Link from "next/link";

const chatbotsData = [
  {
    title: "Groq",
    description:
      "An AI-powered chatbot that enhances productivity through quick and accurate responses.",
    imageUrl: "code-llama-70b.webp",
    link: "/groq"
  },
  {
    title: "Gemini",
    description:
      "A conversational AI assistant designed to provide insightful and intelligent interactions.",
    imageUrl: "Gemini.jpeg",
    link: "/gemini"
  },
  {
    title: "ChatGPT Chatbot",
    description:
      "Our flagship chatbot leveraging advanced language models to assist users with a wide range of queries.",
    imageUrl: "ChatGPT.jpg",
    link: "/chat-gpt"
  },
  {
    title: "Gemini Vision",
    description:
      "An innovative image generator bot that creates stunning visuals based on user inputs.",
    imageUrl: "gemini-vision.jpeg",
    link: "/gemini-vision"
  },
];

function FancyButton() {
  return (
    <div className="w-full h-auto flex items-center justify-center cursor-pointer">
      <div className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold shadow text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 dark:bg-gray-700 dark:text-white dark:hover:text-gray-200 dark:shadow-none group">
        <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
        <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke="currentColor"
            fill="none"
            className="w-5 h-5 text-green-400"
          >
            <path
              d="M14 5l7 7m0 0l-7 7m7-7H3"
              stroke-width="2"
              stroke-linejoin="round"
              stroke-linecap="round"
            ></path>
          </svg>
        </span>
        <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke="currentColor"
            fill="none"
            className="w-5 h-5 text-green-400"
          >
            <path
              d="M14 5l7 7m0 0l-7 7m7-7H3"
              stroke-width="2"
              stroke-linejoin="round"
              stroke-linecap="round"
            ></path>
          </svg>
        </span>
        <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white dark:group-hover:text-gray-200">
          Start Using
        </span>
      </div>
    </div>
  );
}

function ChatBots() {
  return (
    <div id="chatbots" className="grid place-items-center w-full bg-gray-900">
      <div className="max-w-5xl py-24 px-4 md:px-0 content-center justify-center">
        <h1 className="text-4xl text-center font-bold text-slate-100 mb-12">
          Our Chatbots
        </h1>
        <div className="flex flex-col gap-8">
          {chatbotsData.map((bot, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row bg-gray-800 shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-lg overflow-hidden`}
            >
              <img
                src={bot.imageUrl}
                alt={bot.title}
                className="w-full h-auto object-cover md:w-1/2"
              />
              <div className="p-6 flex flex-col justify-center md:w-1/2">
                <h2 className="text-blue-500 text-2xl font-bold mb-4">
                  {bot.title}
                </h2>
                <p className="text-slate-100 mb-8">{bot.description}</p>
                <Link href={bot.link}>
                  <FancyButton />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ChatBots;
